import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import "./Attempt.css";
import { Link } from "react-router-dom";
function Attempt({ isOpen, onClose,levelId,domainId }) {
  
    
  return (
    <>

      {isOpen ? (
        <div className="overlay">
        <div className="overLayAttempt-background" >
        <div className="overLayAttempt-container">
        <div className=" p-6  rounded-md text-white">
        <div className="flex justify-between text-Yellow mb-[20px]"> 

            <h1 className="text-lg font-bold ">Next Attempt</h1>    
            <span onClick={onClose } className="cursor-pointer">
              <IoClose size="25" />
            </span>

        </div>
            <div className="w-full">
                <span>
                    <p className="text-center text-lg font-bold">You have 2</p>
                    <p className="text-center text-lg font-bold">Attempts Left</p>
                </span>
                <span>
                    <p className="text-center text-lg font-bold">Click below to start Your </p>
                    <p className="text-center text-lg font-bold">Next Attempt </p>
                </span>
                <Link to={`/SkillCentra/Quiz/levels/${levelId}/${domainId}`}> <button className="mt-[20px] w-full ring-2 ring-Yellow bg-Yellow text-Darkblue rounded-md text-lg font-bold ">Play Now</button></Link>
            </div>
       

        </div>
        </div>
        </div>
        </div>
      ) : null}
    </>
  );
}

export default Attempt;