package io.github.tinlite.eimuserver.model

import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field

@Document("movie_tag")
data class MovieTag(
    @Field("_id") val id: String,
    val category: String,
    val value: String
)
