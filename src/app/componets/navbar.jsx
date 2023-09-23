'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop,
  faBars,
  faAmbulance,
  faBarsStaggered
} from "@fortawesome/free-solid-svg-icons";
// import {fsFace}


function Navbar() {
  return (
    <div>
        <nav className="flex flex-row  text-white pt-5 place-content-between pb-0">
            <div className="h-24 pl-[5rem] pt-5">
                <div className="font-bold text-2xl">
                    <span>get</span>
                    <span className="text-[#d434fe]">link</span>    
                </div>      
            </div>
            <div className="px-3 max-lg:hidden pt-5">
                <div className="flex space-x-6 pr-[7rem]">
                    <ul className="list-none flex pt-2 space-x-10 cursor-pointer">
                        <li>Timeline</li>
                        <li>Overview</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                        
                    </ul>
                    <button className="bg-[#d434fe] boarder rounded-md py-3 px-8 cursor-pointer">
                        Register
                    </button>
                </div>

                {/* <button className="bg-[#d434fe] boarder rounded-md">Register</button> */}
            </div>
            <div className=" lg:hidden px-5 pr-8 pt-5">
                <FontAwesomeIcon icon={faBarsStaggered} className="text-lg text-white cursor-pointer"/>
            </div>
            {/* <hr className="p-0 m-0"/> */}
        </nav>
    </div>
  )
}

export default Navbar
