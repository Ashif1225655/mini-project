
const Button = (props) => {

  return (
    <div>
      <button onClick={ props.handleclick} className='px-6 py-1 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white transition-all rounded-full '>
        {props.btntitle}
      </button>
    </div>
  )
}

export default Button;
