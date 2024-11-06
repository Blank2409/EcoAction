package com.example.ecoactionrewards.service;

import com.example.ecoactionrewards.dto.ActivityDTO;
import com.example.ecoactionrewards.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.ecoactionrewards.dto.ActivityDTO;
import com.example.ecoactionrewards.entity.Activity;
import com.example.ecoactionrewards.mapper.ActivityMapper;
import com.example.ecoactionrewards.repository.ActivityRepository;
import java.util.List;

@Service
public class ActivityService {

    @Autowired
    private ActivityRepository activityRepository;

    public List<ActivityDTO> getAllActivities() {
        // Implement logic to fetch activities from the repository
        // For now, we'll return dummy data
        return List.of(
            new ActivityDTO("Save Water", 50),
            new ActivityDTO("Plant Trees", 100),
            new ActivityDTO("Recycle", 75)
        );
    }

    public void uploadActivity(MultipartFile file, String activity) {
        // Implement logic to save the uploaded activity and file
        // For now, we'll just log the action
        System.out.println("Uploaded activity: " + activity + ", File: " + file.getOriginalFilename());
    }
}