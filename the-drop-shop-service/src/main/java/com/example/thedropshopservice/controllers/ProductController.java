package com.example.thedropshopservice.controllers;

import com.example.thedropshopservice.entities.Product;
import com.example.thedropshopservice.entities.dtos.ProductDto;
import com.example.thedropshopservice.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("api/v1/")
public class ProductController {

    private final ProductService productService;

    @GetMapping("products/{productId}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable String productId) {
        var product = productService.getProductById(productId);
        if (product.isPresent()) {
            return ResponseEntity.ok(product.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("products/latest")
    public ResponseEntity<List<ProductDto>> getLatestProducts(@RequestParam(name = "num") int numOfProducts) {
        return ResponseEntity.ok(productService.getLatestProducts(numOfProducts));
    }

    @GetMapping("products")
    public ResponseEntity<List<ProductDto>> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }
}
