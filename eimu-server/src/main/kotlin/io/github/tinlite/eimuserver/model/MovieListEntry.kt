package io.github.tinlite.eimuserver.model

import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field

@Document("movie")
data class MovieListEntry(
    @Field("_id") val id: String,
    val name: String,
    @Field("thumb_url") val thumbUrl: String,
    @Field("poster_url") val posterUrl: String,
    val modified: Long,
)
