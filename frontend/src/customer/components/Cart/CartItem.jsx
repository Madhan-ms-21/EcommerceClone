import React from 'react'
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {Button} from '@mui/material';
const CartItem = () => {

    const img = 'https://sp.yimg.com/ib/th?id=OPAC.Ujcn9IHmRQuSAg474C474&o=5&pid=21.1&w=174&h=174'
    return (
        <div className='p-5 shadow-lg border-gray-700 rounded-md'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className="w-full h-full object-cover object-top" src={img} />
                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'> Product title</p>
                    <p className='opacity-70'> Size:M , Whilte</p>
                    <p className='opacity-70'> Brand Nmae</p>

                    <div className="flex space-x-2 items-center pt-3">
                        <p className="font-semibold">
                            ₹1999
                        </p>
                        <p className="opacity-50 line-through">
                            ₹999
                        </p>
                        <p className="text-green-600 font-semibold">
                            50% Off
                        </p>
                    </div>
                </div>

            </div>
            <div className="lg:flex items-center lg:space-x-10 pt-4">
                <div className="flex items-center space-x-2 ">
                    <IconButton  disabled={1 <= 1} color="primary" aria-label="add an alarm">
                        <RemoveCircleOutlineIcon />
                    </IconButton>

                    <span className="py-1 px-7 border rounded-sm">{6}</span>
                    <IconButton  color="primary" aria-label="add an alarm">
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>
                <div className="flex text-sm lg:text-base mt-5 lg:mt-0">

                    <Button variant="text">
                        Remove{" "}
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default CartItem;
