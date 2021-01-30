package com.projeto.pluscar.repository;

import com.projeto.pluscar.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
    Vehicle findById(int id);
    Vehicle findByName(String name);
}
