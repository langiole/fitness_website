package com.collabera.FeMan.mapper;

import org.springframework.stereotype.Component;

import com.collabera.FeMan.dto.UserDTO;
import com.collabera.modal.User;

@Component
public class UserMapper 
{
	public User toEntity(UserDTO dto);
	{
		User user = new User();
		user.setUser_id(dto.getUser_id);
		user.setFirst_name(dto.getFirst_name);
		user.setLast_name(dto.getLast_name);
		user.setEmail(dto.getEmail);
		user.setPassword(dto.getPassword);
		user.setDate_registered(dto.getDate_registered);	
	}
	
	public UserDTO toDto(User entity)
	{
		UserDTO user = new UserDTO();
		user.setUser_id(entity.getUser_id);
		user.setFirst_name(entity.getFirst_name);
		user.setLast_name(entity.getLast_name);
		user.setEmail(entity.getEmail);
		user.setPassword(entity.getPassword);
		user.setDate_registered(entity.getDate_registered);
	}
	
}
