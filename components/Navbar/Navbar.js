import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { PlayStoreButton } from "./PlayStoreButton";


export function Navbar(){
    return(
        <>
            <navbar className="flex flex-row justify-around items-center h-16 p-4 w-full bg-black">
                <div className="flex justify-center items-center">
                    <HiOutlineMail />
                    <h1 className="ml-1">Email.Ai</h1>
                </div>

                <div>
                    <PlayStoreButton />
                </div>
            </navbar>
        </>
    );
}
