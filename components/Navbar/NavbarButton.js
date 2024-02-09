import React from 'react'
import { FaGithub } from "react-icons/fa";
function NavbarButton() {
  return (
    <a className="flex justify-center items-center bg-black px-4 py-2 rounded-full hover:bg-[#1E2B3A]" href='https://github.com/ishaan9006/Email-AI' target='_blank'>
        <FaGithub color='white' size={20}/>
        <p className="ml-2 text-white text-sm">Star on Github</p>
    </a>
  )
}

export default NavbarButton
