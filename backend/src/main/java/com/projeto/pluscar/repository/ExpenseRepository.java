package com.projeto.pluscar.repository;

import com.projeto.pluscar.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ExpenseRepository extends JpaRepository <Expense, Long> {

    Expense findExpenseById(UUID id);
}
