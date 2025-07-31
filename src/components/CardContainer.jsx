import React from 'react'
import Card from './Card';
import ballet from '../../public/images/Ballet.svg'
import contemporany from '../../public/images/Contemporany.svg'
import hipHop from '../../public/images/HipHop.svg'
import jazz from '../../public/images/Jazz.svg'
import salsa from '../../public/images/Salsa.svg'


function CardContainer() {
  return (
  <div className="container mx-auto px-4 py-6 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-y-79">

<Card title={'Ballet'} context={'Ballet is a graceful and expressive dance form known for elegance, precision, and storytelling through movement.'} img={ballet} link={"/ballet"}></Card>

      
<Card title={'Contemporany'} context={'Contemporary is an expressive dance style that combines ballet, modern, and jazz. It focuses on emotion, fluid movement, and personal interpretation, often using floor work and natural motion to tell stories..'} img={contemporany} link={"/contemporany"} even></Card>



<Card title={'HipHop'} context={'Hip Hop is an energetic and dynamic dance style rooted in street culture, known for its rhythm, freestyle movement, and powerful self-expression..'} img={hipHop} link={"/hipHop"} ></Card>

<Card title={'Jazz'} context={'Jazz is a lively and theatrical dance form that blends sharp technique with fluid motion, often characterized by kicks, leaps, and bold musicality.'} img={jazz} link={"/jazz"}></Card>
<Card title={'Salsa'} context={'Salsa is a vibrant and rhythmic partner dance that combines fast footwork, fluid spins, and Latin flair to create a joyful and social experience.'} img={salsa} link={"/salsa"}></Card>
    </div>
  );
}

export default CardContainer;
