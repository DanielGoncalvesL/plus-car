package com.projeto.pluscar.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "vehicles")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "vehicle_id")
    private UUID id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "fuel", nullable = false)
    private String fuel;

    @Column(name = "brand", nullable = false)
    private String brand;

    @Column(name = "model_year", nullable = false)
    private String modelYear;

    @Column(name = "price_fipe", nullable = false)
    private String priceFipe;

    @Column(name = "fipe_code", nullable = false)
    private String fipeCode;

    @OneToMany(mappedBy = "vehicle")
    private List<Expense> expenses;

}
