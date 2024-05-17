
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../layouts/Button'
import {AiOutlineMenuUnfold} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';
import {BiChevronDown} from 'react-icons/bi';
import { BsCart2 } from "react-icons/bs";
import { useSelector} from 'react-redux';


const Navbar = () => {
    const opt = ["paneer","chicken","veg","drink"];
    const selector=useSelector((state)=>state.bag.cart);
    const [menu,setMenu]=useState(false);
    
    const handleChange = ()=>{
        setMenu(!menu);
    }
    
  return (
    <div className='w-full'>
      <div>
        <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
            <div className='flex flex-row items-center cursor-pointer'>
                <Link to="/"><h1 className='text-5xl font-bold text-amber-500'>FoodiCa</h1></Link>
            </div>
            <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
                <Link to="/" spy={true} duration={500} className='hover: text-amber-500 transition-all cursor-pointer'>Home</Link>
                <div className='relative group'>
                    <div className='flex items-center gap-1'>
                        <Link spy={true} duration={500} className='hover:text-amber-500 transition-all cursor-pointer'>Dishes</Link>
                        <BiChevronDown className=" cursor-pointer" size={25}/>
                    </div>
                    <ul className='absolute hidden space-y-2 group-hover:block bg-slate-500 border border-gray-300 rounded-lg p-5'>  
                        
                        <li className='flex flex-col'>
                        {
                            opt.map((data,id)=>{
                                return(
                                    <Link to={`/filteredpage/${data}`} spy={true} duration={500} className='p-4 hover:text-amber-500 transition-all cursor-pointer' key={id}>{data}</Link>
                                )
                            })
                        }
                        </li>  
                    </ul>
                </div>
                <a href='#about' spy={true} duration={500} className='hover:text-amber-500 transition-all cursor-pointer'>About</a>
                <a href='#menu' spy={true} duration={500} className='hover:text-amber-500 transition-all cursor-pointer'>Menu</a>
                <a href='#reviewsrestro' spy={true} duration={500} className='hover:text-amber-500 transition-all cursor-pointer'>Reviews</a>
                <Link to="/login">
                    <Button btntitle="Login"/>
                </Link>
                <Link to="/addtocart" spy={true} duration={500} className='hover:text-amber-500 transition-all cursor-pointer'>
                <div className="flex items-center justify-center">
                    <BsCart2 className='text-amber-500 hover:text-amber-700 transition-all cursor-pointer right-0' size={30}/>
                    <p className="relative bottom-3">{selector.length}</p>
                </div>
                   
                </Link>
            </nav>
            <div className="md:hidden flex items-center">
                {
                    menu ? (
                        <AiOutlineClose size={25} onClick={handleChange}/>
                        ):(
                            <AiOutlineMenuUnfold size={25} onClick={handleChange}/>
                        )
                }
            </div>
        </div>
        <div className={`${menu ? "translate-x-0":"-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                <Link to="/" spy={true} duration={500} className='hover: text-amber-500 transition-all cursor-pointer'>Home</Link>
                <a href='#about' spy={true} duration={500} className='hover:text-amber-500 transition-all cursor-pointer'>About</a>
                <a href='#menu' spy={true} duration={500} className='hover:text-amber-500 transition-all cursor-pointer'>Menu</a>
                <a href='#reviewsrestro' spy={true} duration={500} className='hover:text-amber-500 transition-all cursor-pointer'>Reviews</a>
                <Link to="/login">
                <Button btntitle="Login"/>
                </Link>
                <Link to="/addtocart" spy={true} duration={500} className='hover:text-amber-500 transition-all cursor-pointer'>
                <div className="flex items-center justify-center">
                    <BsCart2 className='text-amber-500 hover:text-amber-700 transition-all cursor-pointer right-0' size={30}/>
                    <h className="relative bottom-3">{selector.length}</h>
                </div>   
                </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
