package com.example.thedropshopservice.repositories;

import com.example.thedropshopservice.entities.Image;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;



public interface ImageRepository extends MongoRepository<Image, ObjectId> {
}
