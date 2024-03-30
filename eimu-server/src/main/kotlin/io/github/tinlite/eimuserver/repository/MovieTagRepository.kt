package io.github.tinlite.eimuserver.repository

import io.github.tinlite.eimuserver.model.MovieTag
import org.springframework.data.mongodb.repository.MongoRepository

interface MovieTagRepository : MongoRepository<MovieTag, String> {
    fun findAllByIdIn(id: Collection<String>) : List<MovieTag>
}