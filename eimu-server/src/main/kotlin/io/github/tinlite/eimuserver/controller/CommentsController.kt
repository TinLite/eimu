package io.github.tinlite.eimuserver.controller

import io.github.tinlite.eimuserver.model.Comments
import io.github.tinlite.eimuserver.model.ContentComment
import io.github.tinlite.eimuserver.model.DataComments
import io.github.tinlite.eimuserver.model.LikeAction
import io.github.tinlite.eimuserver.repository.CommentsRepository
import io.github.tinlite.eimuserver.repository.MovieDetailRepository
import io.github.tinlite.eimuserver.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

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
                    movieId = comments.movieId,
                    userId = comments.userId,
                    content = comments.content
                )
            )
            return ResponseEntity.ok().build()
        } else {
            return ResponseEntity.badRequest().build()
        }
    }

    @GetMapping("/search")
    fun searchComment(@RequestParam query: String, @RequestParam field: String)
            : ResponseEntity<List<Map<String, Any?>>> {
        val data = when (field.lowercase()) {
            "id" -> {
                val res = commentsRepository.findByIdOrNull(query)
                if (res != null) {
                    listOf(res)
                } else {
                    emptyList()
                }
            }
            "userid" -> commentsRepository.findByUserId(query)
            "movieid" -> commentsRepository.findByMovieId(query)
            "content" -> commentsRepository.findByContentContainsIgnoreCase(query)
            else -> return ResponseEntity.notFound().build()
        }
        val userIds = data.map {
            it.userId
        }
        val movieIds = data.map {
            it.movieId
        }
        val movieList = movieDetailRepository.findAllByIdIn(movieIds)
        val userList = userRepository.findAllByIdIn(userIds)
        fun map(it1: DataComments): Map<String, Any?> {
            return mapOf(
                "id" to it1.id.toHexString(),
                "userId" to it1.userId,
                "username" to userList.first { it2 -> it1.userId == it2.id.toHexString() }.name,
                "movieId" to it1.movieId,
                "movieName" to movieList.first { it2 -> it1.movieId == it2.id }.name,
                "likes" to it1.likes,
                "content" to it1.content,
                "replyTo" to it1.replyTo,
                "timestamp" to it1.timestamp,
            )
        }

        val result = data.map { map(it) }
        return ResponseEntity.ok(result)
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
                    movieId = replyComments.movieId,
                    userId = replyComments.userId,
                    content = replyComments.content,
                    replyTo = replyComments.replyTo,
                )
            )
            return ResponseEntity.ok().build()
        }
        return ResponseEntity.badRequest().build()
    }
    @PostMapping("/addlike")
    fun addLike(@RequestBody likeAction: LikeAction): ResponseEntity<Unit> {
        val comment =
            commentsRepository.findByIdOrNull(likeAction.id.toHexString()) ?: return ResponseEntity.notFound().build()
        if (!userRepository.existsById(likeAction.userId.toHexString())) {
            return ResponseEntity.badRequest().build()
        }
        if (!comment.likes.contains(likeAction.userId)) {
            comment.likes.add(likeAction.userId)
            commentsRepository.save(comment)
        }
        return ResponseEntity.ok().build()
    }
    @PostMapping("/removelike")
    fun remove(@RequestBody likeAction: LikeAction): ResponseEntity<Unit> {
        val comment =
            commentsRepository.findByIdOrNull(likeAction.id.toHexString()) ?: return ResponseEntity.notFound().build()
        if (comment.likes.remove(likeAction.userId)) {
            commentsRepository.save(comment)
        }
        return ResponseEntity.ok().build()
    }
    @GetMapping("/replies")
    fun getAllReply(@RequestParam movieId: String): ResponseEntity<List<Map<String, Any?>>> {
        if (!movieDetailRepository.existsById(movieId)) {
            return ResponseEntity.notFound().build()
        }
        val comments = commentsRepository.findByMovieId(movieId).sortedByDescending { it.timestamp }
        val userIds = comments.map {
            it.userId
        }
        val userList = userRepository.findAllByIdIn(userIds)
        fun map(it1: DataComments): Map<String, Any?> {
            return mapOf(
                "id" to it1.id.toHexString(),
                "userId" to it1.userId,
                "userName" to userList.first { it2 -> it1.userId == it2.id.toHexString() }.name,
                "movieId" to it1.movieId,
                "likes" to it1.likes,
                "content" to it1.content,
                "replyTo" to it1.replyTo,
                "replies" to comments.filter { it2 -> it2.replyTo == it1.id }
                    .map { it3 -> map(it3) },//Goi lai fun map(it1: DataComments) để lấy username
                "timestamp" to it1.timestamp,
            )
        }

        val result = comments.filter { it.replyTo == null }.map {
            map(it)
        }
        return ResponseEntity.ok(result);
    }
}