"use client";
import React, { useEffect } from "react";
import { ContentInputField } from "@/components/ContentInputField/ContentInputField";
import Navbar from "@/components/Navbar/Navbar";
import { SignIn } from "@/components/SignIn/SignIn";
import { FiClipboard } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { AiOutlineRedo } from "react-icons/ai";
import {CopyToClipboard} from 'react-copy-to-clipboard';

import useStore from "./store";

export default function Home() {
  const show = useStore((state) => state.show)
  const data = useStore((state) => state.data)
  return (
    <main className="flex flex-col w-screen h-screen bg-white overflow-hidden">
        <Navbar />

        <div className="h-screen w-screen flex flex-col items-center mt-20">
          <h1 className="text-black font-semibold text-4xl">
            AI Mails
          </h1>
          <p className="text-black mt-1">
            emails generated and counting!
          </p>

          <div className="flex justify-center items-center w-full mt-8">
            <ContentInputField />
          </div>
          
          {show && (
            <div className="fixed bottom-0 h-1/2 w-full bg-white border-t border-gray-200">
              <SignIn />
            </div>
          )}

          <div className="flex w-screen flex-col justify-top items-center mt-10">
            <div className="flex flex-row w-3/4 mb-2 items-end justify-end">
              <CopyToClipboard 
                className="transition-transform transform hover:scale-125"
                text={data}
              >
                <FiClipboard color="black"/>
              </CopyToClipboard>
              {/* <button 
                className="transition-transform transform hover:scale-125"
                onClick={() =>  navigator.clipboard.writeText('Copy this text to clipboard')}
              >
                <FiClipboard color="black"/>
              </button> */}
              <button className="transition-transform transform hover:scale-125">
                <MdEdit color="black"/>
              </button>
              <button className="transition-transform transform hover:scale-125">
                <AiOutlineRedo color="black"/>
              </button>
            </div>
            <div 
              className="h-screen w-3/4 p-6 
              bg-white border border-gray-300 rounded-md shadow-md
              flex flex-col items-end"
              >

              <p className="text-black overflow-y-scroll h-1/2 w-3/4 p-6">
                {data}
              </p>
            </div>
          </div>
        </div>
    </main>
  );
}


