import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { PlayStoreButton } from "./PlayStoreButton";
import { UserButton } from "./UserButton";


export function Navbar(){
    return(
        <>
            <navbar className="flex flex-row justify-around items-center h-16 p-4 w-full bg-white">
                <div className="flex justify-center items-center">
                    <HiOutlineMail color="black" size={20}/>
                    <h1 className="ml-1 text-black text-lg font-semibold">Email.Ai</h1>
                </div>

                <div className="flex justify-center items-center">
                    <PlayStoreButton />
                    <UserButton />
                </div>
            </navbar>
        </>
    );
}
