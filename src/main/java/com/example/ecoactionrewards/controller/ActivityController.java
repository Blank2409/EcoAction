package com.example.ecoactionrewards.controller;

import com.example.ecoactionrewards.dto.ActivityDTO;
import com.example.ecoactionrewards.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/activities")
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @GetMapping
    public List<ActivityDTO> getAllActivities() {
        return activityService.getAllActivities();
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadActivity(@RequestParam("file") MultipartFile file,
                                                 @RequestParam("activity") String activity) {
        activityService.uploadActivity(file, activity);
        return ResponseEntity.ok("Activity uploaded successfully");
    }
}