package com.app.request;

import java.util.ArrayList;
import java.util.List;

import com.app.model.Address;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class CreateEmployeeRequest {

	@NotBlank(message = "First Name must be supplied")
	private String firstName;

	@NotBlank(message = "Last Name must be supplied")
	private String lastName;

	@NotBlank(message = "Password must be supplied")
	private String password;

	@NotBlank(message = "Email must be supplied")
	@Email(message = "Invalid email format")
	private String email;

	@NotBlank(message = "City must be supplied")
	private Boolean availibility;

	@NotBlank(message = "Mobile must be supplied")
	private String mobile;

	
	private List<Address> addresses = new ArrayList<>();

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Boolean getAvailibility() {
		return availibility;
	}

	public void setAvailibility(Boolean availibility) {
		this.availibility = availibility;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public List<Address> getAddresses() {
		return addresses;
	}

	public void setAddresses(List<Address> addresses) {
		this.addresses = addresses;
	}

}
