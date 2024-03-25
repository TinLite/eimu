package io.github.tinlite.eimuserver.controller

import io.github.tinlite.eimuserver.model.EpisodeServer
import io.github.tinlite.eimuserver.model.MovieDetail
import io.github.tinlite.eimuserver.repository.MovieDetailRepository
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Sort
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/movie")
class MovieController {
    val logger : Logger = LoggerFactory.getLogger(this.javaClass)

    @Autowired
    lateinit var movieDetailRepository: MovieDetailRepository

    @GetMapping
    fun listPaginated(@RequestParam page: Int = 1, @RequestParam size: Int = 20, @RequestParam tag: String?): ResponseEntity<Map<String, Any>> {
        val data = if (tag.isNullOrBlank())
            movieDetailRepository.findAllBy(PageRequest.of(page - 1, size, Sort.by("modified").descending()))
        else
            movieDetailRepository.findAllByTagsContains(tag, PageRequest.of(page - 1, size, Sort.by("modified").descending()))

        val response = mapOf(
            "pageable" to mapOf(
                "page" to page,
                "totalPages" to data.totalPages,
                "totalElements" to data.totalElements,
                "hasPrevious" to data.hasPrevious(),
                "hasNext" to data.hasNext()
            ),
            "items" to data.content
        )
        return ResponseEntity.ok(response)
    }

    @GetMapping("/{id}")
    fun index(@PathVariable id: String): ResponseEntity<MovieDetail> {
        val movie = movieDetailRepository.findByIdOrNull(id) ?: return ResponseEntity.notFound().build()
        return ResponseEntity.ok(movie)
    }

    @PostMapping("/{id}/update")
    fun update(@PathVariable id: String, @RequestBody data: List<EpisodeServer>) : ResponseEntity<Any> {
        return ResponseEntity.ok(
            movieDetailRepository.findAndUpdateEpisodesById(id, data)
        )
    }
}