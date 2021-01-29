package com.projeto.pluscar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = {"com.projeto.pluscar.model"})
@EnableJpaRepositories(basePackages = {"com.projeto.pluscar.repository"})
@ComponentScan(basePackages = {"com"})
public class PluscarApplication {

	private static ApplicationContext applicationContext;

	public static void main(String[] args) {
		SpringApplication.run(PluscarApplication.class, args);
	}

}
