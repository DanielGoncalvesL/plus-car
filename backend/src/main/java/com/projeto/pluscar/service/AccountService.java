package com.projeto.pluscar.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {
    private final AccountService accountService;

    @Autowired
    public AccountService(AccountService accountService){
        this.accountService = accountService;
    }
}
