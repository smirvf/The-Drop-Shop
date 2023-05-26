package com.example.thedropshopservice.services;

import com.example.thedropshopservice.entities.Order;
import com.example.thedropshopservice.entities.OrderDetails;
import com.example.thedropshopservice.repositories.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final EmailService emailService;
    private final ProductService productService;

    public Order placeOrder(OrderDetails orderDetails) {
        var order = orderRepository.save(Order.builder()
                .products(orderDetails.getProducts())
                .customer(orderDetails.getCustomer())
                .datePlaced(LocalDateTime.now())
                .build());
        orderDetails.getProducts().forEach(product -> productService.reduceStock(product));
        emailService.sendSimpleMessage(order.getCustomer().getEmail(), "Order Placed", "Thank you " + order.getCustomer().getFname() + " for placing your order. Your order number is " + order.getOrderId());
        return order;
    }
}
