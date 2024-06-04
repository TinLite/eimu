package io.github.tinlite.eimuserver.controller

import io.github.tinlite.eimuserver.repository.MovieDetailRepository
import io.github.tinlite.eimuserver.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("follow")

class UserMovieController {
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
        user.follows?.add(movieId) // Khong can phai gan lai, cai nay no thay doi han follow r
        userRepository.save(user)
        return ResponseEntity.ok(user.follows ?: mutableListOf())
    }

    @GetMapping("/list")
    fun listFollow(@RequestParam userId: String): ResponseEntity<List<String>> {
        val user = userRepository.findByIdOrNull(userId)
        return if (user != null) {
            ResponseEntity.ok(user.follows)
        } else {
            ResponseEntity.notFound().build()
        }
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