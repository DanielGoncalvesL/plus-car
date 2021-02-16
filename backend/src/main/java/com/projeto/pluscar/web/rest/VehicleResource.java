package com.projeto.pluscar.web.rest;

import com.projeto.pluscar.model.Vehicle;
import com.projeto.pluscar.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/vehicle/")
public class VehicleResource {

    @Autowired
    private VehicleRepository vehicleRepository;

    @GetMapping
    public List<Vehicle> vehicleList(){
        return vehicleRepository.findAll();
    }

    @PostMapping
    public Vehicle newVehicle(@RequestBody Vehicle vehicle){
        return vehicleRepository.save(vehicle);
    }

    @GetMapping("{id}")
    public Vehicle findVehicle(@PathVariable UUID id){
        return null;
    }

}
