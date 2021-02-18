package com.projeto.pluscar.web.rest;

import com.projeto.pluscar.model.User;
import com.projeto.pluscar.repository.UserRepository;
import com.projeto.pluscar.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/user/")
public class UserResource {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> listaUser(){
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public User findUserForId(@PathVariable UUID id){
        return userRepository.findUserById(id);
    }

    @PostMapping
    public User newUser(@RequestBody User user){
        return userService.saveUser(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable UUID id){
        userService.deleteUser(id);
    }

}