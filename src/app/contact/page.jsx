'use client'

import Navbar from '../componets/navbar'
import Image from 'next/image'
import pinkStar from  '@/app/images/pink-star.png'
import {FaInstagram} from "react-icons/fa"
import {RiTwitterXFill} from "react-icons/ri"
import {BiLogoFacebook, BiLogoLinkedin} from "react-icons/bi"
import {AiFillLeftCircle} from 'react-icons/ai'

function Page() {
  return (
    <main className='min-h-screen bg-dark-purple'>
        <div className='max-lg:hidden'>
            <Navbar/>
        </div>
        <div className='lg:hidden'>
            <div className='p-10 pt-9 pl-8 text-red-pink'>
                <AiFillLeftCircle 
                className='cursor-pointer text-lg'
                onClick={()=>{window.history.go(-1)}}
                />

            </div>

        </div>
        <div className='flex pt-8 space-between max-lg:flex-col'>
            <div className='pl-[10rem] max-lg:hidden'>
                <div className='pl-2'>
                    <Image src={pinkStar} alt='star' className='text-red-pink'/>
                </div>
                <div className='pt-24 space-y-7 text-white'>
                    <h2 className='text-red-pink text-4xl font-bold'>Get in touch</h2>
                    <p className= 'text-lg'>Contact <br /> <span className='pt-0'>Information</span></p>
                    <p className= 'text-lg'>
                        27, Alara Street
                        <br /> 
                        <span className='pt-0'>
                            Yaba 100012
                            <br />
                            <span className='pt-0'>
                                Lagos State
                            </span>
                        </span>

                    </p>


                    <p className='text-lg'>Call Us: 07067981819</p>
                    <p className= 'text-lg'>we are open from Monday-Friday 
                        <br /> 
                        <span className='pt-0'>08:00<span className='text-xs'>am</span> - 05:00<span className='text-xs'>pm</span></span>
                    </p>
                    <p className='text-lg text-red-pink'>
                        Share on
                    </p>
                    <div className='flex space-x-4'>
                        <span className='cursor-pointer'>
                            <FaInstagram className="text-xl text-white cursor-pointer"/>
                        </span>
                        <span className='cursor-pointer'>
                            <RiTwitterXFill className="text-xl text-white cursor-pointer"/>
                        </span>
                        <span className='cursor-pointer'>
                            <BiLogoFacebook className="text-xl text-white cursor-pointer"/>
                        </span>
                        <span className='cursor-pointer'>
                            <BiLogoLinkedin className="text-xl text-white cursor-pointer"/>
                        </span>

                    </div>
                </div>
            </div>
            <div className='mix w-[40rem] h-fit p-12 ml-[10rem] max-lg:mt-3 place-content-center align-center self-center
            mt-20 pt-20 relative max-lg:w-full max-lg:ml-0 max:lg:p-4 max-lg:pt-5 max-lg:bg-dark-purple max-lg:ml-[10vw]'>
                <div className='pl-12'>
                    <div className='text-red-pink space-y-2 text-xl'>
                        Questions or need assistance?
                        <h2>Let us know about it</h2>
                    </div>
                    <div className='pt-4 lg:hidden text-white text-sm'>
                        Email us below to any question related to our event
                    </div>
                    <div className='pt-5'>
                        <form action="">
                            <div className='flex flex-col'>
                                <input type="text" 
                                className='mix text-white ring-1 max-lg:w-[18rem]
                                ring-white cursor-pointer w-[24rem] h-9 rounded-md px-10'
                                placeholder='First Name'
                                />
                                <input type="text" 
                                className='mix text-white ring-1 bg-white max-lg:w-[18rem]
                                ring-white cursor-pointer w-[24rem] h-9 rounded-md mt-9 px-10'
                                placeholder='Mail'
                                />
                                {/* <textarea name="" id="" cols="10" rows="6"
                                className='mix text-gray-300 ring-1 max-lg:w-[18rem]
                                ring-white cursor-pointer rounded-md mt-9 px-10 w-[24rem] pt-1'
                                >Message</textarea> */}


                            </div>
                            <button type="submit" 
                            className='register self-center place-content-center mt-8 ml-24'>
                                Submit
                            </button>
                            
                        </form>
                    </div>
                <div className='absolute bottom-10 left-[-0.5rem]'><Image src={pinkStar} alt='star' className='text-red-pink'/></div>    
                </div>
            </div>

        </div>
      
    </main>
  )
}

export default Page
