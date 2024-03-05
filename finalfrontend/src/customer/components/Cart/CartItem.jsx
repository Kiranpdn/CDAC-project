import React from "react";
import { Button, IconButton } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {

    return (
        <div className="p-5 shadow-lg border rounded-md">
            <div className="flex items-center">
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                    <img className="w-full h-full object-cover object-top" src="https://www.loomsolar.com/cdn/shop/products/75Wattpanelfrontback_75Wattpanelrecreated_300x.jpg?v=1618829315"
                        alt=""></img>
                </div>
                <div className="ml-5 space-y-1">
                    <p className="font-semibold">Loom Solar Panel 75 watt - 12 volt Mono Perc</p>
                    <p className="opacity-70">Wattage:75 watt</p>
                    <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                        <p className='font-semibold'>Price:	Rs. 1,650</p>
                        <p className='line-through'>Rs. 2500</p>
                        <p className='text-green-600 font-semibold'>34% OFF </p>
                    </div>
                </div>
            </div>
            <div className="lg:flex items-center lg:space-x-10 pt-4">
                    <div className="flex items-center space-x-2">
                        <IconButton>
                            <RemoveCircleOutlineIcon/>
                        </IconButton>
                        <span className="py-1 px-7 border rounded-sm">2</span>
                        <IconButton sx={{color:"RGB{145 85 253}"}}>
                            <AddCircleOutlineIcon/>
                        </IconButton>
                        
                    </div>
                    <div>
                        <Button sx={{color:"RGB{145 85 253}"}}>
                            Remove
                        </Button>
                    </div>

                </div>

        </div>
    )
}

export default CartItem