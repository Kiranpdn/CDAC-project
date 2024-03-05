import React, { useEffect, useState } from 'react'

const PaymentSuccess = () => {
    const [paymentId,setPaymentId]=useState()
    const [referenceId,setReferenceId]=useState();
    const [paymentStatus,setPaymentStatus]=useState();
    const {orderId}=useParam()

    console.log("orderId",orderId)

    const dispatch=useDispatch();
    const {order} = useSelector(store=>store);

    console.log("order",order.order)

    useEffect(()=>{
        const urlParam=new URLSearchParam(window.location.search);

        setPaymentId(urlParam.get("razorpay_payment_id"))
        setPaymentStatus(urlParam.get("razorpay_payment_link_status"))
    },[])

    useEffect(()=>{
        const data={orderId,paymentId}
        dispatch(getOrderById(orderId));
        dispatch(updatePayment(data)) 
    }),[orderId,paymentId]

    return(
        <div className='px-2 lg:px-36'>

            <div className='felx flex-col justify-center items-center'>

                <Alert
                variant='filled'
                severity='success'
                sx={{mb:6,width:"fit-content"}}
                >
                    <AlertTitle>Payment Success</AlertTitle>
                    Condratulations !! Your order got placed

                </Alert>

            </div>

            <OrderTracker activeStep={1}/>

            <Grid container className='space-y-5 py-5 pt-20'>

                {order.order?.orderItems.map((item)=><Grid container item className='shadow-x1 rounded-md p-5'
                sx={{alignItems:"center",justifyContent:"space-between"}}
                >

                    <Grid item xs={6}>
                        <div className='flex items-center'>
                            <img className='w-[5rem] h-[5rem] object-cover object-top' src="{item.product.imageUrl}" alt="" />

                            <div className='m1-5 space-y-2'>
                                <p>{item.product.title}</p>
                                <div className='opacity-50 text-xs font-semibold space-x-5'><span>Color: item.color</span>
                                <span>Size: {item.size}</span>
                                <span>Color: {item.color}</span>
                                </div>
                                <p>₹ {item.price}</p>
                            </div>

                        </div>
                    </Grid>
                    <Grid item>
                        <AddressCard address={order.order?.shippingAddress}/>
                    </Grid>

                </Grid>)}
                
            </Grid>

        </div>




    )











}