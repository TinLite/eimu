package io.github.tinlite.eimuserver.model

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

@Document("user")
data class User(
//    @Field("_id") val id: ObjectId,
    @Id val id: ObjectId,
    var name: String,
    var dateOfBirth: Date?,
    var phone: String?,
    var email: String?,
    var role: String

)