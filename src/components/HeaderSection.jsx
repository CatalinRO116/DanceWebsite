import React from 'react'
import { Link } from 'react-router-dom';
function HeaderSection({text,link}) {
  return (
    <Link to={`${link}`}>
    <div className='hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md cursor-pointer text-2xl font-semibold text-gray-800 transition-colors duration-300'>
      {text}
    </div>
    </Link>
  )
}

export default HeaderSection
