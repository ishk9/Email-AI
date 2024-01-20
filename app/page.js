import { ContentInputField } from "@/components/ContentInputField/ContentInputField";
import { Navbar } from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-screen bg-white">
        <Navbar />

        <div className="h-screen w-screen flex flex-col items-center mt-20">
          <h1 className="text-black font-semibold text-4xl">
            AI Mails
          </h1>
          <p className="text-gray-500 mt-1">
            emails generated and counting!
          </p>

          <div className="flex justify-center items-center w-full mt-8">
            <ContentInputField />
          </div>

          
    

        </div>
    </main>
  );
}


