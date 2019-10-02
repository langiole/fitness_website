package com.collabera.FeMan.service;

import com.collabera.FeMan.repository.UserRepository;
import com.collabera.FeMan.mapper.UserMapper;
import com.collabera.FeMan.model.User;
import com.collabera.FeMan.dto.UserDTO;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class UserService {
    private UserRepository userRepository;
    private UserMapper userMapper;

    public UserService(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    public List<UserDTO> getUsers() {
        return userRepository.findAll().stream().map(u -> userMapper.toDto(u)).collect(Collectors.toList());
    }

    public UserDTO findUserByEmail(String email) {
        for (User u : userRepository.findAll()) {
            if (u.getEmail().equals(email)) {
                return userMapper.toDto(u);
            }
        }
        return null;
    }

    public UserDTO findUser(Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return userMapper.toDto(user.get());
        }
        return null;
    }

    public UserDTO createUser(UserDTO user) {
        User entity = userMapper.toEntity(user);
        User saved = userRepository.save(entity);
        return userMapper.toDto(saved);
    }

    public UserDTO updateUser(UserDTO user) {
        Long userId = user.getUser_id();
        Optional<User> queriedUser = userRepository.findById(userId);
        if (queriedUser.isPresent()) {
            User u = queriedUser.get();

            u.setFirst_name(user.getFirst_name());
            u.setLast_name(user.getLast_name());
            u.setEmail(user.getEmail());
            u.setPassword(user.getPassword());

            User saved = userRepository.save(u);
            return userMapper.toDto(saved);
        }
        else {
            throw new IllegalArgumentException();
        }
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
