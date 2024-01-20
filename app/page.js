'use client';
import React from "react";
import { ContentInputField } from "@/components/ContentInputField/ContentInputField";
import { Navbar } from "@/components/Navbar/Navbar";
import { SignIn } from "@/components/SignIn/SignIn";

import useStore from "./store";

export default function Home() {
  const show = useStore((state) => state.show)

  return (
    <main className="flex flex-col w-screen h-screen bg-white">
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

        </div>
    </main>
  );
}


