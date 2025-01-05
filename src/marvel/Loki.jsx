import {React, useState, useEffect} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import Thor from './Thor';
  
 

const Loki = () => {


   const [showCard, setShowCard] = useState(false);
   const [notification, setNotification] = useState(false); // New state for notification
  
    const handleCompareClick = () => {
      setShowCard(!showCard);
    };

    const handleSelectClick = () => {
      setNotification(true); // Show notification
      // Hide notification after 3 seconds
      setTimeout(() => {
        setNotification(false);
      }, 3000);
    };
  

  const slides = [
    <Thor/>,
    <div className='w-full h-screen flex items-center justify-center bg-black overflow-hidden select-none'>
      
    <img className='w-full h-screen opacity-15 relative' src="marvelimg/lokibg.jpg" alt="" />
    <video className="pointer-events-none  opacity-5 absolute h-screen w-full z-0" autoPlay muted loop><source src="/marvelimg/smoke.mov" type="video/mp4" /></video>
   
    <div className=" lg:w-[1700px] rounded-2xl lg:h-[800px]  bg-zinc-800    absolute flex    overflow-hidden h-screen w-full">
      <img src="marvelimg/loki1.jpg" alt="" className='pointer-events-none absolute drop-shadow-2xl   shadow-2xl h-screen w-full' />
      <img src="marvelimg/lokilogo.png " className='pointer-events-none absolute lg:mt-[150px] lg:ml-14  lg:w-[460px] -mt-16 sm:w-[320px] sm:ml-[200px] md:ml-[330px] ' alt="" />
      {/* <img src="marvelimg/shadow1.png" alt="" className="ml-96 h-screen" /> */}
     <div className="text-sm md:text:lg lg:text  flex flex-col  gl:gap-3 lg:m-36 lg:mt-[200px] text-zinc-300  m-2 ">
      <span className="absolute text-green-100"  >#2 Superhero</span>
      <span className="absolute lg:mt-8  text-green-100 mt-8">God of mischief, trickery, and deception</span>
     </div>
    </div>
    <div className="buttons lg:mt-[250px] lg:ml-[-1140px]  opacity-90 absolute">
    <button
      onClick={handleCompareClick}
      className='bg-green-950   text-zinc-300 lg:w-32 lg:h-12 text-xl rounded-full hover:bg-green-900 hover:scale-105 transition-none duration-300 w-28 h-9 mt-96'>
      Compare
    </button>
    <button
          onClick={handleSelectClick} // Attach handler here
          className='bg-green-950 ml-5   text-zinc-300 lg:w-32 lg:h-12 text-xl rounded-full hover:bg-green-900 hover:scale-105 transition duration-300 w-28 h-9 '>
          Select
        </button>
  </div>

      {/* Notification */}
      {notification && (
        <div className="absolute top-4 align-middle bg-green-600 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-500">
          Superhero selected!
        </div>
      )}

  {/* Card */}
  {showCard && (
    <div className="absolute lg:top-[520px] lg:left-[1390px] transform -translate-x-1/2 -translate-y-1/2 lg:w-[400px] lg:h-[400px] bg-[#0f2a1c] opacity-90 text-white rounded-lg  select-none flex flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-bold mt-[-320px]">Comparison </h2>
      <p className="text-sm text-gray-400">Thor vs Other Heroes</p>
      <div className="h-[1px] w-full bg-green-900"></div>

      <div className='w-full   absolute lg:mt-[-10px] gap-3 flex flex-col'>
      <div className="w-full h-10 bg-[#193125] flex items-center justify-center text-zinc-300 hover:bg-[#224634] cursor-pointer">  Thor </div>
      <div className="w-full h-10 bg-[#193125] flex items-center justify-center text-zinc-300 hover:bg-[#224634] cursor-pointer">  Hulk </div>
      <div className="w-full h-10  bg-[#193125] flex items-center justify-center text-zinc-300 hover:bg-[#224634] cursor-pointer">  Iron man </div>
      <div className="w-full  h-10  bg-[#193125] flex items-center justify-center text-zinc-300 hover:bg-[#224634] cursor-pointer">  Captain America </div>
       

      </div>
      <button
        onClick={handleCompareClick}
        className="bg-[#193125] text-white px-4 py-2 rounded-full hover:bg-[#224634] mt-[320px] absolute">
        Close
      </button>
    </div>
  )}
      {/* <img className='absolute w-[900px] ml-[990px] top-[14px] mt-[9px] lg:mt-[76px]  npm run dev drop-shadow-2xl' src="marvelimg/thor.png" alt="" /> */}
</div>

  
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () =>{
    const isFirstSlide = currentIndex == 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () =>{
    const isLastSlide = currentIndex == slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex  + 1;
    setCurrentIndex(newIndex);

  }
  return (
    <div className=' h-screen w-full   relative group'>
      <div className="w-full h-screen">{slides[currentIndex]}</div>

      {/* left arrow     */}
      <div className='  group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
      </div>
      {/* right arrow     */}
      <div className='  group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30}/>
      </div>
    </div>
  )
}

export default Loki