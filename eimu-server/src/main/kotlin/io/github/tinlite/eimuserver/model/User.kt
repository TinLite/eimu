package io.github.tinlite.eimuserver.model

import com.fasterxml.jackson.annotation.JsonView
import org.bson.types.ObjectId
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

enum class UserFlag {
    BANNED_LOGIN,
    BANNED_COMMENT
}

@Document("user")
data class User(
    @JsonView(UserBasic::class) @Id val id: ObjectId?,
    @JsonView(UserBasic::class) var name: String,
    @JsonView(UserDetail::class) var dateOfBirth: Date?,
    @JsonView(UserDetail::class) var phone: String?,
    @JsonView(UserDetail::class) var email: String?,
    var follows: MutableList<String>?,
    @JsonView(UserDetail::class) var role: String,
    @JsonView(UserBasic::class) var flags: MutableList<UserFlag>?,
    val hashedPassword: String,
    var watchHistory: MutableList<WatchHistory>?,
    @CreatedDate val timestamp: Date? = null
) {
    interface UserBasic
    interface UserDetail : UserBasic
}

data class UserLoginDetail(
    @Id val id: ObjectId,
    val name: String,
    val hashedPassword: String
)

data class UserDetail(
    @Id val id: ObjectId,
    var name: String,
    var dateOfBirth: Date?,
    var phone: String?,
    var email: String?,
    var role: String,
)
data class WatchHistory(
    val movieId: String,
    var watchedEpisode: String, // ID của tập phim
    var timestamp: Date = Date()
)

data class SaveWatchHistoryRequest(
    val userId: String,
    val movieId: String,
    val watchedEpisode: String // ID của tập phim
)