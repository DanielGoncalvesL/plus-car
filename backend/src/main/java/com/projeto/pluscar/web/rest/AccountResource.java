package com.projeto.pluscar.web.rest;

import com.projeto.pluscar.model.Account;
import com.projeto.pluscar.repository.AccountRepository;
import com.projeto.pluscar.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/account/")
public class AccountResource {

    @Autowired
    private AccountService accountService;

    @Autowired
    private AccountRepository accountRepository;

    @GetMapping
    public List<Account> accountList(){ return accountRepository.findAll();}

    @GetMapping("/{id}")
    public Account findAccount(@PathVariable UUID id){ return accountRepository.findAccountById(id);}

    @PostMapping
    public Account newAccount(@RequestBody Account account){ return accountRepository.save(account);}

    @DeleteMapping("/{id}")
    public void deleteAccount(@PathVariable UUID id){
        Account account = accountRepository.findAccountById(id);

        accountRepository.delete(account);
    }
}
