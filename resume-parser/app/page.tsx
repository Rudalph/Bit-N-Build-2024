"use client";
import React, { useState } from "react";

export default function Home() {

  const [file, setFile] = useState<File >();


  const handleUploadClick = async(e: React.FormEvent<HTMLFormElement>) => {
        
    e.preventDefault()

    if(!file) return  //Return if theres no file
    
    try {
      const data = new FormData()
      data.set('file',file)
      console.log(typeof(data))
      console.log(data)
      const result = await fetch('/api/textextract/',{
        method: "POST",
        body: data
      })
      const json = await result.json()
      console.log('result: ', json)
    } catch (err) {
      console.log('err:', err)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Call both functions here
    await handleUploadClick(e);
  };

  return (
    <>
      <div className="flex justify-center my-10">

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row" >
          <input type="file" name="file"   onChange={(e) => setFile(e.target.files?.[0])} className={`file:cursor-pointer my-2  text-xs sm:text-sm file:text-sm file:py-1 sm:file:py-3 file:px-4 file:rounded-full file:text-white file:shadow-none   file:bg-[#007C7C] file:hover:bg-[#007c87] file:border-none`}/>
                  
          <input type="submit" value='Submit' className={`doc-upload-button cursor-pointer bg-[#EDFFFF] border border-[#007C7C] text-[#007C7C] font-semibold my-2 py-1 sm:py-3 px-8 text-sm rounded-full`}/>
                  
        </form>
      </div>
      <div className="">

      </div>

    </>
  );
}
