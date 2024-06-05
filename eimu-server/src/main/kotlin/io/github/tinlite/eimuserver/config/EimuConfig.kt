package io.github.tinlite.eimuserver.config

import com.fasterxml.jackson.databind.ser.std.ToStringSerializer
import org.bson.types.ObjectId
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.mongodb.config.EnableMongoAuditing
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter

@Configuration
@EnableMongoAuditing
class EimuConfig {

    @Bean
    fun mappingJackson2HttpMessageConverter(): MappingJackson2HttpMessageConverter {
        val builder = Jackson2ObjectMapperBuilder()
        builder
            .serializerByType(ObjectId::class.java, ToStringSerializer())
//            .featuresToDisable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS)
//            .dateFormat(SimpleDateFormat("dd-MM-yyyy"))
        return MappingJackson2HttpMessageConverter(builder.build())
    }
}