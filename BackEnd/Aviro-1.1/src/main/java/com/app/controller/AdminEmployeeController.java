package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.exception.EmployeeException;
import com.app.model.Employee;
import com.app.request.CreateEmployeeRequest;
import com.app.response.ApiResponse;
import com.app.service.EmployeeService;

@RestController
@RequestMapping("/api/admin/employees")
public class AdminEmployeeController {

	@Autowired
	private EmployeeService employeeService;

	@PostMapping("/")
	public ResponseEntity<Employee> createEmployeeHandler(@RequestBody CreateEmployeeRequest req)
			throws EmployeeException {

		Employee createdEmployee = employeeService.createEmployee(req);

		return new ResponseEntity<>(createdEmployee, HttpStatus.ACCEPTED);
	}

	@DeleteMapping("/{employeeId}/delete")
	public ResponseEntity<ApiResponse> deleteEmployeeHandler(@PathVariable Long employeeId) throws EmployeeException {

		String msg = employeeService.deleteEmployee(employeeId);
		ApiResponse res = new ApiResponse(msg, true);

		return new ResponseEntity<ApiResponse>(res, HttpStatus.ACCEPTED);

	}

	@GetMapping("/all")
	public ResponseEntity<List<Employee>> findAllEmployee() {

		List<Employee> employees = employeeService.getAllEmployees();

		return new ResponseEntity<List<Employee>>(employees, HttpStatus.OK);
	}

	@PutMapping("/{employeeId}/update")
	public ResponseEntity<Employee> updateEmployeeHandler(@RequestBody Employee req, @PathVariable Long employeeId)
			throws EmployeeException {

		Employee updatedEmployee = employeeService.updateEmployee(employeeId, req);

		return new ResponseEntity<Employee>(updatedEmployee, HttpStatus.OK);
	}

	@PostMapping("/creates")
	public ResponseEntity<ApiResponse> createMultipleEmployee(@RequestBody CreateEmployeeRequest[] reqs)
			throws EmployeeException {

		for (CreateEmployeeRequest employee : reqs) {
			employeeService.createEmployee(employee);
		}

		ApiResponse res = new ApiResponse("Employees created successfully", true);
		return new ResponseEntity<ApiResponse>(res, HttpStatus.ACCEPTED);
	}
	
	@PutMapping("/{employeeId}/availability")
    public ResponseEntity<String> updateEmployeeAvailability(@PathVariable Long employeeId, @RequestParam boolean isAvailable) {
        employeeService.updateEmployeeAvailability(employeeId, isAvailable);
        return ResponseEntity.ok("Employee availability updated successfully.");
    }

}
