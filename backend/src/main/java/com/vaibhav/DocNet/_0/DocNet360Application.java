package com.vaibhav.DocNet._0;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;


@SpringBootApplication
@EnableMongoAuditing
@EnableScheduling
@EnableAsync
public class DocNet360Application {

	public static void main(String[] args) {
		SpringApplication.run(DocNet360Application.class, args);
	}

}
