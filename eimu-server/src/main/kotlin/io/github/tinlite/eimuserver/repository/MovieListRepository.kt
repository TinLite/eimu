package io.github.tinlite.eimuserver.repository

import io.github.tinlite.eimuserver.model.MovieListEntry
import org.springframework.data.repository.PagingAndSortingRepository

interface MovieListRepository : PagingAndSortingRepository<MovieListEntry, String> {
}