package com.example.thedropshopservice.repositories;

import com.example.thedropshopservice.entities.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, ObjectId> {

    public Optional<User> findByEmail(String email);
}
