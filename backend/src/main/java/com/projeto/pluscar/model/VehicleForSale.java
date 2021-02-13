package com.projeto.pluscar.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "vehicles_for_sale")
public class VehicleForSale{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vehicleForSale_id")
    private int id;

    @Column(name = "sale_value")
    @NotEmpty(message = "*Please provide a sale value")
    private String saleValue;

    @OneToOne
    private Vehicle vehicle;
}
