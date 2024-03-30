package io.github.tinlite.eimuserver.repository

import io.github.tinlite.eimuserver.model.EpisodeServer
import io.github.tinlite.eimuserver.model.MovieDetail
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Update

interface MovieDetailRepository : MongoRepository<MovieDetail, String> {

    // https://docs.spring.io/spring-data/mongodb/reference/mongodb/repositories/modifying-methods.html
    @Update("{'\$set': ?1 }")
    fun findAndUpdateEpisodesById(id: String, episodes: List<EpisodeServer>)
}