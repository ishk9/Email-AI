import React from "react";
import { FaRegUser } from "react-icons/fa";
import * as Popover from '@radix-ui/react-popover';
import { BiLockAlt } from "react-icons/bi";
import { RiFilePaper2Line } from "react-icons/ri";
import { GoSignIn } from "react-icons/go";


const UserButton = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button 
          className="flex justify-center items-center
          ml-2 h-10 w-10 border-2 bg-white rounded-lg"
      >
        <FaRegUser color="black" size={16}/>
      </button>
    </Popover.Trigger>

    <Popover.Portal>
      <Popover.Content
        className="p-1 h-35 w-30 bg-white border-2 rounded-lg"
        sideOffset={5}
      >
        <div className="flex flex-col">
          <fieldset className="flex flex-col items-center">

            <button className="flex mb-2 justify-start w-full items-center hover:bg-slate-100 p-1 rounded-md">
            <RiFilePaper2Line color="black"/>
              <p className="text-black text-sm ml-2">Terms of Use</p>
            </button>

            <button className="flex mb-2 justify-start w-full items-center hover:bg-slate-100 p-1 rounded-md">
              <BiLockAlt color="black"/>
              <p className="text-black text-sm ml-2">Privacy Policy</p>
            </button>
            <hr className="w-full bg-black"/>
            <button className="flex mt-2 justify-start w-full items-center hover:bg-slate-100 p-1 rounded-md">
              <GoSignIn color="black"/>
              <p className="text-black text-sm ml-2">Sign in</p>
            </button>
            
          </fieldset>
        </div>
        <Popover.Close
          className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default"
          aria-label="Close"
        >
        </Popover.Close>
        <Popover.Arrow className="fill-white" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default UserButton;