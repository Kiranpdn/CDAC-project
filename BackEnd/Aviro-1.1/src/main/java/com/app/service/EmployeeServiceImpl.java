package com.app.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.exception.EmployeeException;
import com.app.exception.ProductException;
import com.app.model.Employee;
import com.app.model.Product;
import com.app.repository.EmployeeRepository;
import com.app.request.CreateEmployeeRequest;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public Employee createEmployee(CreateEmployeeRequest req) throws EmployeeException {
		Employee employee = new Employee();

		employee.setFirstName(req.getFirstName());
		employee.setLastName(req.getLastName());
		employee.setPassword(req.getPassword());
		employee.setEmail(req.getEmail());
		employee.setAvailibility(req.getAvailibility());
		employee.setAddresses(req.getAddresses());
		employee.setCreatedAt(LocalDateTime.now());

		Employee saveEmployee = employeeRepository.save(employee);
		return saveEmployee;
	}

	@Override
	public String deleteEmployee(Long employeeId) throws EmployeeException {
		Employee employee = findEmployeeById(employeeId);
		employeeRepository.delete(employee);

		return "Employee deleted Successfully";
	}

	@Override
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}

	@Override
	public Employee findEmployeeById(Long id) throws EmployeeException {
		Optional<Employee> opt = employeeRepository.findById(id);

		if (opt.isPresent()) {
			return opt.get();
		}
		throw new EmployeeException("Employee not found with id " + id);
	}

	@Override
	public Employee updateEmployee(Long employeeId, Employee req) throws EmployeeException {
		Employee employee = findEmployeeById(employeeId);
		
		employee.setFirstName(req.getFirstName());
		employee.setLastName(req.getLastName());
		employee.setPassword(req.getPassword());
		employee.setEmail(req.getEmail());
		employee.setAvailibility(req.getAvailibility());
		employee.setAddresses(req.getAddresses());
		employee.setCreatedAt(LocalDateTime.now());

		Employee saveEmployee = employeeRepository.save(employee);
		return saveEmployee;
	}

	@Override
	public void updateEmployeeAvailability(Long employeeId, boolean isAvailable) {
		Employee employee = employeeRepository.findById(employeeId).orElse(null);

		if (employee != null) {
			employee.setAvailibility(isAvailable);
			employeeRepository.save(employee);
		}
	}

}
