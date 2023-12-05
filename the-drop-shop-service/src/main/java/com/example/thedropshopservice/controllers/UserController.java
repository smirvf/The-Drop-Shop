package com.example.thedropshopservice.controllers;

import com.example.thedropshopservice.entities.User;
import com.example.thedropshopservice.entities.UserSignUpForm;
import com.example.thedropshopservice.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("api/v1/")
public class UserController {

    private final UserService userService;

    @PostMapping("users/signup")
    public ResponseEntity<User> signUp(@RequestBody UserSignUpForm userDetails) {
        var user = userService.signUp(userDetails.getEmail(), userDetails.getUsername(), userDetails.getPassword());
        return ResponseEntity.ok(user);
    }

    @GetMapping("users/login")
    public ResponseEntity<User> login(@RequestParam String email, @RequestParam String password) {
        var user = userService.login(email, password);
        return ResponseEntity.ok(user);
    }

    @GetMapping("users")
    public ResponseEntity<List<User>> fetchUsers() {
        return ResponseEntity.ok(userService.fetchUsers());
    }
}
