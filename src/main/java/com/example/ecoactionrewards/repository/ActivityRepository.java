package com.example.ecoactionrewards.repository;

import com.example.ecoactionrewards.entity.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {

    List<Activity> findByType(String type);

    List<Activity> findByTimestampBetween(LocalDateTime start, LocalDateTime end);

    List<Activity> findByPointsEarnedGreaterThan(int points);

    long countByType(String type);

    List<Activity> findTop10ByOrderByPointsEarnedDesc();
}