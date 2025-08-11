import React from 'react';
import gsap from 'gsap'
import {ScrollTrigger ,SplitText} from "gsap/all";
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Cocktails from './Components/Cocktails/Cocktails';
import About from './Components/About/About';
import Art from './Components/Art/Art';

gsap.registerPlugin(ScrollTrigger,SplitText);

function  App(){
    return (
        <>
           <div className="main">
            <Navbar/>
            <Hero/>
            <Cocktails/>
            <About/>
            <Art/>
           </div>
                    </>
    )
}

export default App;