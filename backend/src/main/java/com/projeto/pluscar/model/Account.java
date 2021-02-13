package com.projeto.pluscar.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_id")
    private int id;

    @Column(name = "description")
    @NotEmpty(message = "*Please provide a description")
    private String description;

    @Column(name = "price")
    @NotEmpty(message = "*Please provide a price")
    private String price;

    @Column(name = "due_date")
    @NotEmpty(message = "*Please provide a due date")
    private Date due_date;
}
