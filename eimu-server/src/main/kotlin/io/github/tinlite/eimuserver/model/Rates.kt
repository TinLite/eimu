package io.github.tinlite.eimuserver.model

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document("rating")
data class Rates(
    @Id val id: ObjectId,
    val movieId: String,
    val userId: String,
    var rating: Int
) {
    constructor(
        movieId: String,
        userId: String,
        rating: Int
    ) : this(id = ObjectId(), movieId, userId, rating)
}

data class RequestRating(
    val movieId: String,
    val userId: String,
    val rating: Int
)
