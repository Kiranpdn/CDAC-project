package com.app.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "customers")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Customer extends BaseEntity {

	@NotBlank(message = "First name can't be blank")
	@Length(min = 4, max = 20, message = "Invalid First name!!")
	@Column(name = "first_name", length = 20)
	private String custFirstName;

	@NotBlank(message = "Last name can't be blank")
	@Length(min = 4, max = 20, message = "Invalid last name!!")
	@Column(name = "last_name", length = 20)
	private String custLastName;

	@Column(name = "adhaar_no", length = 10, unique = true)
	private String adhaarCardNo;

	@Column(length = 10, unique = true)
	@Email(message = "Invalid Email!!")
	private String emailId;

	@Column(length = 30, unique = true)
	private String password;

	@Column(length = 10, unique = true)
	private Long mobileNo;

	@Column(length = 50)
	private String address;

	@Column(length = 20)
	private String location;

	@Column(length = 6)
	private Long pinCode;

	@Enumerated(EnumType.STRING)
	@Column(length = 10)
	@NotNull(message = "Category must be supplied")
	private CustomerCategory custCategory;

}
