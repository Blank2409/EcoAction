package com.example.ecoactionrewards.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserStatsDTO getUserStats() {
        // Implement logic to fetch user stats from the repository
        // For now, we'll return dummy data
        return new UserStatsDTO(1500, 750);
    }
}