import React from 'react'
import star from "./images/star.png"
import Image from 'next/image'
import vector from "./images/vector.png"
import creative from "./images/Creative.png"
import chain from "./images/chain.png"
import sunshines from "./images/sunshines.png"
import manWearingGlasses from "./images/man-wearing-glasses.png"
import star1 from "./images/star-1.png"
import world from "./images/world.png"

function Hero() {
  return (
    <section>
        <div className='flex max-lg:flex-col-reverse space-x-10 content-between place-content-between'>
            <div className='pl-[10rem] pt-[5rem] max-md:pt-12 
            flex content-center place-content-center align-middle max-lg:pl-0 max-lg:pr-[12rem]'>
                <span><Image src={star} alt='star' className='h-6 w-5 object-contain'/></span>
                
            </div>
            <div className='pt-7 pr-[7rem]'>
                <div >
                    <div className='flex space-x-1 text-white text-xl max-sm:text-lg place-content-center content-center'>
                        Ingniting a Revolution in
                     
                        <div className='flex flex-col px-1'>
                            <span> HR Innovation</span>
                            <span className='w-[8.5rem]'><Image src={vector} alt='vector' className=''/></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className='flex ml-[15%] max-lg:flex-col max-lg:ml-0 '>
            <div className='pl-[1.1rem] max-lg:ml-[15%] space-y-3 max-lg:pb-7'>
                
                <div className='flex flex-col pt-8 text-white text-4xl font-extrabold'>
                    <div className='ml-[11.5rem]'>
                        <Image src={creative} alt='sunshines' className='h-12 w-10 '/>
                    </div>
                    
                    getlinked Tech 
                    <span>Hackathon 
                        <span 
                        className='text-[#d434fe] pl-1'>1.0 <Image src={chain} alt='star' className='h-10 w-12 object-contain lg:hidden'/></span>
                        


                    </span>
                    

                </div>
                <p className='text-sm text-white'>Participate in getlink tech Hackathon 2023 stand a chance to win a Big prize</p>
                <button className='register max-lg:mb-12 mb-[10rem]'>Register</button>
                <p className='text-4xl text-white pt-10'>00<span className='text-xs'>H</span> 00<span className='text-xs pr-2'>M</span> 
                00<span className='text-xs'>S</span></p>
            </div>

            <div className='relative mix max-lg:min-w-full'>
                <div className='flex xl:w-[64vw] max-lg:w-full md:w-[60vw]' >
                    <Image src={manWearingGlasses} alt='photo' className='w-[43vw] h-[62vh] object-contain max-lg:w-full' />
                </div>
                <div className='absolute top-5 left-[5rem]'>
                    <span><Image src={star1} alt='star' className='h-6 w-5 object-contain mix'/></span>
                </div>
                <div className='absolute top-[3.5rem] left-[10%]'>
                    <span><Image src={world} alt='star' className='h-[20rem] w-[40rem] object-contain'/></span>
                </div>
                <div className='absolute top-[7rem] max-lg:hidden'>
                    <span><Image src={chain} alt='star' className='h-10 w-12 object-contain mix'/></span>
                </div>
                <div className='absolute top-[7rem] left-12 max-lg:hidden'>
                    <span><Image src={sunshines} alt='star' className='h-10 w-12 object-contain mix'/></span>
                </div>
                
            </div>

        </div>
        <hr className='mt-3 text-mix'/>
    </section>
  )
}

export default Hero
