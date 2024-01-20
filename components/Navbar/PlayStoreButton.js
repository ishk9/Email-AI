import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export function PlayStoreButton(){
    return (
        <>
            <button className="flex flex-row items-center justify-center">
                <IoLogoGooglePlaystore />
                <div className="flex flex-col ml-1">
                    <h1 className="text-xs">Download on the</h1>
                    <h1 className="text-base">Play Store</h1>
                </div>
            </button>
        </>
    );
}