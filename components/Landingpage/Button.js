import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

function Button() {
    return (
        <Link href="/home" className="h-10 w-1/6 p-4 bg-black flex justify-center items-center rounded-3xl flex-row mt-5 hover:bg-[#1E2B3A]">
            <p className="text-[#F2F3F5] text-sm mr-2 font-semibold">Get started</p>
            <FaArrowRight className='text-[#F2F3F5]' size={18} />
        </Link>
    )
}

export default Button
