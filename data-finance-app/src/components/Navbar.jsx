import { useState } from 'react'
import {CgMenuGridO} from 'react-icons/cg'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#ff5349]">REACT.</h1>
        <ul className="hidden md:flex">
            <li className="p-4 hover:text-[#ff5349] hover:cursor-pointer">Home</li>
            <li className="p-4 hover:text-[#ff5349] hover:cursor-pointer">Company</li>
            <li className="p-4 hover:text-[#ff5349] hover:cursor-pointer">Resources</li>
            <li className="p-4 hover:text-[#ff5349] hover:cursor-pointer">About</li>
            <li className="p-4 hover:text-[#ff5349] hover:cursor-pointer">Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={30} /> : <CgMenuGridO size={30}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className="w-full text-3xl font-bold text-[#ff5349] m-4">REACT.</h1>
            <ul className='uppercase'>
                <li className="p-4 border-b border-gray-600 hover:text-[#ff5349] hover:cursor-pointer">Home</li>
                <li className="p-4 border-b border-gray-600 hover:text-[#ff5349] hover:cursor-pointer">Company</li>
                <li className="p-4 border-b border-gray-600 hover:text-[#ff5349] hover:cursor-pointer">Resources</li>
                <li className="p-4 border-b border-gray-600 hover:text-[#ff5349] hover:cursor-pointer">About</li>
                <li className="p-4 hover:text-[#ff5349] hover:cursor-pointer">Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar