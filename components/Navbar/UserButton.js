import React from "react";
import { FaRegUser } from "react-icons/fa";

export function UserButton(){
    return (
        <>
            <button 
                className="flex justify-center items-center
                ml-2 h-10 w-10 border-2 bg-white rounded-lg
                shadow-md"
            >
                <FaRegUser color="black" size={16}/>
            </button>
        </>
    );
}