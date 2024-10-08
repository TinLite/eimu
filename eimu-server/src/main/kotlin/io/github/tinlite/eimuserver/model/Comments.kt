package io.github.tinlite.eimuserver.model

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

data class Comments (
     val movieId: String,
     val userId: String,
     val content: String,
     val replyTo: ObjectId?
 )

data class ContentComment(
    @Id val id: ObjectId,
    var content: String
)

@Document("user_comments")
data class DataComments(
    @Id val id: ObjectId,
    val movieId: String,
    val userId: String,
    var content: String,
    val replyTo: ObjectId?,
    val timestamp: Date,
    val likes: MutableList<ObjectId>
) {
    constructor(
        movieId: String,
        userId: String,
        content: String,
        replyTo: ObjectId
    ) : this(id = ObjectId(), movieId, userId, content, replyTo, Date(System.currentTimeMillis()), mutableListOf())

    constructor(
        movieId: String,
        userId: String,
        content: String
    ) : this(id = ObjectId(), movieId, userId, content, null, Date(System.currentTimeMillis()), mutableListOf())
}

data class LikeAction(
    val id: ObjectId,
    val userId: ObjectId
)
