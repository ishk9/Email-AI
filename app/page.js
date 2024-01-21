'use client';
import React from "react";
import { ContentInputField } from "@/components/ContentInputField/ContentInputField";
import { Navbar } from "@/components/Navbar/Navbar";
import { SignIn } from "@/components/SignIn/SignIn";
import { FiClipboard } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { AiOutlineRedo } from "react-icons/ai";


import useStore from "./store";

export default function Home() {
  const show = useStore((state) => state.show)

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

          <div className="flex  flex-col justify-top items-center mt-10">
            <div className="flex flex-row w-3/4 mb-2 items-end justify-end">
              <button className="transition-transform transform hover:scale-125">
                <FiClipboard color="black"/>
              </button>
              <button className="transition-transform transform hover:scale-125">
                <MdEdit color="black"/>
              </button>
              <button className="transition-transform transform hover:scale-125">
                <AiOutlineRedo color="black"/>
              </button>
            </div>
            <div 
              class="container h-1/2 w-3/4  p-6
              bg-white border border-gray-300 rounded-md shadow-md
              flex flex-col items-end"
              >

              <p class="text-black overflow-y-scroll h-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... (your content)
              </p>
            </div>
          </div>

        </div>
    </main>
  );
}


