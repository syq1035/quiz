package com.twuc.shopping.api;

import com.twuc.shopping.dto.GoodsDto;
import com.twuc.shopping.entity.Goods;
import com.twuc.shopping.repository.GoodsRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GoodsController {
    private final GoodsRepository goodsRepository;

    public GoodsController(GoodsRepository goodsRepository) {
        this.goodsRepository = goodsRepository;
    }

    @PostMapping("/goods")
    public ResponseEntity register(@RequestBody GoodsDto goodsDto) {
        Goods goods = Goods.builder().name(goodsDto.getName()).price(goodsDto.getPrice()).unit(goodsDto.getUnit()).photoUrl(goodsDto.getPhotoUrl()).build();
        goodsRepository.save(goods);
        return ResponseEntity.created(null).build();
    }
}
