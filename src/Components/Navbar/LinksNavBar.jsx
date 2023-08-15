import React, { useState } from 'react'

export default function LinksNavBar() {

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <div className="bg-indigo-950 py-4 lg:py-8 text-white font-open shadow-black shadow-md">
        <div className="container flex items-center justify-between space-x-2 lg:space-x-10">
          {/* Logo */}
          <a className='ms-3 text-xl lg:text-3xl font-bold text-white' href='#home'>MoonGun</a>
          {/* Navigasyon */}
          <nav className='block lg:flex justify-between lg:flex-1'>
            {/* Menu */}
            <button onClick={toggleMenu} className='visible lg:invisible mb-2 me-2'><i class="fa-solid fa-bars text-2xl"></i></button>
            <div id='toggleActive' className={`block me-3 ms-0 lg:flex items-center text-sm lg:text-lg space-x-2 lg:space-x-8 ${menuVisible ? '' : 'hidden'}`}>
              <a href="#home" className='block ms-2 mb-3 lg:mb-0 lg:ms-0 lg:flex text-white text-xs lg:text-lg hover:text-blue-400 transition duration-500'>Anasayfa</a>
              <a href="#about" className='block mb-3 lg:mb-0 lg:flex text-white text-xs lg:text-lg hover:text-blue-400 transition duration-500'>Hakkımda</a>
              <a href="#contact" className='block mb-3 lg:flex lg:mb-0 text-white text-xs lg:text-lg hover:text-blue-400 transition duration-500'>Bana Ulaş</a>
            </div>
            {/* Sağ Taraf Social */}
            <div className={`block ms-2 items-center space-x-2 lg:space-x-8 lg:flex ${menuVisible ? '' : 'hidden'}`}>
              <a href="https://github.com/CoderMungan" target='_blank' rel="noopener noreferrer" className='text-white text-xs lg:text-lg hover:text-blue-400 transition duration-500'><i class="fa-brands fa-github-alt"></i></a>
              <a href="https://instagram.com/codermoongun" target='_blank' rel="noopener noreferrer" className='text-white text-xs lg:text-lg hover:text-blue-400 transition duration-500'><i class="fa-brands fa-instagram"></i></a>
              <a href="https://linkedin.com/in/halilmungan/" target='_blank' rel="noopener noreferrer" className='text-white text-xs lg:text-lg hover:text-blue-400 transition duration-500'><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
