package com.example.ecoactionrewards.controller;

import com.example.ecoactionrewards.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController<UserStatsDTO> {

    @Autowired
    private UserService userService;

    @GetMapping("/stats")
    public UserStatsDTO getUserStats() {
        return (UserStatsDTO) userService.getUserStats();
    }
}