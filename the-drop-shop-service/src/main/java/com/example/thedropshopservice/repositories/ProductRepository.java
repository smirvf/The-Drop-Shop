package com.example.thedropshopservice.repositories;

import com.example.thedropshopservice.entities.Product;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends MongoRepository<Product, ObjectId> {

    //Query to return latest products that have been added
    //Total products to be returned passed as parameter
    @Aggregation(pipeline = {
            "{ '$sort' : { 'productId' : -1 } }",
            "{ '$limit' : ?0 }"
    })
    List<Product> findLatestProducts(int num);
}
