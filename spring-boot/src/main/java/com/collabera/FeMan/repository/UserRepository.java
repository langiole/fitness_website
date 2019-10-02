package com.collabera.FeMan.repository;

import com.collabera.FeMan.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
