package com.example.ecoactionrewards.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter

public class ActivityDTO {
    public ActivityDTO(String string, int i) {
        //TODO Auto-generated constructor stub
    }
    public ActivityDTO(String id2, int type2, Object description2, Object pointsEarned2, Object timestamp2,
            Object photoUrl2) {
        //TODO Auto-generated constructor stub
    }
    private Long id;
    private String type;
    private String description;
    private int pointsEarned;
    private LocalDateTime timestamp;
    private String photoUrl;

    // Constructors, getters, and setters
    // ... (keep the constructors, getters, and setters as they were in the previous version)
}