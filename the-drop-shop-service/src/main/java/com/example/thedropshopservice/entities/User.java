package com.example.thedropshopservice.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class User {
    @Id
    private String userId;
    private String email;
    private String username;
    private String password;
    private LocalDateTime lastLogin;
}
