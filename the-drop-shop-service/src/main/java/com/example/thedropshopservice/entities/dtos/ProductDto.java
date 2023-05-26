package com.example.thedropshopservice.entities.dtos;

import com.example.thedropshopservice.entities.Image;
import com.example.thedropshopservice.entities.Product;
import com.example.thedropshopservice.entities.Size;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
public class ProductDto {
    private String productId;
    private String title;
    private String description;
    private Double price;
    private String brand;
    private List<Image> images;
    private List<Size> sizes;

    public ProductDto(Product product, List<Image> images) {
        this.productId = product.getProductId();
        this.title = product.getTitle();
        this.description = product.getDescription();
        this.price = product.getPrice();
        this.brand = product.getBrand();
        this.images = images;
        this.sizes = product.getSizes();
    }
}
