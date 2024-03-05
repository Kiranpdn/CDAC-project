package com.app.services;

import com.app.model.Order;

public interface OrderService {

	Order findOrderById(Long orderId);

}
