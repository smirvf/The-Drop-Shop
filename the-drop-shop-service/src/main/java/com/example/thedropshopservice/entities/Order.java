package com.example.thedropshopservice.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Order {
    @Id
    private String orderId;
    private List<ProductOrder> products;
    private Customer customer;
    private LocalDateTime datePlaced;
}
