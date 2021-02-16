package com.projeto.pluscar.web.rest;

import com.projeto.pluscar.model.Expense;
import com.projeto.pluscar.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/expense/")
public class ExpenseResource {

    @Autowired
    private ExpenseRepository expenseRepository;

    @GetMapping
    public List<Expense> expenseList(){
        return expenseRepository.findAll();
    }

    @PostMapping
    public Expense newExpense(@RequestBody Expense expense){
        return expenseRepository.save(expense);
    }
}
