package io.github.tinlite.eimuserver.controller

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.databind.SerializationFeature
import com.fasterxml.jackson.module.kotlin.KotlinModule
import io.github.tinlite.eimuserver.model.User
import io.github.tinlite.eimuserver.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.PageRequest
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.text.SimpleDateFormat

@RestController
@RequestMapping("/user")
class UserController {
    @Autowired
    lateinit var userRepository: UserRepository

    val DEFAULT_JACKSON_MAPPER = ObjectMapper().registerModule(
        KotlinModule
            .Builder()
            .build()
    )
        .apply {
            disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS)
            dateFormat = SimpleDateFormat("dd-MM-yyyy")
        }

    @PostMapping("/create")
    fun createAccount(@RequestBody user: User): User {
        return userRepository.insert(user)
    }

    @GetMapping("/show")
    fun showAccount(@RequestParam id: String): ResponseEntity<MutableMap<*, *>> {
        val user = userRepository.findByIdOrNull(id) ?: return ResponseEntity.notFound().build()
        val userJson = DEFAULT_JACKSON_MAPPER.convertValue(user, MutableMap::class.java)
        return ResponseEntity.ok(userJson)
    }

    @PostMapping("/update")
    fun updateAccount(@RequestBody user: Map<String, String>): ResponseEntity<Map<String, Any?>> {
        val dataUser = userRepository.findByIdOrNull(user["id"]) ?: return ResponseEntity.notFound().build()
        user.forEach {
            when (it.key) {
                "name" -> dataUser.name = it.value
                "phone" -> dataUser.phone = it.value
                "email" -> dataUser.email = it.value
                // "dateOfBirth" -> dataUser.dateOfBirth = it.value
                "role" -> dataUser.role = it.value
            }
        }
        userRepository.save(dataUser)
        return ResponseEntity.ok(user)
    }

    @GetMapping("/listuser")
    fun showList(@RequestParam page: Int = 1, @RequestParam size: Int = 10): List<User> {
        val data = userRepository.findAll(PageRequest.of(page - 1, size))
        return data.content
    }

    @GetMapping("/search")
    fun searchUser(
        @RequestParam query: String,
        @RequestParam field: String
    ): ResponseEntity<List<User>> {
        val data = when (field.lowercase()) {
            "name" -> userRepository.findByName(query)
            "phone" -> userRepository.findByPhone(query)
            "email" -> userRepository.findByEmailIgnoreCase(query)
            else -> return ResponseEntity.notFound().build()
        }
        return ResponseEntity.ok(data)
    }

    @GetMapping("/detail/{id}")
    fun detail(@PathVariable id: String): ResponseEntity<User> {
        val data = userRepository.findByIdOrNull(id)
        return ResponseEntity.ok(data)
    }
    @PostMapping("/delete/{id}")
    fun deleteUser(@PathVariable id: String):ResponseEntity<Any>{
        val datadelete = userRepository.deleteById(id)
        return ResponseEntity.ok().build()
    }
}