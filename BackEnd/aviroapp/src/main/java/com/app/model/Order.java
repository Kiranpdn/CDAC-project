package com.app.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "orders")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Order extends BaseEntity {
	
	@Id
	private Long orderId;
	private Product product;
	private Customer customer;
	private Employee employee;
	private LocalDate orderDate;
	private LocalDate startDate;
	private LocalDate endDate;
	private double TotalPrice;
	private String OrderStatus;

}
