package com.projeto.pluscar.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "vehicles")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vehicle_id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "fuel")
    private String fuel;

    @Column(name = "brand")
    private String brand;

    @Column(name = "model_year")
    private String modelYear;

    @Column(name = "price_fipe")
    private String priceFipe;

    @Column(name = "fipe_code")
    private String fipeCode;

    @OneToMany(mappedBy = "vehicle")
    private List<Expense> expenses;

}
