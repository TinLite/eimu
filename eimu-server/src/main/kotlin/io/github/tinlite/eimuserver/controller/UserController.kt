package io.github.tinlite.eimuserver.controller

import io.github.tinlite.eimuserver.model.*
import io.github.tinlite.eimuserver.repository.CommentsRepository
import io.github.tinlite.eimuserver.repository.MovieDetailRepository
import io.github.tinlite.eimuserver.repository.RatesRepository
import io.github.tinlite.eimuserver.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.PageRequest
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.ResponseEntity
import org.springframework.http.converter.json.MappingJacksonValue
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/user")
class UserController {
    @Autowired
    lateinit var userRepository: UserRepository

    @Autowired
    lateinit var userMovieRepository: MovieDetailRepository

    @Autowired
    lateinit var commentRepository: CommentsRepository

    @Autowired
    lateinit var rateRepository: RatesRepository
    @PostMapping("/create")
    fun createAccount(@RequestBody user: User): User {
        return userRepository.insert(user)
    }

    @GetMapping("/show")
    fun showAccount(@RequestParam id: String): ResponseEntity<MappingJacksonValue> {
        val user = (userRepository.findByIdOrNull(id) ?: return ResponseEntity.notFound().build())
        val map = MappingJacksonValue(user)
        map.serializationView = User.UserDetail::class.java
        return ResponseEntity.ok(map)
    }

    @PostMapping("/update")
    fun updateAccount(@RequestBody user: Map<String, String>): ResponseEntity<Map<String, Any?>> {
        val dataUser = userRepository.findByIdOrNull(user["id"]) ?: return ResponseEntity.notFound().build()
        user.forEach {
            when (it.key) {
                "name" -> dataUser.name = it.value
                "phone" -> dataUser.phone = it.value
                "email" -> dataUser.email = it.value
                // "dateOfBirth" -> dataUser.dateOfBirth = it.value
                "role" -> dataUser.role = it.value
            }
        }
        userRepository.save(dataUser)
        return ResponseEntity.ok(user)
    }

    @PostMapping("/updateFlags/{userId}")
    fun updateFlag(@RequestBody flags: MutableList<UserFlag>, @PathVariable userId: String): ResponseEntity<Unit> {
        val user = userRepository.findByIdOrNull(userId) ?: return ResponseEntity.notFound().build()
        user.flags = flags
        userRepository.save(user)
        return ResponseEntity.ok().build()
    }

    @GetMapping("/listuser")
    fun showList(@RequestParam page: Int = 1, @RequestParam size: Int = 10): ResponseEntity<Map<String, Any>> {
        val result = userRepository.findAll(PageRequest.of(page - 1, size))
        val show = result.content.map { user ->
            mapOf(
                "id" to user.id,
                "name" to user.name,
                "email" to user.email,
                "phone" to user.phone,
                "flags" to (user.flags ?: emptyList()),
                "role" to user.role,
            )
        }
        val pagination = mapOf(
            "totalPages" to result.totalPages,
            "totalElements" to result.totalElements,
            "currentPage" to result.number + 1,

            )
        val response = mapOf(
            "pagination" to pagination,
            "data" to show
        )
        return ResponseEntity.ok(response)
    }

    @GetMapping("/search")
    fun searchUser(
        @RequestParam query: String,
        @RequestParam field: String
    ): ResponseEntity<List<UserDetail>> {
        val data = when (field.lowercase()) {
            "name" -> userRepository.findByNameContainsIgnoreCase(query)
            "phone" -> userRepository.findByPhone(query)
            "email" -> userRepository.findByEmailIgnoreCase(query)
            else -> return ResponseEntity.notFound().build()
        }
        return ResponseEntity.ok(data)
    }

    @PostMapping("/delete/{id}")
    fun deleteUser(@PathVariable id: String): ResponseEntity<Unit> {
        userRepository.deleteById(id)
        return ResponseEntity.ok().build()
    }

