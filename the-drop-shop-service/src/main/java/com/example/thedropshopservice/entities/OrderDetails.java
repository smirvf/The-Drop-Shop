package com.example.thedropshopservice.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class OrderDetails {
    private List<ProductOrder> products;
    private Customer customer;
    private String cardNumber;
    private String expiry;
    private String cvv;
}
