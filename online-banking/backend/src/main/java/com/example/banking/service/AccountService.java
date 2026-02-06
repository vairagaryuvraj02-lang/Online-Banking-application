package com.example.banking.service;

import com.example.banking.model.Account;
import com.example.banking.model.Transaction;
import com.example.banking.repository.AccountRepository;
import com.example.banking.repository.TransactionRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AccountService {

    private final AccountRepository accountRepository;
    private final TransactionRepository transactionRepository;

    public AccountService(AccountRepository accountRepository,
                          TransactionRepository transactionRepository) {
        this.accountRepository = accountRepository;
        this.transactionRepository = transactionRepository;
    }

    public Account createAccount(String name, Double initialBalance) {
        Account account = new Account(null, name, initialBalance);
        return accountRepository.save(account);
    }

    public Account getAccount(Long id) {
        return accountRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Account not found"));
    }

    public Account deposit(Long id, Double amount) {
        if (amount <= 0) {
            throw new RuntimeException("Amount must be positive");
        }

        Account account = getAccount(id);
        account.setBalance(account.getBalance() + amount);
        accountRepository.save(account);

        saveTransaction(id, "DEPOSIT", amount);
        return account;
    }

    public Account withdraw(Long id, Double amount) {
        Account account = getAccount(id);

        if (amount <= 0) {
            throw new RuntimeException("Amount must be positive");
        }
        if (account.getBalance() < amount) {
            throw new RuntimeException("Insufficient balance");
        }

        account.setBalance(account.getBalance() - amount);
        accountRepository.save(account);

        saveTransaction(id, "WITHDRAW", amount);
        return account;
    }

    public void transfer(Long fromId, Long toId, Double amount) {
        withdraw(fromId, amount);
        deposit(toId, amount);
    }

    public List<Transaction> getTransactions(Long accountId) {
        return transactionRepository.findByAccountId(accountId);
    }

    private void saveTransaction(Long accountId, String type, Double amount) {
        Transaction tx = new Transaction(
                null,
                accountId,
                type,
                amount,
                LocalDateTime.now()
        );
        transactionRepository.save(tx);
    }
}
