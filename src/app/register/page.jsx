import React from 'react'
import Navbar from '../componets/navbar'
import Image from 'next/image'
import star1 from "@/app/images/star-1.png"
import graphic3D from "@/app/images/3d-graphic.png"
import movement1 from "@/app/images/movement1.png"
import movement2 from "@/app/images/movement2.png"


function Pages() {
  return (
    <main className='min-h-screen bg-dark-purple'>
      <Navbar/>
      <div className='pt-10 flex space-x-4 max-md:space-x-0 
      h-fit max-lg:flex-col max-lg:align-middle max-lg:place-content-center max-lg:content-center'>
        <div>
          <div className='pl-[7rem] max-lg:pl-0'>
            <div className='max-lg:hidden'><Image src={star1} alt='star'/></div>
            
            <div className='h-[18rem] w-[32rem] object-contain max-lg:h-[25rem] max-lg:w-[30rem]'>
              <Image src={graphic3D} alt='graphic pt-0 pl-[9rem] max-lg:ml-[25rem]'/></div>
            

          </div>           
        </div>
        <div className='mix relative w-[50vw] h-fit pb-12
        text-white max-lg:mt-[15rem] max-lg:w-full border-none max-lg:bg-dark-purple'>
          <div className='flex flex-col content-center place-content-center align-middle self-center'>
            <div className='absolute top-3 left-[20rem] h-7 w-4 max-lg:hidden'><Image src={star1} alt='star'/></div>
            <h3 className='text-red-pink p-10 text-2xl pt-[3rem] pl-12 max-lg:hidden'>Register</h3>
            <div className='pt-2 pl-12 text-sm max-lg:pl-[8rem] flex'>Be part of this movement!
              <div className='relative'> 
                <span className='text-[gray] text-lg pl-2'> 
                  .....................
                <div className='absolute left-[3rem] bottom-4 h-4 w-5'><Image src={movement1} className='object-contain'/></div>
                <div className='absolute left-[4rem] bottom-4 h-4 w-5'><Image src={movement2} className='object-contain'/></div>
                </span>
              </div>

            </div>
          </div>
          <div className='pt-4 pl-12 text-xl font-bold'>CREATE YOUR ACCOUNT</div>
          <form action="" className='pt-6 pr-12 pl-12'>
            <div className='flex flex-col space-x-2 gap-x-2 gap-y-6 max-lg:w-full'>

              <div className='flex space-x-2 space-y-6 px-8 max-lg:flex-col'>

                <div className='flex flex-col space-y-2 text-sm pt-4'>
                  <label>Team's Name</label>
                  <input type="text" 
                  className='h-10 rounded-md w-[15rem] pr-8 mix ring-white ring-1 max-lg:w-[70vw]'/>
                </div>
                <div className='flex flex-col space-y-1 text-sm pl-5 max-lg:pl-0'>
                  <label htmlFor="">Phone</label>
                  <input type="text" 
                  className='h-10 rounded-md w-[15rem] pr-8 mix ring-white ring-1 max-lg:w-[70vw]'/>
                </div>
              </div>

              <div className='flex space-x-2 space-y-6 px-8 max-lg:flex-col'>
                <div className='flex flex-col space-y-2 text-sm pt-4'>
                  <label htmlFor=''>Email</label>
                  <input type="text" 
                  className='h-10 rounded-md w-[15rem] pr-8 mix ring-white ring-1 max-lg:w-[70vw]'/>
                </div>
                <div className='flex flex-col space-y-1 text-sm pl-5 max-lg:pl-0'>
                  <label htmlFor="">Project Topic</label>
                  <input type="text" 
                  className='h-10 rounded-md w-[15rem] pr-8 mix ring-white ring-1 max-lg:pr-0 max-lg:w-[70vw]'/>
                </div>
              </div>

              <div className='flex space-x-2 space-y-6 px-8'>
                <div className='flex flex-col space-y-2 text-sm pt-4'>
                  <label htmlFor=''>Category</label>

                  <select name="" 
                  id=""
                  className='h-10 rounded-md w-[15rem] pr-8 mix ring-white ring-1 cursor-pointer max-lg:w-[50vw]'
                  >
                    <option value="frontend" className='cursor-pointer'>Frontend</option>
                    <option value="backend" className='cursor-pointer'>Backend</option>
                    <option value="devops" className='cursor-pointer'>DevOps</option>
                    <option value="ui/ux" className='cursor-pointer'>UI/UX</option>
                  </select>
                </div>
                <div className='flex flex-col space-y-1 text-sm pl-5 max-lg:pl-0'>
                  <label htmlFor="">Group Size</label>
                  <select name="" 
                  id=""
                  className='h-10 rounded-md w-[15rem] pr-8 mix ring-white ring-1 cursor-pointer max-lg:w-[20vw]'
                  >
                    <option value="5" className='cursor-pointer'>5</option>
                    <option value="10" className='cursor-pointer'>10</option>
                    <option value="15" className='cursor-pointer'>15</option>
                    <option value="20" className='cursor-pointer'>20</option>
                  </select>
                </div>
              </div>

            </div>
          </form>
          <p className='text-sm pl-20 pt-8 text-red-pink'>
            Please review your registration details before submiting
          </p>
          <form action="" className='pl-20 pt-8'>
            <div>
              <input type="checkbox" name="" 
              id="" value={true}
              className='mix text-black ring-1 ring-black cursor-pointer'

              />
              <span> I agreed with the events terms and conditions and private policy</span>
            </div>
          </form>
          <div className='pl-20 pt-6 max-lg:hidden'><button className='register px-[13rem]'>Register Now</button></div>
          <div className='pl-20 pt-6 lg:hidden'><button className='register px-[8rem]'>Submit</button></div>
          
        </div>
      </div>
      
    </main>
  )
}

export default Pages
