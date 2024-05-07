package io.github.tinlite.eimuserver.repository

import io.github.tinlite.eimuserver.model.DataComments
import org.springframework.data.mongodb.repository.MongoRepository

interface CommentsRepository : MongoRepository<DataComments,String> {
    fun findByUserId(userId: String): List<DataComments>
    fun findByMovieId(movieId: String): List<DataComments>

    fun findByContentContainsIgnoreCase(content: String): List<DataComments>

}