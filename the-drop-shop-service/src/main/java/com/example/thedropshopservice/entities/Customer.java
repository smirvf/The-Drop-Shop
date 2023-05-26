package com.example.thedropshopservice.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Customer {
    private String email;
    private String phone;
    private String fname;
    private String sname;
    private String address1;
    private String address2;
    private String postcode;
    private String city;
}
