package io.github.tinlite.eimuserver.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field

@Document("movie")
data class MovieDetail(
    @Id val id: String,
    var name: String,
    @Field("original_name") var originalName: String?,
    var description: String?,
    val tags: Collection<String>,
    val flags: Collection<String>?,
    @Field("thumb_url") var thumbUrl: String,
    @Field("poster_url") var posterUrl: String,
    var modified: Long,
    val episodes: List<EpisodeServer>
)

data class EpisodeServer(
    @Field("server_name") val serverName: String,
    @Field("items") val episodeList: List<Episode>
)

data class Episode(
    @Field("slug") val id: String,
    val name: String,
    val embed: String
)

data class MovieListEntry(
    @Id val id: String,
    var name: String,
    @Field("original_name") var originalName: String?,
    var description: String?,
    val tags: Collection<String>,
    @Field("thumb_url") var thumbUrl: String,
    @Field("poster_url") var posterUrl: String,
    var modified: Long,
)