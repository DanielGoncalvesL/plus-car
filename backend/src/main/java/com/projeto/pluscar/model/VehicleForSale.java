package com.projeto.pluscar.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "vehicles_for_sale")
public class VehicleForSale{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "vehicleForSale_id")
    private UUID id;

    @Column(name = "sale_value", nullable = false)
    @NotEmpty(message = "*Please provide a sale value")
    private String saleValue;

    @OneToOne
    private Vehicle vehicle;
}
