package com.projeto.pluscar.web.rest;

import com.projeto.pluscar.model.Role;
import com.projeto.pluscar.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/role/")
public class RoleResource {

    @Autowired
    private RoleRepository roleRepository;

    @PostMapping
    public Role newRole(@RequestBody Role role){
        return roleRepository.save(role);
    }
}
