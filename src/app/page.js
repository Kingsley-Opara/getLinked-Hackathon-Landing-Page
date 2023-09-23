import Image from 'next/image'
import Navbar from './componets/navbar'
import Hero from './hero'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#43097C] p-0 m-0 font-Montserrat">
      <Navbar/>
      <hr className="p-0 m-0"/>
      <Hero/>
    </main>
  )
}
