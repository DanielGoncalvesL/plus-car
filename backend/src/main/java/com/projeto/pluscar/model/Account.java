package com.projeto.pluscar.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Date;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "account_id")
    private UUID id;

    @Column(name = "description", nullable = false)
    @NotEmpty(message = "*Please provide a description")
    private String description;

    @Column(name = "price", nullable = false)
    @NotEmpty(message = "*Please provide a price")
    private String price;

    @Column(name = "due_date", nullable = false)
    @NotEmpty(message = "*Please provide a due date")
    private Date due_date;
}
