package com.example.thedropshopservice.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserSignUpForm {
    private String email;
    private String username;
    private String password;
}
