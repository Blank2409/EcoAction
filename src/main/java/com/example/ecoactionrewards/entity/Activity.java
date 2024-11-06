package com.example.ecoactionrewards.entity;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity

@Table(name = "activities")
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String type;

    private String description;

    @Column(nullable = false)
    private int pointsEarned;

    @Column(nullable = false)
    private LocalDateTime timestamp;

    private String photoUrl;

    // Constructors, getters, and setters

    public Activity() {}

    public Activity(String type, String description, int pointsEarned, LocalDateTime timestamp, String photoUrl) {
        this.type = type;
        this.description = description;
        this.pointsEarned = pointsEarned;
        this.timestamp = timestamp;
        this.photoUrl = photoUrl;
    }

    public String getId() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getId'");
    }

    public int getType() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getType'");
    }

    public Object getDescription() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getDescription'");
    }

    public Object getPointsEarned() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getPointsEarned'");
    }

    public Object getTimestamp() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getTimestamp'");
    }

    public Object getPhotoUrl() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getPhotoUrl'");
    }

    public void setId(Long id2) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setId'");
    }

    public void setType(String type2) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setType'");
    }

    public void setDescription(String description2) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setDescription'");
    }

    public void setPointsEarned(int pointsEarned2) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setPointsEarned'");
    }

    public void setTimestamp(LocalDateTime timestamp2) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setTimestamp'");
    }

    public void setPhotoUrl(String photoUrl2) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setPhotoUrl'");
    }

    // Getters and setters
    // ... (implement getters and setters for all fields)
}