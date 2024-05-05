package io.github.tinlite.eimuserver.config

import com.fasterxml.jackson.databind.SerializationFeature
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer
import org.bson.types.ObjectId
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter
import java.text.SimpleDateFormat

@Configuration
class EimuConfig {

    @Bean
    fun mappingJackson2HttpMessageConverter(): MappingJackson2HttpMessageConverter {
        val builder = Jackson2ObjectMapperBuilder()
        builder
            .serializerByType(ObjectId::class.java, ToStringSerializer())
            .featuresToDisable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS)
            .dateFormat(SimpleDateFormat("dd-MM-yyyy"))
        return MappingJackson2HttpMessageConverter(builder.build())
    }
}