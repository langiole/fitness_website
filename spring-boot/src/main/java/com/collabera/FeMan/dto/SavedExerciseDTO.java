package com.collabera.FeMan.dto;

public class SavedExerciseDTO 
{
 private Long id;
 private Long user_id;
 private Long exercise_id;

public Long getId()
{
	return id;
}

public void setId(Long id)
{
	this.id = id;
}

public Long getUser_id() 
{
	return user_id;
}

public void setUser_id(Long user_id) 
{
	this.user_id = user_id;
}

public Long getExercise_id() 
{
	return exercise_id;
}

public void setExercise_id(Long exercise_id) 
{
	this.exercise_id = exercise_id;
}

}