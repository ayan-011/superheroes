import React, { useState, useEffect } from 'react';

const Thor = () => {
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

  return (
    <div className='w-full h-screen flex items-center justify-center bg-black overflow-hidden  '>
      
      {/* Background Video */}
      <video className="pointer-events-none opacity-50  "  autoPlay muted loop>
        <source src="/marvelimg/thunder.mp4" type="video/mp4" />
      </video>
      
      {/* Main Card */}
      <div className="lg:w-[1700px]  rounded-2xl lg:h-[800px] bg-zinc-800 absolute flex opacity-50 sm:w-[600px] sm:h-[300px] md:w-[700px] md:h-[350px] w-[300px] h-[600px]">
      
        <div className="text flex flex-col lg:w-[500px]  lg:gap-3 lg:m-36 lg:mt-[200px] text-zinc-300 sm:w-[200px] sm:m-5 sm:gap-y-2 m-3 ">
          <span >#1 Superhero</span>
          <span>GOD OF THUNDER</span>
          <img src="/marvelimg/thorname.png" className='pointer-events-none lg:w-80 lg:mt-11 drop-shadow-2xl shadow-black md:mt-7 sm:mt-4 mt-8' alt="Thor Name" />
        </div>
      </div>
      
      {/* Buttons */}
      <div className="buttons lg:mt-60 lg:ml-[-1180px] absolute lg:gap-x-4 sm:ml-[-360px] sm:mt-[130px] md:ml-[-420px] mt-[420px] text-sm  select-none ">
        <button
          onClick={handleCompareClick}
          className='bg-black text-zinc-300 lg:w-32 lg:h-12 lg:text-xl md:text-lg rounded-full hover:bg-zinc-950 hover:scale-105 transition-all duration-300 sm:text-sm sm:w-20 sm:h-9 md:w-28 md:h-11 w-20 h-9'>
          Compare
        </button>
        <button
          onClick={handleSelectClick} // Attach handler here
          className='bg-black ml-5 text-zinc-300 lg:w-32 lg:h-12 lg:text-xl md:text-lg rounded-full hover:bg-zinc-950 hover:scale-105 transition duration-300 sm:text-sm sm:w-20 sm:h-9 md:w-28 md:h-11 w-20 h-9'>
          Select
        </button>
      </div>

      {/* Notification */}
      {notification && (
        <div className="absolute top-4 align-middle bg-zinc-900 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-500">
          Superhero selected!
        </div>
      )}

      {/* Comparison Card */}
      {showCard && (
        <div className="absolute lg:top-1/2 lg:left-[820px] transform -translate-x-1/2 -translate-y-1/2 lg:w-[400px] lg:h-[400px] bg-zinc-800 text-white rounded-lg select-none flex flex-col items-center justify-center lg:gap-2 sm:w-[300px] sm:h-[200px] sm:top-[50%] sm:left-[50%] sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2">
          <h2 className="text-xl font-bold mt-[-320px]">Comparison</h2>
          <p className="text-sm text-gray-400">Thor vs Other Heroes</p>
          <div className="h-[1px] w-full bg-zinc-950"></div>

          <div className='w-full absolute lg:mt-[-10px] gap-3 flex flex-col'>
            <div className="w-full h-10 bg-zinc-700 flex items-center justify-center text-zinc-300 hover:bg-zinc-600 cursor-pointer">Loki</div>
            <div className="w-full h-10 bg-zinc-700 flex items-center justify-center text-zinc-300 hover:bg-zinc-600 cursor-pointer">Hulk</div>
            <div className="w-full h-10 bg-zinc-700 flex items-center justify-center text-zinc-300 hover:bg-zinc-600 cursor-pointer">Iron Man</div>
            <div className="w-full h-10 bg-zinc-700 flex items-center justify-center text-zinc-300 hover:bg-zinc-600 cursor-pointer">Captain America</div>
          </div>

          <button
            onClick={handleCompareClick}
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-zinc-900 mt-[320px] absolute">
            Close
          </button>
        </div>
      )}

      {/* Thor Image */}
      <img className='pointer-events-none absolute lg:w-[900px] lg:ml-[1000px]   lg:mt-[10px] sm:w-[330px] sm:ml-[300px] sm:mt-[10px] md:ml-[378px] md:w-[390px] w-80 ml-7' src="marvelimg/thor.png" alt="Thor" />
      
    </div>
  );
};

export default Thor;
