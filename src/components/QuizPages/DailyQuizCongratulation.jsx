import React, { useState } from 'react'
import background from "../../assets/background.png";
import { MdOutlineReplay } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import Attempt from './Attempt';
import "./Submission.css"
import { Link, useParams } from 'react-router-dom';

function DailyQuizCongratulation() {
    const {levelId} =useParams();
    const {domainId} =useParams();
  
    const [nextAttempt,setNextAttempt]=useState(false);
  return (
    <div className='bg-Yellow md:p-6  max-sm:pt-[20px] font-times h-[110vh]'>
        <div className='backImg flex justify-center w-full text-white h-screen relative '>
            {/* <img src={background} className='w-[80%] relative rounded-[30px] h-[300px]'/> */}
            <div className='absolute text-center mt-[100px] max-sm:mt-[60px] space-y-4'>
                <h1 className='text-5xl font-bold  text-Yellow max-sm:text-2xl'>🎉 Congratulations!</h1>
                <p className='text-3xl font-bold max-sm:text-lg'>You’ve excelled in today’s Daily Quiz  Contest and earned the top spot! </p>
                <p className='text-2xl font-bold text-Yellow text-xl'>You’ve been awarded: 1000 Points</p>
            </div>

            
        </div>
            <div className='mt-[20px] mb-[20px] w-full flex flex-col items-center text-Darkblue'>
            <Link to={`/SkillCentra/Quiz/dailyContest/submission/${levelId}/${domainId}`}>
            <span className='flex flex-col items-center'>
                
                <button className='ring-2 ring-Darkblue bg-Darkblue text-Yellow text-lg font-bold rounded-md px-4'>View Scorecard</button>

            </span>
            </Link>
            <p className='mt-[20px] text-lg font-bold mb-[20px] max-sm:p-2 max-sm:text-justify'>You can attend more quiz to get more points with which you can unlock exclusive offer on Internship,and special offers</p>
            <Link to="/"><button className='ring-2 ring-Darkblue bg-Darkblue text-Yellow 
            text-lg font-bold rounded-md px-4'>Explore Now</button></Link>
            </div>
   
      
    </div>
  )
}

export default DailyQuizCongratulation
