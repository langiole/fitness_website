package com.collabera.FeMan.dto;

public class ExerciseDTO 
{
	private Long Exercise_id;
	private String name;
	private String description;
	private String primary;
	private String Secondary;
	private String video_link;
	
	public Long getExercise_id() 
	{
		return Exercise_id;
	}
	
	public void setExercise_id(Long exercise_id) 
	{
		Exercise_id = exercise_id;
	}
	
	public String getName() 
	{
		return name;
	}
	
	public void setName(String name) 
	{
		this.name = name;
	}
	
	public String getDescription() 
	{
		return description;
	}
	
	public void setDescription(String description) 
	{
		this.description = description;
	}
	
	public String getPrimary() 
	{
		return primary;
	}
	
	public void setPrimary(String primary) 
	{
		this.primary = primary;
	}
	
	public String getSecondary() 
	{
		return Secondary;
	}
	
	public void setSecondary(String secondary) 
	{
		Secondary = secondary;
	}
	
	public String getVideo_link() 
	{
		return video_link;
	}
	
	public void setVideo_link(String video_link) 
	{
		this.video_link = video_link;
	}
}
