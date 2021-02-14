package com.projeto.pluscar.web.rest;

import com.projeto.pluscar.model.User;
import com.projeto.pluscar.repository.UserRepository;
import com.projeto.pluscar.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/public/")
public class UserResource {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @GetMapping("/teste")
    public String teste(){
        return "Olá Mundo";
    }

    @GetMapping("/usuarios")
    public List<User> listaUser(){
        return userRepository.findAll();
    }

    @GetMapping("/usuarios/{id}")
    public User findUserForId(@PathVariable int id){
        return userRepository.findById(id);
    }

    @PostMapping("/usuarios")
    public User newUser(@RequestBody User user){
        return userService.saveUser(user);
    }

}