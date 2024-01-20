import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export function PlayStoreButton(){
    return (
        <>
            <button 
                className="h-10 w-30 p-2 flex flex-row 
                items-center justify-center border-2 rounded-lg
                bg-black"
            >
                <IoLogoGooglePlaystore color="white"/>
                <div className="flex flex-col ml-1">
                    <h1 className="text-xs text-white">Download on</h1>
                    <h1 className="text-xs text-white font-semibold">Play Store</h1>
                </div>
            </button>
        </>
    );
}