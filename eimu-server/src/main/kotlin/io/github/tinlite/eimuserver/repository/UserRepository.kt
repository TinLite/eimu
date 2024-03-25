package io.github.tinlite.eimuserver.repository

import io.github.tinlite.eimuserver.model.User
import org.springframework.data.mongodb.repository.MongoRepository

interface UserRepository
    : MongoRepository<User, String> {

    fun existsByEmail(email: String): User?

    fun existsByPhone(phone: String): User?

    fun findByName(name: String): List<User>

    fun findByPhone(phone: String): List<User>

//    fun

    //        @Query("{ 'email' :{ '\$regex' : ?0, '\$options' : 'i' } }")
    fun findByEmailIgnoreCase(email: String): List<User>
}