package io.github.tinlite.eimuserver.controller

import io.github.tinlite.eimuserver.model.MovieTag
import io.github.tinlite.eimuserver.repository.MovieTagRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("movietag")
class MovieTagController {
    @Autowired
    lateinit var tagRepository: MovieTagRepository

    @GetMapping
    fun list(@RequestParam ids: Collection<String>?) : ResponseEntity<Collection<MovieTag>> {
        return ResponseEntity.ok(
            if (ids.isNullOrEmpty()) tagRepository.findAll()
            else tagRepository.findAllByIdIn(ids)
        )
    }
}