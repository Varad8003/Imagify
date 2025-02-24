//import React from 'react'

import { useContext, useState } from "react"
import { assets } from "../assets/assets"
import {motion} from 'framer-motion'
import { AppContext } from "../context/AppContext";
const Result = () => {
  const [image,setImage]=useState(assets.sample_img_1);
  const [isImageLoaded,setisImageLoaded]=useState(false);
  const [loading,setLoading]=useState(false);
  const[input,setInput]=useState('');

  const {generateImage} =useContext(AppContext);
  const onSubmitHandler =async (e)=>{
    e.preventDefault();
    setLoading(true);

    if(input){
      const image=await generateImage(input);
      if(image){
        setisImageLoaded(true);
        setImage(image);
      }
    }
    setLoading(false);
  }

  return (
    <motion.form onSubmit={onSubmitHandler} className="flex flex-col min-h-[90vh] items-center justify-center"
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    
    >
    <div className="flex flex-col items-center">
      <div className="relative">
        <img src={image} className="max-w-sm rounded" alt="" />
        <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`}/>
      </div>
      <p className={!loading ? 'hidden':''}>Loading...</p>
      
    </div>
    {!isImageLoaded && <div className="flex w-full max-w-xl bg-neutral-500 text-white rounded-full mt-8 items-center justify-center">
      <input
        onChange={e=>setInput(e.target.value)} value={input}
        type="text" placeholder="Describe what you want to generate" className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder:color" />
      <button  type="submit"  className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full text-white">Generate</button>
    </div> }
    

    {isImageLoaded && <div className="flex flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
      <p onClick={()=>{setisImageLoaded(false)}} className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer">Generate Another</p>
      <a download className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer" href={image}>Download</a>
    </div>}
  </motion.form>
  )
}

export default Result