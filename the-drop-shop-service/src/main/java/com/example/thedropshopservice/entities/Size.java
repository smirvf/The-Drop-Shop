package com.example.thedropshopservice.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Size {
    @Id
    private String sizeId;
    private float size;
    private int stock;

    public void decreaseStock() {
        stock --;
    }
}
