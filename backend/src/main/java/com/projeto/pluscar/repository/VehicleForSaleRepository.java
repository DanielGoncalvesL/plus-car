package com.projeto.pluscar.repository;

import com.projeto.pluscar.model.VehicleForSale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleForSaleRepository extends JpaRepository <VehicleForSale, Long> {
    
}
