package io.github.tinlite.eimuserver.model

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

@Document("user")
data class User(
    @Id val id: ObjectId?,
    var name: String,
    var dateOfBirth: Date?,
    var phone: String?,
    var email: String?,
    var role: String,
    val hashedPassword: String
)

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