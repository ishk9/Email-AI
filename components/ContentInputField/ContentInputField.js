import React, { useState } from "react";
import { AiOutlineEnter } from "react-icons/ai";
import useStore from "@/app/store";
import axios from 'axios';

export function ContentInputField(){
    const [content, setContent] = useState('');

    // const setShow = useStore((state) => state.setShow)
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
        <>
            <div className="flex flex-row justify-center items-center w-2/4">
                <input type="text" name="emailcontent" 
                    className="text-white bg-black w-3/4 p-2 rounded-xl rounded-r-none" 
                    placeholder="Write a mail to the principal..."
                    onChange={(e) => setContent(e.target.value)}
                />
                <button 
                    className="bg-black h-10 w-8 flex 
                    justify-center items-center rounded-r-xl
                    hover:bg-gray-800"
                    onClick={() =>sendData()}
                >
                    <AiOutlineEnter color="white" size={20}/>
                </button>
            </div>
        </>
    );
}