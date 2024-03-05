package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.model.User;
import com.app.user.domaim.UserRole;
import java.util.List;


public interface UserRepository extends JpaRepository<User, Long> {

	public User findByEmail(String email);

	public List<User> findByRole(UserRole role);
}
