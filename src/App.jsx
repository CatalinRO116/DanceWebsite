import React from 'react' // ← adaugă asta!
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import CardContainer from './components/CardContainer.jsx'
import Button from './components/Button.jsx'



function App() {
  return (
    <>
    <Header></Header>
    <div className='text-zinc-950 text-6xl mt-26'>Welcome to our <span className='font-bold mask-radial-from-neutral-950'> dance community</span></div>

    <Button
     bgColor={"bg-lime-950"} 
     text={" Our Subscriptions"}
      hoverCol={"hover:bg-lime-900"}
      link={"/subscription"}></Button>
      
    <Button 
    bgColor={"bg-fuchsia-950"} 
    text={"About our course"}
    hoverCol={"hover:bg-fuchsia-700"}
    link={"/about"}
    ></Button>

<CardContainer></CardContainer>
     </>
  )
}

export default App
