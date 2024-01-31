"use client";
import React, { useEffect } from "react";
import { ContentInputField } from "@/components/ContentInputField/ContentInputField";
import Navbar from "@/components/Navbar/Navbar";
import { SignIn } from "@/components/SignIn/SignIn";
import { FiClipboard } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { AiOutlineRedo } from "react-icons/ai";
import {CopyToClipboard} from 'react-copy-to-clipboard';
// import { useAuth0 } from "@auth0/auth0-react";
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion"

import useStore from "./store";

export default function Home() {
  const show = useStore((state) => state.show)
  const data = useStore((state) => state.data)
  // const { loginWithRedirect } = useAuth0();
  return (
    <main className="flex flex-row w-screen h-screen bg-white overflow-hidden justify-center items-center">
      <div className="flex flex-col w-1/2 h-screen bg-[rgb(231,194,88)] overflow-hidden">
        <Navbar />

        <div className="h-3/4 p-4 px-10 mt-6 flex flex-col">
          <Typewriter
            words={['Subject: Request for Letter of Recommendation']}
            loop={1}
            cursor
            typeSpeed={20}
            deleteSpeed={10}
            delaySpeed={1000}
          />
           
        </div>

        <motion.div 
          animate={{x:0, y:-60,}}
          className='flex justify-center items-center'>
          <button className="h-10 w-2/5 bg-black p-2 rounded-lg flex justify-center items-center">
            <h1 className="text-white text-sm">Try Premimum</h1>
          </button>
        </motion.div>


      </div>
        
      <div className="flex flex-col items-center w-1/2 h-screen overflow-hidden bg-white">
          <div className="h-screen w-screen flex flex-col items-center mt-20">
            <h1 className="text-black font-semibold text-4xl cursor-default">
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
                
                <button className="transition-transform transform hover:scale-125">
                  <MdEdit color="black"/>
                </button>
                <button 
                  className="transition-transform transform hover:scale-125"
                  onClick={() => loginWithRedirect()}
                >
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
      </div>
    </main>
  );
}




