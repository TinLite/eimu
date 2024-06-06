package io.github.tinlite.eimuserver.repository

import io.github.tinlite.eimuserver.model.MovieDetail
import io.github.tinlite.eimuserver.model.MovieListEntry
import org.bson.Document
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.mongodb.core.query.TextCriteria
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query
import org.springframework.data.mongodb.repository.Update

interface MovieDetailRepository : MongoRepository<MovieDetail, String> {
    // https://docs.spring.io/spring-data/mongodb/reference/mongodb/repositories/modifying-methods.html
    @Update("{'\$set': ?1 }")
    fun findAndUpdateEpisodesById(id: String, episodes: Document)

    fun findAllBy(pageable: Pageable) : Page<MovieListEntry>

    @Query(value="{ 'tags': { \$all : ?0 } }")
    fun findAllByTagsPaginated(tags: Collection<String>, pageable: Pageable) : Page<MovieListEntry>

    fun findAllByFlagsContaining(flags: MutableCollection<String>, pageable: Pageable) : Page<MovieListEntry>

    fun findAllBy(criteria: TextCriteria, pageable: Pageable) : Page<MovieDetail>

    fun findByNameOrCasts(name: String, casts: String)

    fun findAllByIdIn(id: Collection<String>): List<MovieListEntry>

    fun findAllByIdIn(id: Collection<String>, pageable: Pageable): Page<MovieListEntry>
}