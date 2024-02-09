"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import axios from 'axios';
import { motion } from "framer-motion"
import useStore from "../store";
import { FaLongArrowAltRight } from "react-icons/fa";


export default function HomePage() {
  const [content, setContent] = useState('');
  const [num, setNum] = useState(100);

    const setData = useStore((state) => state.setData)
    async function sendData(){
        console.log(content);
        axios.post('http://localhost:8000/sendingcontent', {
            content
        }).then((res) => {
            console.log(res);
            const messageFromResponse = res;
            setData(messageFromResponse.data.message);
        }).catch((err) => {
            console.log(err);
        }); 
    }
  return (
    <main className="flex flex-row w-screen h-screen bg-white overflow-hidden justify-center items-center">
      <div className="flex flex-col w-1/2 h-screen bg-[rgb(231,194,88)] overflow-hidden">
        <Navbar />

        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col justify-center items-center mt-20">
              <div className="flex justify-center items-center p-1 px-2 border-[1px] border-black rounded-full shadow-md hover:scale-105">
                <p className="text-black text-sm cursor-default">
                  <span className="font-semibold">{num}</span> emails generated so far!
                </p>
              </div>
              <h1 className="text-black font-semibold text-4xl cursor-default mt-10">
                Generate your next Email using AI
              </h1>



              <div className="flex justify-center items-center w-full mt-8">
                {/* Input field */}
                <div className="flex flex-row justify-center items-center w-2/4">
                  <input type="text" name="emailcontent" 
                      className="text-white bg-black w-3/4 p-2 rounded-xl rounded-r-none" 
                      placeholder="Write a mail to the principal..."
                      onChange={(e) => setContent(e.target.value)}
                  />
                </div>
              </div>
            </div>
              
          <motion.div 
            animate={{x:0, y:-60,}}
            className='flex justify-center items-center'>
            <button className="h-10 w-2/5 bg-black p-2 rounded-lg flex justify-center items-center hover:bg-[#1E2B3A]">
              <h1 className="text-white text-sm">Generate</h1>
              <FaLongArrowAltRight className="ml-2" color="white" />
            </button>
          </motion.div>
        </div>

      </div>
            
      <div className="flex flex-col items-center w-1/2 h-screen overflow-hidden bg-white">
          
          
      </div>
    </main>
  );
}




