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
@Table(name = "sales")
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sale_id")
    private int id;

    @OneToOne
    private Vehicle vehicle;

    @OneToOne
    private VehicleForSale sale_value;

    @Column(name = "sale_date")
    @NotEmpty(message = "*Please provide a sale date")
    private Date sale_date;
}
