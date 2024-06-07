package io.github.tinlite.eimuserver.repository

import io.github.tinlite.eimuserver.model.Rates
import org.springframework.data.mongodb.repository.MongoRepository

interface RatesRepository : MongoRepository<Rates, String> {
    fun findByMovieIdAndUserId(movieId: String, userId: String): Rates?
    fun findAllByMovieId(movieId: String): Collection<Rates>
}