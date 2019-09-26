package com.collabera.FeMan.controller;

import com.collabera.FeMan.dto.ExerciseDTO;
import com.collabera.FeMan.dto.UserDTO;
import com.collabera.FeMan.model.Exercise;
import com.collabera.FeMan.model.User;
import com.collabera.FeMan.service.ExerciseService;
import com.collabera.FeMan.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class FeManController {

    private UserService userService;
    private ExerciseService exerciseService;

    @Autowired
    public FeManController(UserService userService, ExerciseService exerciseService) {
        this.userService = userService;
        this.exerciseService = exerciseService;
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<UserDTO> get(@PathVariable Long id) {
        UserDTO user = userService.findUser(id);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/exercises/{body_part}")
    public List<ExerciseDTO> get(@PathVariable String body_part) {
        return exerciseService.getExercisesByBodyPart(body_part);
    }

    @PostMapping("/users")
    public ResponseEntity<UserDTO> create(@RequestBody @Valid UserDTO user) throws URISyntaxException {
        UserDTO result = userService.createUser(user);
        return ResponseEntity.created(new URI("/users" + result.getUser_id())).body(result);
    }

    @PostMapping("/exercises")
    public ResponseEntity<ExerciseDTO> create(@RequestBody @Valid ExerciseDTO exercise) throws URISyntaxException {
        ExerciseDTO result = exerciseService.createExercise(exercise);
        return ResponseEntity.created(new URI("/exercises" + result.getExercise_id())).body(result);
    }

    @PutMapping("/users")
    public ResponseEntity<UserDTO> update(@RequestBody @Valid UserDTO user) {
        UserDTO result = userService.updateUser(user);
        return ResponseEntity.ok().body(result);
    }

    @PutMapping("/exercises")
    public ResponseEntity<ExerciseDTO> update(@RequestBody @Valid ExerciseDTO exercise) {
        ExerciseDTO result = exerciseService.updateExercise(exercise);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/exercises/{id}")
    public ResponseEntity<Void> deleteExercise(@PathVariable Long id) {
        exerciseService.deleteExercise(id);
        return ResponseEntity.ok().build();
    }
}