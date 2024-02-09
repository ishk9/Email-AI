"use client";
import React, { useEffect } from "react";
import HomePage from "./home/page";
import LandingPage from "./landing/page";

export default function Home() {
  return (
    <main 
      className="h-screen w-screen flex min-h-screen flex-col 
      items-center justify-between p-24 bg-[#F2F3F5] overflow-hidden"
    >
      {/* <HomePage /> */}
      <LandingPage />
    </main>
  );
}




