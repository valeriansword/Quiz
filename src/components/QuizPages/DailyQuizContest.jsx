import React, { useState } from 'react'
import background from "../../assets/background.png";
import { MdOutlineReplay } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import Attempt from './Attempt';
import "./Submission.css"
import { Link, useParams } from 'react-router-dom';
import question from "../../assets/question.png";
function DailyQuizContest() {
    const {levelId} =useParams();
    const {domainId} =useParams();
  
    const [nextAttempt,setNextAttempt]=useState(false);
  return (
    <div className='bg-Yellow md:p-6 max-sm:pt-[20px] font-times h-screen'>
        <div className='backImg flex justify-center w-full text-white h-screen relative '>
            {/* <img src={background} className='w-[80%] relative rounded-[30px] h-[300px]'/> */}
            <div className='absolute text-center mt-[100px] max-sm:mt-[70px] space-y-4'>
                <h1 className='text-3xl font-bold  text-Yellow'>Daily Quiz Contest</h1>
                <span className='flex justify-center'><img src={question} className='h-[50px] w-[50px] '/></span>
                <p className='text-xl font-bold'>Contest Everyday, Earn Super Points, and win amazing rewards! </p>
                
            </div>

            <div className='bg-white rounded-[30px] p-6 text-Darkblue w-[30%] max-sm:w-[90%] absolute bottom-[-60px]'>
                <h1 className='text-lg font-bold text-center max-sm:font-normal'>1st Place: 1000 Super Points</h1>
                <h1 className='text-lg font-bold text-center max-sm:font-normal'>2nd Place: 750 Super Points</h1>
                <h1 className='text-lg font-bold text-center max-sm:font-normal'>3rd Place: 500 Super Points</h1>
            </div>

        </div>
        {/* <Link to={`/SkillCentra/Quiz/levels/:levelId/:domainId`}></Link> */}
            {/* down part */}
            {/* <div className='mt-[60px] flex justify-around'>
               <span className='flex flex-col items-center' onClick={()=>setNextAttempt(true)}>
                    <MdOutlineReplay size="50"/>
                    <p className='text-lg font-bold'>Play Again</p>
                </span>
                <Link to={`/SkillCentra/Quiz/levels/performance`}> <span className='flex flex-col items-center'>
                    <BsGraphUpArrow size="50"/>
                    <p className='text-lg font-bold'>Performance</p>
                </span></Link>
            </div> */}
            <div className='w-full mt-[70px] flex flex-col items-center space-y-2 max-sm:p-2'>
                <p className='text-lg font-bold text-Darkblue text-center'>Compete for top spots and win big! The top 3 participants of each day's Quiz will receive Super Points!</p>
                <Link to="/SkillCentra/Quiz/dailyContest/mcqs/1/6"><button className='ring-2 ring-Darkblue rounded-md text-lg font-bold bg-Darkblue px-4 text-Yellow'>Start Now</button></Link>
            </div>
    {/* <Attempt isOpen={nextAttempt} onClose={()=>setNextAttempt(false)} levelId={levelId} domainId={domainId} /> */}
      
    </div>
  )
}

export default DailyQuizContest
