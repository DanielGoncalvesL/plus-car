package com.projeto.pluscar.service;

import com.projeto.pluscar.model.Expense;
import com.projeto.pluscar.model.Vehicle;
import com.projeto.pluscar.repository.ExpenseRepository;
import com.projeto.pluscar.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ExpenseService {
    private final ExpenseRepository expenseRepository;

    private final VehicleRepository vehicleRepository;

    @Autowired
    public ExpenseService(ExpenseRepository expenseRepository, VehicleRepository vehicleRepository){
        this.expenseRepository = expenseRepository;
        this.vehicleRepository = vehicleRepository;
    }

    public Expense newExpense(Expense expense){
        Vehicle vehicle = vehicleRepository.findVehicleById(expense.getId_vehicle());
        vehicle.setExpenses(vehicle.getExpenses() + expense.getPrice());
        vehicleRepository.save(vehicle);
        expense.setVehicle(vehicle);
        return expenseRepository.save(expense);
    }
}
