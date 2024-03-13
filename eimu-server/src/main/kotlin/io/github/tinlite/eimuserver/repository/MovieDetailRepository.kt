package io.github.tinlite.eimuserver.repository

import io.github.tinlite.eimuserver.model.MovieDetail
import org.springframework.data.repository.PagingAndSortingRepository

interface MovieDetailRepository :
    PagingAndSortingRepository<MovieDetail, String> {

    fun getMovieDetailById(id: String): MovieDetail?
}