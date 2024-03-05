package com.app.service;

import java.util.List;

import com.app.exception.EmployeeException;
import com.app.model.Employee;
import com.app.request.CreateEmployeeRequest;

public interface EmployeeService {

	public Employee createEmployee(CreateEmployeeRequest req) throws EmployeeException;

	public String deleteEmployee(Long EmployeeId) throws EmployeeException;

	public List<Employee> getAllEmployees();

	public Employee findEmployeeById(Long id) throws EmployeeException;

	public Employee updateEmployee(Long employeeId, Employee req) throws EmployeeException;

	public void updateEmployeeAvailability(Long employeeId, boolean isAvailable);

}
