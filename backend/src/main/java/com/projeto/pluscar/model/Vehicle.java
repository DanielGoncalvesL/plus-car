package com.projeto.pluscar.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

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

    @Column(name = "combustivel")
    private String combustivel;

    @Column(name = "marca")
    private String marca;

    @Column(name = "ano_modelo")
    private String anoModelo;

    @Column(name = "preco_fipe")
    private String precoFipe;

    @Column(name = "fipe_codigo")
    private String fipeCodigo;

}
