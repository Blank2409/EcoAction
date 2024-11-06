package com.example.ecoactionrewards.mapper;

import com.example.ecoactionrewards.dto.ActivityDTO;
import com.example.ecoactionrewards.entity.Activity;
import org.springframework.stereotype.Component;

@Component
public class ActivityMapper {

    public ActivityDTO toDTO(Activity activity) {
        return new ActivityDTO(
            activity.getId(),
            activity.getType(),
            activity.getDescription(),
            activity.getPointsEarned(),
            activity.getTimestamp(),
            activity.getPhotoUrl()
        );
    }

    public Activity toEntity(ActivityDTO dto) {
        Activity activity = new Activity();
        activity.setId(dto.getId());
        activity.setType(dto.getType());
        activity.setDescription(dto.getDescription());
        activity.setPointsEarned(dto.getPointsEarned());
        activity.setTimestamp(dto.getTimestamp());
        activity.setPhotoUrl(dto.getPhotoUrl());
        return activity;
    }
}