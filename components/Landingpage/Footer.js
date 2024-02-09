import React from 'react'
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#1E2B3A] flex flex-row justify-around h-14 items-center w-screen absolute bottom-0 z-50 px-10">
            <p className="text-[#F2F3F5] opacity-90">Powered by GPT-3.5</p>

            <a href='https://github.com/ishaan9006/Email-AI' target='_blank'>
                <FaGithub className="text-[#F2F3F5] opacity-90" size={20}/>
            </a>
            
        </footer>
    )
}

export default Footer
