import React from 'react'
import { navLinks } from '../../Constants'
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
const Navbar = () => {
    useGSAP(()=>{
        const navTween = gsap.timeline({
        scrollTrigger:{
            trigger :'nav',
            start: 'bottom top'
     
        }    
        })
        navTween.fromTo('nav',{
            background:'transparent',

        },{
            backgroundColor:'#00000050',
            backgroundFilter:'blur(10px)',
            duration:1,
            ease:'power1.inOut'
        })

    })
  return (
<nav>
<div>
    <a href="#home" className='flex items-center p-2'>
        <img src="/images/logo.png" alt="" />
    <p>Velvet Pour</p>
    </a>
    <ul>
        {navLinks.map((link)=>(
            <li key={link.id}>
                <a href={`#${link.id}`}>
                    {link.title}
                </a>
            </li>
        ))}
    </ul>
</div>

</nav>  )
}

export default Navbar