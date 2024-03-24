package io.github.tinlite.eimuserver.model

import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

@Document("user")
data class User(
//    @Field("_id") val id: ObjectId,
    val name: String,
    val dateOfBirth: Date?,
    val phone: String?,
    val email: String?,
    val role: String

)