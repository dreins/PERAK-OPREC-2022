import React from 'react'
import Image from 'next/image'

function Navbar() {
    return (
        <nav class='flex px-8 py-2 bg-yellow-skin justify-between'>
                <div className='pr-4'>
                    <Image
                        src="/img/logoperak2022.png"
                        alt="Logo Perak"
                        width={45}
                        height={45}   
                        
                    />
                   <Image
                        src="/img/PESTA RAKYAT KOMPUTER.png"
                        alt="PESTA RAKYAT KOMPUTER"
                        width={160}
                        height={45}   
                        
                    />
                </div>
                
                <div className='flex items-stretch space-x-8'>
                    <a href='#' class='block p-2.5 font-extrabold'>Score</a>
                    <a href='#' class='block p-2.5 font-extrabold'>Games Map</a>
                    <a href='#' class='block p-2.5 font-extrabold'>Team Profile</a>
                    <a href='#' class='block p-2.5 font-extrabold'>News</a>
                    <a href='#' class='block p-2.5 font-extrabold'>Explore Cafetaria</a>
                    <a href='#' class='block p-2.5 font-extrabold'>Merchandise</a>
                </div>
        </nav>
    )
}

export default Navbar
