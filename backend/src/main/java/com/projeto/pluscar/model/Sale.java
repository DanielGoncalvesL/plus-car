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
@Table(name = "sales")
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "sale_id")
    private UUID id;

    @OneToOne private Vehicle vehicle;

    @OneToOne
    private VehicleForSale vehicleForSale;

    @Column(name = "sale_date", nullable = false)
    @NotEmpty(message = "*Please provide a sale date")
    private Date sale_date;
}
