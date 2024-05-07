package io.github.tinlite.eimuserver.model

import com.fasterxml.jackson.annotation.JsonView
import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

@Document("user")
data class User(
    @JsonView(UserDetail::class) @Id val id: ObjectId?,
    @JsonView(UserDetail::class) var name: String,
    @JsonView(UserDetail::class) var dateOfBirth: Date?,
    @JsonView(UserDetail::class) var phone: String?,
    @JsonView(UserDetail::class) var email: String?,
    var follows: MutableList<String>?,
    @JsonView(UserDetail::class) var role: String,
    val hashedPassword: String
) {
    interface UserDetail
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