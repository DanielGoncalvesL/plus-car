package com.projeto.pluscar.web.rest;

import com.projeto.pluscar.model.Expense;
import com.projeto.pluscar.model.Vehicle;
import com.projeto.pluscar.repository.ExpenseRepository;
import com.projeto.pluscar.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;


@RestController
@RequestMapping("/expense/")
public class ExpenseResource {

    @Autowired
    private ExpenseRepository expenseRepository;

    @Autowired
    private ExpenseService expenseService;

    @GetMapping
    public List<Expense> expenseList(){
        return expenseRepository.findAll();
    }

    @PostMapping
    public Expense newExpense(@RequestBody Expense expense) {
        return expenseService.newExpense(expense);
    }
}
