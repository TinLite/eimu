package io.github.tinlite.eimuserver

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class EimuServerApplication

fun main(args: Array<String>) {
    runApplication<EimuServerApplication>(*args)
}
