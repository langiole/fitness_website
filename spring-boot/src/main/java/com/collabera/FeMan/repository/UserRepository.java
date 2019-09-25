package com.collabera.FeMan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.collabera.FeMan.model.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
