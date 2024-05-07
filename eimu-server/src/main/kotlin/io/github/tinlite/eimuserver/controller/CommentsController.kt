package io.github.tinlite.eimuserver.controller

import io.github.tinlite.eimuserver.model.Comments
import io.github.tinlite.eimuserver.model.ContentComment
import io.github.tinlite.eimuserver.model.DataComments
import io.github.tinlite.eimuserver.repository.CommentsRepository
import io.github.tinlite.eimuserver.repository.MovieDetailRepository
import io.github.tinlite.eimuserver.repository.UserRepository
import org.bson.types.ObjectId
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/comments")
class CommentsController {
    @Autowired
    lateinit var commentsRepository: CommentsRepository

    @Autowired
    lateinit var userRepository: UserRepository

    @Autowired
    lateinit var movieDetailRepository: MovieDetailRepository

    @PostMapping("/create")
    fun addComment(@RequestBody comments: Comments): ResponseEntity<Unit> {
        if (movieDetailRepository.existsById(comments.movieId) &&
            userRepository.existsById(comments.userId)
        ) {
            commentsRepository.save(
                DataComments(
                    ObjectId(), movieId = comments.movieId,
                    userId = comments.userId,
                    content = comments.content,
                    timestamp = Date(),
                    replyTo = comments.replyTo
                )
            )
            return ResponseEntity.ok().build()
        } else {
            return ResponseEntity.badRequest().build()
        }
    }

    @GetMapping("/search")
    fun searchComment(@RequestParam query: String, @RequestParam field: String)
            : ResponseEntity<List<DataComments>> {
        val data = when (field.lowercase()) {
            "userid" -> commentsRepository.findByUserId(query)
            "movieid" -> commentsRepository.findByMovieId(query)
            "content" -> commentsRepository.findByContent(query)
            else -> return ResponseEntity.notFound().build()
        }
        return ResponseEntity.ok(data)
    }

    @PostMapping("/delete/{id}")
    fun deleteComment(@PathVariable id: String): ResponseEntity<Any> {
        commentsRepository.deleteById(id)
        return ResponseEntity.ok().build()
    }
    @PostMapping("/update")
    fun updateComment(@RequestBody updatecomment: ContentComment )
    : ResponseEntity<Unit>{
        val data = commentsRepository.findByIdOrNull(updatecomment.id.toString())
        if (data != null) {
            data.content = updatecomment.content
            commentsRepository.save(data)
            return ResponseEntity.ok().build()
        } else {
            return ResponseEntity.notFound().build()
        }
    }

    @PostMapping("/reply/")
    fun replyComment(@RequestBody replyComments: Comments)
            : ResponseEntity<DataComments> {
        if (
            replyComments.replyTo != null && commentsRepository.existsById(replyComments.replyTo.toHexString())
            && userRepository.existsById(replyComments.userId)
            && movieDetailRepository.existsById(replyComments.movieId)
        ) {
            commentsRepository.save(
                DataComments(
                    id = ObjectId(),
                    movieId = replyComments.movieId,
                    userId = replyComments.userId,
                    content = replyComments.content,
                    replyTo = replyComments.replyTo,
                    timestamp = Date(System.currentTimeMillis())
                )
            )
            return ResponseEntity.ok().build()
        }
        return ResponseEntity.badRequest().build()
    }
}