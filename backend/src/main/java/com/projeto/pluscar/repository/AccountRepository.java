package com.projeto.pluscar.repository;

import com.projeto.pluscar.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {

    Account findAccountById(int id_account);

}
