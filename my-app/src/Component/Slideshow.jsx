import React from "react";
import { useEffect } from "react";
import { useState } from "react";



function Slideshow(){
   
    const im1='https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2Fmint_d_banner.png&w=1920&q=75'
    const im2='https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2Fwinter_d_home.png&w=1920&q=75'
    const im3='https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FDesktop_Banner_Shine.png&w=1920&q=75'
    const im5='https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FShine_2nd_pos_Desktop.png&w=1920&q=75'
    const im4='https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FReliance_Desktop.png&w=1920&q=75'
    const im6='https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FInfosys.png&w=1920&q=75'
    const [link,setLink]= useState(im1)

let imArr=[im1,im2,im3,im4,im5,im6]

   useEffect(()=>{

    let c=0
    setInterval(() => {
        c++;
       
        setLink(imArr[c])
        if(c===5){c=0}
    }, 2000);
   },[])

    return (<div>
        <img style={{marginTop:'150px'}} src={link} alt="" />
    </div>)
}


export default Slideshow;