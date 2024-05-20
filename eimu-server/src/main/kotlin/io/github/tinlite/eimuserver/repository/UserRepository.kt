package io.github.tinlite.eimuserver.repository

import io.github.tinlite.eimuserver.model.User
import io.github.tinlite.eimuserver.model.UserDetail
import io.github.tinlite.eimuserver.model.UserLoginDetail
import org.springframework.data.mongodb.repository.MongoRepository

interface UserRepository
    : MongoRepository<User, String> {

    fun findByNameContainsIgnoreCase(name: String): List<UserDetail>

    fun findByPhone(phone: String): List<UserDetail>

    fun findByEmailIgnoreCase(email: String): List<UserDetail>

    fun findFirstByEmailIgnoreCaseOrPhone(email: String, phone: String): UserLoginDetail?
    fun findAllByIdIn(id: Collection<String>): List<UserDetail>

}