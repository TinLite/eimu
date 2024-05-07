package io.github.tinlite.eimuserver.controller

import io.github.tinlite.eimuserver.model.User
import io.github.tinlite.eimuserver.model.UserDetail
import io.github.tinlite.eimuserver.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.PageRequest
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.ResponseEntity
import org.springframework.http.converter.json.MappingJacksonValue
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/user")
class UserController {
    @Autowired
    lateinit var userRepository: UserRepository

    @PostMapping("/create")
    fun createAccount(@RequestBody user: User): User {
        return userRepository.insert(user)
    }

    @GetMapping("/show")
    fun showAccount(@RequestParam id: String): ResponseEntity<MappingJacksonValue> {
        val user = (userRepository.findByIdOrNull(id) ?: return ResponseEntity.notFound().build())
        val map = MappingJacksonValue(user)
        map.serializationView = User.UserDetail::class.java
        return ResponseEntity.ok(map)
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
    fun showList(@RequestParam page: Int = 1, @RequestParam size: Int = 10): ResponseEntity<Map<String, Any>> {
        val result = userRepository.findAll(PageRequest.of(page - 1, size))
        val show = result.content.map { user ->
            mapOf(
                "id" to user.id,
                "name" to user.name,
                "email" to user.email,
                "phone" to user.phone
            )
        }
        val pagination = mapOf(
            "totalPages" to result.totalPages,
            "totalElements" to result.totalElements,
            "currentPage" to result.number + 1,

            )
        val response = mapOf(
            "pagination" to pagination,
            "data" to show
        )
        return ResponseEntity.ok(response)
    }

    @GetMapping("/search")
    fun searchUser(
        @RequestParam query: String,
        @RequestParam field: String
    ): ResponseEntity<List<UserDetail>> {
        val data = when (field.lowercase()) {
            "name" -> userRepository.findByNameContainsIgnoreCase(query)
            "phone" -> userRepository.findByPhone(query)
            "email" -> userRepository.findByEmailIgnoreCase(query)
            else -> return ResponseEntity.notFound().build()
        }
        return ResponseEntity.ok(data)
    }

    @PostMapping("/delete/{id}")
    fun deleteUser(@PathVariable id: String): ResponseEntity<Unit> {
        userRepository.deleteById(id)
        return ResponseEntity.ok().build()
    }

    @GetMapping("/getLoginDetail")
    fun getLoginDetail(@RequestParam v: String): ResponseEntity<Map<String, String>> {
        val userLoginDetail = userRepository.findFirstByEmailIgnoreCaseOrPhone(v, v) ?: return ResponseEntity.notFound().build()
        return ResponseEntity.ok(mapOf(
            "id" to userLoginDetail.id.toHexString(),
            "name" to userLoginDetail.name,
            "hashedPassword" to userLoginDetail.hashedPassword
        ))
    }


}