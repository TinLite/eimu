package io.github.tinlite.eimuserver.controller

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.databind.SerializationFeature
import com.fasterxml.jackson.module.kotlin.KotlinModule
import io.github.tinlite.eimuserver.model.User
import io.github.tinlite.eimuserver.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.PageRequest
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.text.SimpleDateFormat

@RestController()
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
    fun updateAccount(@RequestBody user: User): User {
//        return user;
        return userRepository.save(user)
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

    @GetMapping("/detail/{name}")
    fun detail(@PathVariable name: String): ResponseEntity<List<User>> {
        val data = userRepository.findByName(name)
        return ResponseEntity(data, HttpStatus.OK)
    }
}