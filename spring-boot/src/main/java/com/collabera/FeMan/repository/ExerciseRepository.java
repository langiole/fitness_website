package com.collabera.FeMan.repository;

import com.collabera.FeMan.model.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
}
