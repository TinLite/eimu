package io.github.tinlite.eimuserver.model

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

data class Comments (
     val movieId: String,
     val userId: String,
     val content: String,
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
    val replyto: String?,
    val timestamp: Date
)