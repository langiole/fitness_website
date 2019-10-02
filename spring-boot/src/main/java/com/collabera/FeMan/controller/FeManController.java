package com.collabera.FeMan.controller;

import com.collabera.FeMan.dto.ExerciseDTO;
import com.collabera.FeMan.dto.UserDTO;
import com.collabera.FeMan.model.Exercise;
import com.collabera.FeMan.model.Session;
import com.collabera.FeMan.model.User;
import com.collabera.FeMan.service.ExerciseService;
import com.collabera.FeMan.service.SessionService;
import com.collabera.FeMan.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.AlternativeJdkIdGenerator;
import org.springframework.util.IdGenerator;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class FeManController {

    private UserService userService;
    private ExerciseService exerciseService;
    private SessionService sessionService;

    @Autowired
    public FeManController(UserService userService, ExerciseService exerciseService, SessionService sessionService) {
        this.userService = userService;
        this.exerciseService = exerciseService;
        this.sessionService = sessionService;
    }

    @GetMapping("/sessions")
    public List<Session> getSessions() {
        return sessionService.findAll();
    }

    @PostMapping("/login")
    public ResponseEntity<String> generateSession(@RequestBody Map<String, String> loginForm, HttpServletResponse response) {
        UserDTO user = userService.findUserByEmail(loginForm.get("email"));
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid email");
        }
        if (!loginForm.get("password").equals(user.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid password");
        }
        String session_id = sessionService.generateSession(user.getUser_id());
        return ResponseEntity.ok(session_id);
    }

    @GetMapping("/users")
    public List<UserDTO> get() {
        return userService.getUsers();
    }

    @GetMapping("/users/{session_id}")
    public ResponseEntity<UserDTO> get(@PathVariable String session_id) {
        Long id = sessionService.findUserId(session_id);
        UserDTO user = userService.findUser(id);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/exercises/{body_part}")
    public List<ExerciseDTO> getTargetExercises(@PathVariable String body_part) {
        return exerciseService.getExercisesByBodyPart(body_part);
    }

    @PostMapping("/users")
    public ResponseEntity create(@RequestBody @Valid UserDTO user) throws URISyntaxException {
        if (userService.findUserByEmail(user.getEmail()) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email is already registered!");
        }
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

    @DeleteMapping("/users/{session_id}")
    public ResponseEntity<Void> deleteUser(@PathVariable String session_id) {
        Long id = sessionService.findUserId(session_id);
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/exercises/{id}")
    public ResponseEntity<Void> deleteExercise(@PathVariable Long id) {
        exerciseService.deleteExercise(id);
        return ResponseEntity.ok().build();
    }
}
