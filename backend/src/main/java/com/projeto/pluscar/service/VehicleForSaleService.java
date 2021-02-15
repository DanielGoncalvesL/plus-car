package com.projeto.pluscar.service;

import com.projeto.pluscar.repository.VehicleForSaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VehicleForSaleService {
    private final VehicleForSaleRepository vehicleForSaleRepository;

    @Autowired
    public VehicleForSaleService(VehicleForSaleRepository vehicleForSaleRepository){
        this.vehicleForSaleRepository = vehicleForSaleRepository;
    }
}
