import React from 'react'
import { Link } from 'react-router-dom';
function Button({bgColor,text,eventHandler,hoverCol,link}) {
  return (
    <Link to={`${link}`}>
    <div>
 <button
  className={`
    mx-auto 
    mt-20
    px-6 py-3 
    text-lg sm:text-xl md:text-2xl 
    rounded-lg
    ${bgColor}
   ${hoverCol}
    shadow-md 
    text-white 
    font-semibold 
    cursor-pointer
    transition 
    duration-300 
    ease-in-out
    hover:
    focus:outline-none 
    focus:ring-1
    focus:border-amber-500
` }
>
 {text}
</button>
    </div>
     </Link>
  )
}

export default Button
