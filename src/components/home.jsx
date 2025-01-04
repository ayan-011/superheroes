import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from "motion/react"

const Home = () => {

    const navigate = useNavigate();
  return (
    <main className='h-screen w-full flex relative overflow-hidden '> 
    <img className=' absolute  w-full opacity-10  h-screen' src="MVDC.webp" alt="" />
        
        <div className='h-screen w-1/2 bg-red-900 text-white flex justify-center realtive '>         
           {/* <img className='absolute w-[700px] ml-[-320px] opacity-25' src="avengers2.png" alt="" /> */}

            

            <motion.img
            onClick={()=>navigate('Page1')}
            initial={{strokeOpacity: 0,y: 320}}
            animate={{strokeOpacity: 1,y: 0}}
            transition={{duration: "0.1", delay: "0"}}
            whileHover={{y:-6}}
            className='  xl:w-40 h-fit xl:mt-[800px] cursor-pointer  absolute  sm:w-40 sm:mt-[500px] w-40 mt-[500px]' src="marvelimg/marvel.png" alt="" ></motion.img>
           
           
             
        </div> 

          <div className='w-full bg-red-900 absolute flex justify-center'>

        <h1 className=" font-bold xl:text-[170px] xl:w-[1400px]   text-white absolute opacity-15  xl:mt-16 select-none sm:text-[70px] sm:w-[620px]   sm:mt-[70px] text-[42px]    mt-[120px]  md:ml-12 sm:ml-12">WHO IS BETTER ?</h1>
        <div className="xl:h-[400px] xl:w-[900px] absolute bg-zinc-950 rounded-3xl xl:mt-56    opacity-90 shadow-2xl overflow-hidden  cursor-pointer hover:scale-105 transition-all duration-300 flex items-center justify-center   sm:w-[520px] sm:h-[290px] sm:mt-[140px] mt-[160px] w-[330px]  select-none">
            <div className='absolute xl:w-[620px] w-[320px] flex flex-col gap-y-2 xl:gap-y-5 sm:gap-y-5 justify-center text-center sm:w-96 '>

            <h1 className="   font-semibold xl:text-4xl sm:text-4xl text-2xl text-zinc-300 ">Select your superhero!</h1>
            <span className='text-zinc-500 text-[12px]  xl:text-xl sm:text-md '> antium praesentium in, architecto ab officiis optio ullam quibusdam a minima, totam, asperiores corporis deleniti nobis dolores doloribus natu ! Voluptates accusamus, quaerat tempora ut dicta alias doloremque inventore sunt earum perferendis laboriosam minima, explicabo, voluptas nemo voluptatem facere.</span>
            </div>
        <video className="pointer-events-none opacity-10 bg-repeat" autoPlay muted loop><source src="vid.mp4" type="video/mp4" /></video>
        </div>
          </div>
        <div className="h-screen w-[1px] bg-zinc-500 "></div>

        <div className='h-screen w-1/2 bg-black text-white  flex justify-center'>
        
         

        <motion.img 
        onClick={()=>navigate('Dcpage1')} 
        initial={{strokeOpacity: 0,y: 210}}
        animate={{strokeOpacity: 1,y: 0}}
        transition={{duration: "0.1", delay: "0"}}
        whileHover={{y:-10} }
                
        className='xl:w-32 h-fit absolute xl:mt-[800px] cursor-pointer  sm:w-28 sm:mt-[520px] w-28 mt-[520px] ' src="dcimg/dc.png" alt="" ></motion.img>
         
         </div>
    </main>
  )
}

export default Home