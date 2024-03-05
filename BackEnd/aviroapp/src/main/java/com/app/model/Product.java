package com.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "products")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Product extends BaseEntity {
	
	@NotBlank(message = "Product name can't be blank")
	@Length(min = 4, max = 20, message = "Invalid Product name!!")
	@Column(name = "product_name", length = 20)
	private String productName;
	
	@NotBlank(message = "Description can't be blank")
	@Length(min = 4, max = 200, message = "Invalid Description name!!")
	@Column(name = "description", length = 20)
	private String description;
	
	@NotBlank(message = "Price can't be blank")
	@Length(min = 4, max = 200, message = "Invalid Price !!")
	@Column(name = "price", length = 10)
	private Double price;

	@Enumerated(EnumType.STRING)
	@Column(length = 10)
	@NotNull(message = "Department must be supplied")
	private Departments productDept;;
}
