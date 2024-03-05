package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.model.Employee;
import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

	public List<Employee> findByAvailibility(Boolean availibility);
}
