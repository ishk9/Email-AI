"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import axios from 'axios';
import { motion } from "framer-motion"
import { FaLongArrowAltRight } from "react-icons/fa";


export default function HomePage() {
  const [content, setContent] = useState('');
  const [num, setNum] = useState(100);
  const [generated, setGenerated] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const [subject, setSubject] = useState('');
  const [header, setHeader] = useState('');
  const [body, setBody] = useState('');
  const [closing, setClosing] = useState('');

  useEffect(() => {
    // Fetch updated num value every minute
    const interval = setInterval(() => {
      axios.get('http://localhost:8000/getnum')
        .then((res) => {
          const count = res.data.count;
          console.log(count);
          setNum(count);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 60000); // 60000 milliseconds = 1 minute

    // Cleanup interval to avoid memory leaks
    return () => clearInterval(interval);
  }, []); // Run only once on component mount


  function splitData(apiResponse){
      // Split the response into sections based on the provided delimiters
      const [splitSubject, restHeader] = apiResponse.split('Header:');
      const [splitHeader, restBody] = restHeader.split('Body:');
      const [splitBody, restClosing] = restBody.split('Closing:');
      const [splitClosing, rest] = restClosing.split('Done');
  
      // Trim each section to remove leading and trailing whitespace
      const subject = splitSubject.trim();
      const header = splitHeader.trim();
      const body = splitBody.trim();
      const closing = splitClosing.trim();
  
      // Now you can handle each section as needed, e.g., set them to state variables
      setSubject(subject);
      setHeader(header);
      setBody(body);
      setClosing(closing);  
  }

  async function sendData(){
      console.log(content);
      axios.post('http://localhost:8000/sendingcontent', {
          content
      }).then((res) => {
          console.log(res);
          splitData(res.data.message);
          const success = res.data.success;
          console.log(success);
          if(success) {
            setIsDisabled(false);
          }
      }).catch((err) => {
          console.log(err);
      }); 
  }
  return (
    <main className="flex flex-row w-screen h-screen bg-white overflow-hidden justify-center items-center">
      <div className={`flex flex-col ${generated ? 'w-1/2': 'w-full'} h-screen bg-[rgb(231,194,88)] overflow-hidden`}>
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
                  <textarea
                    value={content}
                    placeholder="Write a mail to the principal..."
                    onChange={(e) => setContent(e.target.value)}
                    rows={4}
                    className="w-full text-white p-2 rounded-md bg-black border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
                  />
                </div>
              </div>
            </div>
              
          <motion.div 
            animate={{x:0, y:-60,}}
            className='flex justify-center items-center'>
            <button 
              className={`h-10 w-2/5 bg-black p-2 rounded-lg flex justify-center items-center hover:bg-[#1E2B3A] ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
              {...isDisabled ? 'disabled' : 'enabled'}
              onClick={() => {
                setIsDisabled(true);
                sendData();
                setGenerated(true);
              }}
            >
              <h1 className="text-white text-sm">Generate</h1>
              <FaLongArrowAltRight className="ml-2" color="white" />
            </button>
          </motion.div>
        </div>

      </div>
      
      {/* OUTPUT */}
      <div className={`flex flex-col items-start ${generated ? 'w-1/2' : 'w-0'} h-screen overflow-hidden bg-white justify-evenly ${generated ? 'p-4' : 'p-0'}`}>
          <p className="p-4 border-2 w-full rounded-lg text-[12px] font-[500]">
            {subject}
          </p>
          <p className="p-4 border-2 w-full rounded-lg text-[12px] font-[500]">
            {header}
          </p>
          <p className="p-4 border-2 w-full rounded-lg text-[12px] font-[500]">
            {body}
          </p>
          <p className="p-4 border-2 w-full rounded-lg text-[12px] font-[500]">
            {closing}
          </p>
          
      </div>
    </main>
  );
}




