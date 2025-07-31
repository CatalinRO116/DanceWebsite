import React from 'react'
import { Link } from 'react-router-dom';

function Card({ title, context, img ,link = '/'}) {
  return (
    <Link to={`${link}`}>
    <div className="w-76 lg:w-100 bg-fuchsia-900 text-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:rotate-1 hover:shadow-2xl transition-all duration-300 cursor-pointer mt-10 group" onClick={()=>{link}}>
      
      <img
        src={img}
        alt={title}
        className="w-full object-cover group-hover:brightness-110 transition duration-300"
      />
      
      <div className="p-4 flex flex-col h-full">
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        <p className="text-sm text-gray-300">{context}</p>
      </div>
    </div>
    </Link>
  );
  
}

export default Card

