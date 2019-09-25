package com.collabera.FeMan.mapper;

import org.springframework.stereotype.Component;

import com.collabera.FeMan.dto.ExerciseDTO;
import com.collabera.FeMan.model.Exercise;

@Component
public class ExerciseMapper 
{
	
	public Exercise toEntity(ExerciseDTO dto)
	{
		Exercise exercise = new Exercise();
		exercise.setExercise_id(dto.getExercise_id());
		exercise.setName(dto.getName());
		exercise.setDescription(dto.getDescription());
		exercise.setPrimary(dto.getPrimary());
		exercise.setSecondary(dto.getSecondary());
		exercise.setVideo_link(dto.getVideo_link());
		return exercise;
	}
	
	public ExerciseDTO toDto(Exercise entity)
	{
		ExerciseDTO exercise = new ExerciseDTO();
		exercise.setExercise_id(entity.getExercise_id());
		exercise.setName(entity.getName());
		exercise.setDescription(entity.getDescription());
		exercise.setPrimary(entity.getPrimary());
		exercise.setSecondary(entity.getSecondary());
		exercise.setVideo_link(entity.getVideo_link());
		return exercise;
	}
}



