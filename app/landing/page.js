'use client';
import Footer from '@/components/Landingpage/Footer'
import Button from '@/components/Landingpage/Button'
import React, { useState } from 'react';
import {motion} from 'framer-motion'
import '../../components/Landingpage/styles.css';

function LandingPage() {
  const [buttonAnimation, showButtonAnimation] = useState(false);
  return (
    
      <div className="w-screen h-screen overflow-hidden">
        <div className="flex flex-row px-12 py-3">
          <div className="w-4/5">
            <motion.div 
              className="flex flex-col" initial={{ opacity: 0 }} 
              animate={{ opacity: 1, y:-15 }} transition={{ duration: 1 }} 
              onAnimationComplete={() => showButtonAnimation(true)}
            >
        
              <h1 className="text-2xl font-extrabold text-[#1E2B3A] font-inter mb-6">EMAIL.AI</h1>
              <p className="text-[16vw] md:text-[110px] font-extrabold text-[#1E2B3A] leading-[0.9] tracking-[-2px] z-[100] font-inter">
                  Craft Professional 
                  <br/>
                  Emails <span className="text-[#407BBF] font-inter">Effortlessly.</span>
              </p>
            {/* Paragraph tag */}
            <div className="flex flex-row w-2/5 justify-between items-center mt-6">
              <div className='flex flex-col justify-start'>
                <h1 className='text-[#1a2b3b] font-semibold text-[1em]'>Open source solution</h1>
                <p className='text-[#1a2b3b] leading-[20px] text-[13px]'>Make your platform affordable for all <br/> business sizes</p>
              </div>
              <div className='flex flex-col justify-start'>
                <h1 className='text-[#1a2b3b] font-semibold text-[1em]'>Custom drop points</h1>
                <p className='text-[#1a2b3b] leading-[20px] text-[13px]'>Experience hassle free route with <br/>  pinpoint accuracy</p>
              </div>

            </div>
            </motion.div>
            {buttonAnimation && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: -15 }} transition={{ duration: 0.4 }}>
              <Button />
            </motion.div>
            )}
          </div>


          {/* Animation */}
          <div
            className="fixed top-0 right-0 w-[80%] md:w-1/2 h-screen bg-[#1F2B3A]/20 gradient-div"
            style={{
              clipPath:
                "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
            }}
        />     
        </div>
        <Footer />
      
      </div>
    
  )
}

export default LandingPage