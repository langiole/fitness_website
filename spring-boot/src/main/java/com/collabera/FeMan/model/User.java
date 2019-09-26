package com.collabera.FeMan.model;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
 
@Entity
@Table(name = "users")
public class User implements Serializable {
    private static final long serialVersionUID = 1L;
 
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private Long user_id;
    private String first_name;
    private String last_name;
    private String email;
    private String password;
    private LocalDate date_registered;
	public Long getUser_id() {
		return user_id;
	}
	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public LocalDate getDate_registered() {
		return date_registered;
	}
	public void setDate_registered(LocalDate date_registered) {
		this.date_registered = date_registered;
	}
    
    

    
}

