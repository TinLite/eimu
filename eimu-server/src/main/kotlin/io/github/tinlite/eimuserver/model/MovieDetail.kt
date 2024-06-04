package io.github.tinlite.eimuserver.model

import com.fasterxml.jackson.annotation.JsonView
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field
import org.springframework.data.mongodb.core.mapping.TextScore

@Document("movie")
data class MovieDetail(
    @JsonView(MovieListEntry::class) @Id val id: String,
    @JsonView(MovieListEntry::class) var name: String,
    @JsonView(MovieListEntry::class) val year: Int?,
    @JsonView(MovieListEntry::class) @Field("original_name") var originalName: String?,
    @JsonView(MovieListEntry::class) var description: String?,
    @JsonView(MovieListEntry::class) val tags: Collection<String>,
    val flags: Collection<String>?,
    @JsonView(MovieListEntry::class) @Field("thumb_url") var thumbUrl: String,
    @JsonView(MovieListEntry::class) @Field("poster_url") var posterUrl: String,
    @JsonView(MovieListEntry::class) var modified: Long,
    val episodes: List<EpisodeServer>,
    val director: String?,
    val language: String?,
    val casts: String?,
    @Field("total_episodes") val totalEpisodes : Int?,
    @TextScore val score: Float?
) {
    interface MovieListEntry
}

data class EpisodeServer(
    @Field("server_name") val serverName: String,
    @Field("items") val episodeList: List<Episode>
)

data class Episode(
    @Field("slug") val id: String,
    val name: String,
    val embed: String?
)

data class MovieListEntry(
    @Id val id: String,
    var name: String,
    @Field("original_name") var originalName: String?,
    var description: String?,
    val tags: Collection<String>,
    @Field("thumb_url") var thumbUrl: String,
    @Field("poster_url") var posterUrl: String,
    var modified: Long
)
//data class MovieHistory(
//    val userId: String,
//    val movieId: String,
//    val episodes: String,
//    val watched: LocalDateTime
//)
//data class  MovieWatched(
//    val userId: String,
//    val movieId: String,
//    val episodes: String
//)