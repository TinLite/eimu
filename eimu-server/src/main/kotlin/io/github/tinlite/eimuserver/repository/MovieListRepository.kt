package io.github.tinlite.eimuserver.repository

import io.github.tinlite.eimuserver.model.MovieListEntry
import org.springframework.data.mongodb.repository.MongoRepository

interface MovieListRepository :
    MongoRepository<MovieListEntry, String>