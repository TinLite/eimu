package io.github.tinlite.eimuserver.repository

import io.github.tinlite.eimuserver.model.MovieDetail
import org.springframework.data.mongodb.repository.MongoRepository

interface MovieDetailRepository :
    MongoRepository<MovieDetail, String> {

//    fun getMovieDetailById(id: String): MovieDetail?
}