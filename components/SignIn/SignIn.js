import React from "react";

export function SignIn(){
    return (
        <>
            <div className="flex flex-col  items-center h-full w-screen  rounded-t-2xl mt-9">
                <div className="flex flex-col justify-start items-start">
                    <h1 className="text-black font-semibold text-lg">Welcome to AI mails</h1>
                    <p className="text-gray-600">Sign in for unlimited access, ability to save your mails,</p>
                    <p className="text-gray-600">and access them from any device.</p>
                </div>

                <div className="mt-4">
                    <button className="h-10 w-full border-2 rounded-lg hover:bg-slate-100">
                        <p className="text-black">Sign in</p>
                    </button>
                    <p className="text-gray-600 text-xs mt-2">By continuing you agree to our <span className="underline">Privacy Policy</span> and <span className="underline">Terms of Use</span></p>
                </div>
            </div>
        </>
    );
}
