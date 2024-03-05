import React from 'react';
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/Pages/HomePage';
import Navigation from '../customer/components/Navigation/Navigation';
import Product from '../customer/components/Product/Product';
import Cart from '../customer/components/Cart/Cart';
import Footer from '../customer/components/footer/Footer';
import ProductDetails from '../customer/components/ProductDetails/ProductDetails';
import Order from '../customer/components/Order/Order';
import OrderDetails from '../customer/components/Order/OrderDetails';
import Checkout from '../customer/components/Checkout/Checkout';

const CustomerRouters = () => {
    return (
        <div>
            <div>
                <Navigation/>
            </div>
            
            <Routes>
                <Route path='/login' element={<HomePage/>}></Route>
                <Route path='/register' element={<HomePage/>}></Route>

                <Route path='/' exact element={<HomePage/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
                <Route path='/product/:productId' element={<ProductDetails/>}></Route>
                <Route path='/checkout' element={<Checkout/>}></Route>
                <Route path='/account/order' element={<Order/>}></Route>
                <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
   
            </Routes>
          
            <div>
            <Footer/>
            </div>
        </div>
    )
}

export default CustomerRouters;