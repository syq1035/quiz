package com.twuc.shopping.repository;

import com.twuc.shopping.entity.Goods;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface GoodsRepository extends CrudRepository<Goods, Integer> {
    List<Goods> findAll();
}
