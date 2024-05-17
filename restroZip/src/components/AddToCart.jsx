import React, { useEffect, useState } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import DishesCard from '../layouts/DishesCard';
import { deleteItem } from '../store/CartSlice';
import Button from '../layouts/Button';
import { useNavigate } from 'react-router-dom';


const AddToCart = () => {
const navigate = useNavigate();
const dispatch=useDispatch();
const [cost,setCost]=useState();
const selector = useSelector((state)=>state.bag.cart);
const handledelete=(data)=>{
  dispatch(deleteItem(data));
};
useEffect(() => {
  setCost(selector.reduce((total, item) => total + item.price, 0));
}, [selector]);

const buyHandle=()=>{
  navigate("/login");
}
  return (
    <div className="flex flex-col lg:flex-row justify-center relative top-20">
    <div className="flex flex-wrap gap-8 justify-center">
      {
        selector.map((data,id)=>{
            return(
              <div className="lg:w-72">
                <DishesCard title={data.title} img={data.image} price={data.price} btnname="Delete" key={id} handleclick={() => handledelete(data)} />
              </div>
            )
        })
      }
      </div>
      <div className='flex flex-col items-center justify-center gap-14  h-72 w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.5)_0px_3px_8px] rounded-lg'>
        <h2 className='font-semibold text-center text-xl pt-6'>Total Item = {selector.length} </h2>
        <h2 className='font-semibold text-center text-xl pt-6'>Total Cost = {cost} </h2>
        <Button btntitle="Buy All" handleclick={buyHandle} />
      </div>
    </div>
  )
}

export default AddToCart;