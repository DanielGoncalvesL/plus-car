package com.projeto.pluscar.webrest;

import com.projeto.pluscar.model.User;
import com.projeto.pluscar.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/public/")
public class UserResource {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/teste")
    public String teste(){
        return "Olá Mundo";
    }

    @GetMapping("/usuarios")
    public List<User> listaUser(){
        return userRepository.findAll();
    }

}