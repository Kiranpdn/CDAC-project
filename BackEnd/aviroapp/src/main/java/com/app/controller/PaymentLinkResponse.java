package com.app.controller;

import java.time.LocalDate;

import com.app.model.Customer;
import com.app.model.Employee;
import com.app.model.Product;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PaymentLinkResponse {
	
	private String payment_link_url;
	private String payment_link_id;
	
	

	
}
