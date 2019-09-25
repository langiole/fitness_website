package com.collabera.FeMan.service;

import com.collabera.FeMan.dto.ExerciseDTO;
import com.collabera.FeMan.model.Exercise;
import com.collabera.FeMan.mapper.ExerciseMapper;
import com.collabera.FeMan.repository.ExerciseRepository;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class ExerciseService {
    private ExerciseRepository exerciseRepository;
    private ExerciseMapper exerciseMapper;

    public ExerciseService(ExerciseRepository exerciseRepository, ExerciseMapper exerciseMapper) {
        this.exerciseRepository = exerciseRepository;
        this.exerciseMapper = exerciseMapper;
    }

    public ExerciseDTO findExercise(Long id) {
        Optional<Exercise> exercise = exerciseRepository.findById(id);
        if (exercise.isPresent()) {
            return exerciseMapper.toDto(exercise.get());
        }
        return null;
    }

    public List<ExerciseDTO> getExercisesByBodyPart(String bodyPart) {
        return exerciseRepository.findAll().stream().filter(e -> e.getPrimary().equalsIgnoreCase(bodyPart)).map(e -> exerciseMapper.toDto(e)).collect(Collectors.toList());
    }

    public ExerciseDTO createExercise(ExerciseDTO exercise) {
        Exercise entity = exerciseMapper.toEntity(exercise);
        Exercise saved = exerciseRepository.save(entity);
        return exerciseMapper.toDto(saved);
    }

    public ExerciseDTO updateExercise(ExerciseDTO exercise) {
        Long exerciseId = exercise.getExercise_id();
        Optional<Exercise> queriedExercise = exerciseRepository.findById(exerciseId);
        if (queriedExercise.isPresent()) {
            Exercise e = queriedExercise.get();

            e.setDescription(exercise.getDescription());
            e.setPrimary(exercise.getPrimary());
            e.setSecondary(exercise.getSecondary());
            e.setName(exercise.getName());
            e.setVideo_link(exercise.getVideo_link());

            Exercise saved = exerciseRepository.save(e);
            return exerciseMapper.toDto(saved);
        }
        else {
            throw new IllegalArgumentException();
        }
    }

    public void deleteExercise(Long id) {
        exerciseRepository.deleteById(id);
    }
}
