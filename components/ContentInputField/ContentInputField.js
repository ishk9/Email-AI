import React from "react";
import { AiOutlineEnter } from "react-icons/ai";


export function ContentInputField(){
    return (
        <>
            <div className="flex flex-row justify-center items-center w-2/4">
                <input type="text" name="emailcontent" 
                    className="text-white bg-black w-3/4 p-2 rounded-xl rounded-r-none" 
                    placeholder="Write a mail to the principal..."
                />
                <button 
                    className="bg-black h-10 w-8 flex 
                    justify-center items-center rounded-r-xl
                    hover:bg-gray-800"
                >
                    <AiOutlineEnter color="white" size={20}/>
                </button>
            </div>
        </>
    );
}