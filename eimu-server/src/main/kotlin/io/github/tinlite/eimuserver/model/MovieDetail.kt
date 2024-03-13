package io.github.tinlite.eimuserver.model

import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field

@Document("movie")
data class MovieDetail(
    @Field("_id") val id: String,
    val name: String,
    @Field("original_name") val originalName: String?,
    val description: String?,
    @Field("thumb_url") val thumbUrl: String,
    @Field("poster_url") val posterUrl: String,
    val modified: Long,
    val episodes: List<EpisodeServer>
)

data class EpisodeServer(
    val server_name: String,
    @Field("items") val episodeList: Array<Episode>
)

data class Episode(
    val name: String,
    val embed: String
)