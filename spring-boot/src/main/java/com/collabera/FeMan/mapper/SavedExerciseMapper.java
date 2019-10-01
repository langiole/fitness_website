package com.collabera.FeMan.mapper;

import org.springframework.stereotype.Component;


import com.collabera.FeMan.dto.SavedExerciseDTO;
import com.collabera.FeMan.model.SavedExercise;

@Component
public class SavedExerciseMapper 
{
	public SavedExercise toEntity(SavedExerciseDTO dto)
	{
		SavedExercise saved = new SavedExercise();
		saved.setId(dto.getId());
		saved.setUser_id(dto.getUser_id());
		saved.setExercise_id(dto.getExercise_id());
		return saved;
	}
	
	public SavedExerciseDTO toDto(SavedExercise entity)
	{
		SavedExerciseDTO saved = new SavedExerciseDTO();
		saved.setId(entity.getId());
		saved.setUser_id(entity.getUser_id());
		saved.setExercise_id(entity.getExercise_id());
		return saved;
	}
}