    @GetMapping("/getLoginDetail")
    fun getLoginDetail(@RequestParam v: String): ResponseEntity<Map<String, String>> {
        val userLoginDetail = userRepository.findFirstByEmailIgnoreCaseOrPhone(v, v) ?: return ResponseEntity.notFound().build()
        return ResponseEntity.ok(mapOf(
            "id" to userLoginDetail.id.toHexString(),
            "name" to userLoginDetail.name,
            "hashedPassword" to userLoginDetail.hashedPassword
        ))
    }

    @PostMapping("/watch")
    fun saveWatchedMovie(@RequestBody watchRequest: SaveWatchHistoryRequest): ResponseEntity<Unit> {
        val userId = userRepository.existsById(watchRequest.userId)
        val movieId = userMovieRepository.existsById(watchRequest.movieId)
        if (userId && movieId) {
            val user = userRepository.findByIdOrNull(watchRequest.userId) ?: return ResponseEntity.notFound().build()
            if (user.watchHistory == null) {
                user.watchHistory = mutableListOf()
            }
            val mov = user.watchHistory?.filter {
                it.movieId == watchRequest.movieId
            }
            if (mov.isNullOrEmpty()) {
                val data = WatchHistory(
                    movieId = watchRequest.movieId,
                    watchedEpisode = watchRequest.watchedEpisode,
                    timestamp = Date(System.currentTimeMillis())
                )
                user.watchHistory?.add(data)
            } else {
                mov[0].watchedEpisode = watchRequest.watchedEpisode
                mov[0].timestamp = Date(System.currentTimeMillis())
            }
            userRepository.save(user)
            return ResponseEntity.ok().build()
        } else {
            return ResponseEntity.badRequest().build()
        }
    }

    @GetMapping("/history/{id}")
    fun listHistory(@PathVariable id: String): ResponseEntity<List<WatchHistory>> {
        val user = userRepository.findByIdOrNull(id)
        return if (user != null) {
            if (user.watchHistory != null) {
                return ResponseEntity.ok(user.watchHistory?.sortedByDescending { it.timestamp })
            } else {
                return ResponseEntity.ok(emptyList())
            }
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @GetMapping("/historyfilm/{userId}/{movieId}")
    fun listOneHistoryMovie(
        @PathVariable userId: String,
        @PathVariable movieId: String
    ): ResponseEntity<List<WatchHistory>> {
        val user = userRepository.findByIdOrNull(userId) ?: return ResponseEntity.notFound().build()
        val movie = user.watchHistory?.filter {
            it.movieId == movieId
        }
        if (movie == null) {
            return ResponseEntity.notFound().build()
        }
        return ResponseEntity.ok(movie)
    }


    @PostMapping("/deletehistory")
    fun deleteHistory(
        @RequestParam userId: String,
        @RequestParam movieId: String,
    ): ResponseEntity<Unit> {
        val user = userRepository.findByIdOrNull(userId) ?: return ResponseEntity.notFound().build()
        user.watchHistory = user.watchHistory?.filterNot {
            it.movieId == movieId
        }?.toMutableList()
        userRepository.save(user)
        return ResponseEntity.ok().build()
    }

    @GetMapping("/stat")
    fun getUserStat(): ResponseEntity<Map<String, Any>> {
        val totalUsers = userRepository.count()
        val totalMovies = userMovieRepository.count()
        val totalComments = commentRepository.count()

        val now = Date(System.currentTimeMillis())
        val then = Date(System.currentTimeMillis() - 1000 * 60 * 60 * 24)

        val usersCreatedToday = userRepository.findAllByTimestampBetween(then, now)
        val totalUsersCreatedToday = usersCreatedToday.size
        val stat = mapOf(
            "totalUsers" to totalUsers,
            "newUsersToday" to totalUsersCreatedToday,
            "totalMovies" to totalMovies,
            "totalComments" to totalComments

        )
        return ResponseEntity.ok(stat)
    }
}