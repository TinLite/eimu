package io.github.tinlite.eimuserver.controller


import io.github.tinlite.eimuserver.model.Rates
import io.github.tinlite.eimuserver.model.RequestRating
import io.github.tinlite.eimuserver.repository.RatesRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("rating")
class MovieRateController {

    @Autowired
    lateinit var rateRepository: RatesRepository

    @PostMapping("/ratemovie")
    fun rateMovie(@RequestBody rate: RequestRating): ResponseEntity<Unit> {
        val alreadyRate = rateRepository.findByMovieIdAndUserId(rate.movieId, rate.userId)
        if (alreadyRate != null) {
            alreadyRate.rating = rate.rating
            rateRepository.save(alreadyRate)
        } else {
            val data = Rates(
                movieId = rate.movieId,
                userId = rate.userId,
                rating = rate.rating
            )
            rateRepository.save(data)
        }
        return ResponseEntity.ok().build()
    }

    @GetMapping("/rateshow/{movieId}")
    fun getAvgRateOneFilm(@PathVariable movieId: String): ResponseEntity<Map<String, Any>> {
        val rate = rateRepository.findAllByMovieId(movieId)
        if (rate.isEmpty()) {
            return ResponseEntity.ok(
                mapOf(
                    "movieId" to movieId,
                    "AvgMovie" to 0,
                    "CountRate" to 0
                )
            )
        }
        val totalRate = rate.sumOf { it.rating }
        val countRate = rate.size
        val avgRate = totalRate.toDouble() / countRate
        return ResponseEntity.ok(
            mapOf(
                "movieId" to movieId,
                "AvgMovie" to avgRate,
                "CountRate" to countRate
            )
        )
    }
}