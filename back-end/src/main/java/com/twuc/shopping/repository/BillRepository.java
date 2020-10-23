package com.twuc.shopping.repository;

import com.twuc.shopping.entity.Bill;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BillRepository extends CrudRepository<Bill, Integer> {
    List<Bill> findAll();
}