import React from 'react'
import HeaderSection from './HeaderSection.jsx'
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function openMobileMenu(){
     setMenuOpen(!menuOpen)
    }

  return (
    <nav>
    <div className='hidden md:inline '>
      <div className='flex flex-wrap m-2.5 gap-6 justify-center px-4'>
     <HeaderSection text={'Subscriptions'} link={'/subscription'} ></HeaderSection>
     <HeaderSection text={'About US'} link={'/about'}></HeaderSection>
     <HeaderSection text={'History'} link={'/history'}></HeaderSection>

      </div>
   
    </div>

    <div className='shadow-2xl w-max'>
        <button onClick={openMobileMenu} className='md:hidden'>
      <FaBars size={24} />
      {menuOpen && (
         <div className='hover:bg-blue-600'>
     <HeaderSection text={'Subscriptions'} link={'/subscription'}></HeaderSection>
     <HeaderSection text={'About US'} link={'/about'}></HeaderSection>
     <HeaderSection text={'History'} link={'/history'}></HeaderSection>
        </div>
      )

    }
    </button>
    </div>
    </nav>
  )
}

export default Header
