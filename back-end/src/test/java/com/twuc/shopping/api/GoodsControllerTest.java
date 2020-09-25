package com.twuc.shopping.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.twuc.shopping.dto.GoodsDto;
import com.twuc.shopping.entity.Goods;
import com.twuc.shopping.repository.GoodsRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class GoodsControllerTest {
    @Autowired
    MockMvc mockMvc;
    @Autowired
    GoodsRepository goodsRepository;

    @Test
    void should_add_goods() throws Exception {
        GoodsDto goodsDto = GoodsDto.builder().name("可乐").price(3).unit("瓶").photoUrl("photo.png").build();
        ObjectMapper objectMapper = new ObjectMapper();
        String json = objectMapper.writeValueAsString(goodsDto);
        mockMvc.perform(post("/goods").content(json).contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isCreated());

        List<Goods> goodsList = goodsRepository.findAll();
        assertEquals(1, goodsList.size());
        assertEquals("可乐", goodsList.get(0).getName());
    }
}
