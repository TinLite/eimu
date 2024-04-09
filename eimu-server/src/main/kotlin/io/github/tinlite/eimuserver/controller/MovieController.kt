package io.github.tinlite.eimuserver.controller

import io.github.tinlite.eimuserver.model.EpisodeServer
import io.github.tinlite.eimuserver.model.MovieDetail
import io.github.tinlite.eimuserver.repository.MovieDetailRepository
import io.github.tinlite.eimuserver.repository.MovieTagRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Sort
import org.springframework.data.mongodb.core.query.TextCriteria
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/movie")
class MovieController {
    @Autowired
    lateinit var movieDetailRepository: MovieDetailRepository

    @Autowired
    lateinit var tagRepository: MovieTagRepository

    @GetMapping
    fun listPaginated(@RequestParam page: Int = 1, @RequestParam size: Int = 20, @RequestParam tags: Collection<String>?, @RequestParam query: String?): ResponseEntity<Map<String, Any>> {
        val pageRequest = PageRequest.of(page - 1, size)
        val data = if (!tags.isNullOrEmpty())
            movieDetailRepository.findAllByTagsPaginated(tags, pageRequest.withSort(Sort.by("modified").descending()))
        else if (!query.isNullOrEmpty())
            movieDetailRepository.findAllBy(
                TextCriteria.forDefaultLanguage().matchingAny(query),
//                pageRequest.withSort(Sort.by("score").descending())
                pageRequest.withSort(Sort.by("modified").descending())
            )
        else
            movieDetailRepository.findAllBy(pageRequest.withSort(Sort.by("modified").descending()))
        val response = mutableMapOf(
            "pageable" to mapOf(
                "page" to page,
                "totalPages" to data.totalPages,
                "totalElements" to data.totalElements,
                "hasPrevious" to data.hasPrevious(),
                "hasNext" to data.hasNext()
            ),
            "items" to data.content
        )
        if (!tags.isNullOrEmpty())
            response["tags"] = tagRepository.findAllByIdIn(tags)
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