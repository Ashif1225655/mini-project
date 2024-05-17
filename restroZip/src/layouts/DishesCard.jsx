import {BsStarFill,BsStarHalf} from 'react-icons/bs';
import Button from './Button';

const DishesCard = (props) => {
          return(
            <div className='w-full lg:p-5 shadow-[rgba(0,_0,_0,_0.5)_0px_3px_8px] rounded-lg' key={props.id}>
            <img className='rounded-xl h-56 w-full' src={props.img} alt='img'/>
            <div className='space-y-4'>
              <h3 className='font-semibold text-center text-xl pt-6'>{props.title}</h3>
              <div className='flex flex-row justify-center'>
                  <BsStarFill className='text-amber-500'/>
                  <BsStarFill className='text-amber-500'/>
                  <BsStarFill className='text-amber-500'/>
                  <BsStarFill className='text-amber-500'/>
                  <BsStarHalf className='text-amber-500'/> 
              </div>
              <div className='flex flex-row items-center justify-center gap-4'>
                  <h3 className='font-semibold text-lg'>{props.price}</h3>
                  <Button  handleclick={props.handleclick} btntitle={props.btnname} title={props.title}/>
              </div>
            </div>
          </div>
          )

      }

export default DishesCard
