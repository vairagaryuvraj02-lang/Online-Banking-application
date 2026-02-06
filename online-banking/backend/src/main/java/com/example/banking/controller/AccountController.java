package com.example.banking.controller;

import com.example.banking.model.Account;
import com.example.banking.model.Transaction;
import com.example.banking.service.AccountService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @PostMapping
    public Account createAccount(@RequestParam String name,
                                 @RequestParam Double balance) {
        return accountService.createAccount(name, balance);
    }

    @GetMapping("/{id}")
    public Account getAccount(@PathVariable Long id) {
        return accountService.getAccount(id);
    }

    @PostMapping("/{id}/deposit")
    public Account deposit(@PathVariable Long id,
                           @RequestParam Double amount) {
        return accountService.deposit(id, amount);
    }

    @PostMapping("/{id}/withdraw")
    public Account withdraw(@PathVariable Long id,
                            @RequestParam Double amount) {
        return accountService.withdraw(id, amount);
    }

    @PostMapping("/transfer")
    public String transfer(@RequestParam Long fromId,
                           @RequestParam Long toId,
                           @RequestParam Double amount) {
        accountService.transfer(fromId, toId, amount);
        return "Transfer successful";
    }

    @GetMapping("/{id}/transactions")
    public List<Transaction> transactions(@PathVariable Long id) {
        return accountService.getTransactions(id);
    }
}
