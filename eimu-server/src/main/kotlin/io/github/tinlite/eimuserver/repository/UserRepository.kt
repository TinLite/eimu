package io.github.tinlite.eimuserver.repository

import io.github.tinlite.eimuserver.model.User
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query

interface UserRepository
    : MongoRepository<User, String> {
    fun existsByEmail(email: String): User?
    fun existsByPhone(phone: String): User?

    @Query("{ 'name' : { '\$regex' : ?0, '\$options' : 'i' } }")
    fun findByName(name: String): List<User>

    @Query("{ 'phone' : ?0 }")
    fun findByPhone(phone: String): List<User>

    //        @Query("{ 'email' :{ '\$regex' : ?0, '\$options' : 'i' } }")
    fun findByEmailIgnoreCase(email: String): List<User>
}