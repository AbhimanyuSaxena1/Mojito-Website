import React from 'react';
import gsap from 'gsap'
import {ScrollTrigger ,SplitText} from "gsap/all";
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

gsap.registerPlugin(ScrollTrigger,SplitText);

function  App(){
    return (
        <>
           <div className="main">
            <Navbar/>
            <Hero/>
            <div className="h-dvh bg-black"></div>
           </div>
                    </>
    )
}

export default App;