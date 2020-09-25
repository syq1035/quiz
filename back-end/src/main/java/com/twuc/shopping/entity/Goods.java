package com.twuc.shopping.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "goods")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Goods {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private String unit;
    private Integer price;
    private String photoUrl;
}
