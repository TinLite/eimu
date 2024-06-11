package io.github.tinlite.eimuserver.controller

import io.github.tinlite.eimuserver.repository.MovieDetailRepository
import io.github.tinlite.eimuserver.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.PageRequest
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("follow")

class UserMovieController {
    @Autowired
    private lateinit var movieDetailRepository: MovieDetailRepository

    @Autowired
    lateinit var userRepository: UserRepository

    @Autowired
    lateinit var userMovieRepository: MovieDetailRepository

    @PostMapping("/add")
    fun addFollow(
        @RequestParam userId: String,
        @RequestParam movieId: String
    )
            : ResponseEntity<MutableList<String>> {
        val user = userRepository.findByIdOrNull(userId) ?: return ResponseEntity.notFound().build()
        val isMovieExistsInDatabase = userMovieRepository.existsById(movieId)
        val isUserAlreadyFollowedMovie = user.follows?.contains(movieId)
        if (!isMovieExistsInDatabase || isUserAlreadyFollowedMovie == true) {
            return ResponseEntity.notFound().build()
        }
        if (user.follows == null) {
            user.follows = mutableListOf()
        }
        user.follows?.add(movieId) // Khong can phai gan lai, cai nay no thay doi han follow r
        userRepository.save(user)
        return ResponseEntity.ok(user.follows ?: mutableListOf())
    }

    @GetMapping("/list")
    fun listFollow(@RequestParam userId: String): ResponseEntity<List<String>> {
        val user = userRepository.findByIdOrNull(userId)
        return if (user != null) {
            ResponseEntity.ok(user.follows ?: listOf())
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @GetMapping("/listmoviedetail")
    fun listWithMovieDetail(
        @RequestParam userId: String,
        @RequestParam page: Int = 1,
        @RequestParam size: Int = 20
    ): ResponseEntity<Map<String, Any>> {
        val user = userRepository.findByIdOrNull(userId) ?: return ResponseEntity.notFound().build()
        val movieList = movieDetailRepository.findAllByIdIn(
            user.follows ?: emptyList(),
            PageRequest.of(page - 1, size)
        )
        return ResponseEntity.ok(
            mapOf(
                "items" to movieList.content,
                "pageable" to mapOf(
                    "page" to page,
                    "totalPages" to movieList.totalPages,
                    "totalElements" to movieList.totalElements,
                    "hasNext" to movieList.hasNext(),
                    "hasPrevious" to movieList.hasPrevious()
                )
            )
        )
    }

    @PostMapping("/delete")
    fun delFollow(
        @RequestParam userId: String,
        @RequestParam movieId: String
    ): ResponseEntity<Any> {
        val user = userRepository.findByIdOrNull(userId) ?: return ResponseEntity.notFound().build()
        val isMovieExistsInDatabase = userMovieRepository.existsById(movieId)
        if (!isMovieExistsInDatabase)
            return ResponseEntity.notFound().build()
        user.follows?.remove(movieId)
        userRepository.save(user)
        return ResponseEntity.ok(user.follows)
    }

}