import React, { useState } from 'react'
import background from "../../assets/background.png";
import { MdOutlineReplay } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import Attempt from './Attempt';
import "./Submission.css"
import { Link, useParams } from 'react-router-dom';

function DailyQuizSubmisssion() {
    const {levelId} =useParams();
    const {domainId} =useParams();
  
    const [nextAttempt,setNextAttempt]=useState(false);
  return (
    <div className='bg-Yellow md:p-6 max-sm:pt-[20px] font-times h-[110vh]'>
        <div className='backImg flex justify-center w-full text-white h-screen relative '>
            {/* <img src={background} className='w-[80%] relative rounded-[30px] h-[300px]'/> */}
            <div className='absolute text-center mt-[100px] max-sm:mt-[60px] space-y-4'>
                <h1 className='text-3xl font-bold  text-Yellow'>Daily Quiz Contest Results</h1>
                <p className='text-xl font-bold'>Congratulations! You scored 100 </p>
                <p className='text-xl font-bold'>Accuracy Rate:100%</p>
            </div>

            <div className='bg-white rounded-[30px] p-2 text-Darkblue w-[25%] max-sm:w-[95%] absolute bottom-[-60px]'>
                <div className='flex justify-between w-full '>
                    <span className='flex flex-col items-center w-[50%]'>
                        <h1 className='text-lg font-bold'>Completion</h1>
                        <p className='text-lg font-bold'>100%</p>
                    </span>
                    <span className='flex flex-col items-center w-[50%]'>
                        <h1 className='text-lg font-bold'>Total Questions</h1>
                        <p className='text-lg font-bold'>20</p>
                    </span>
                </div>
                <div className='flex justify-between  w-full'>
                    <span className='flex flex-col items-center w-[50%]'>
                        <h1 className='text-lg font-bold'>Correct</h1>
                        <p className='text-lg font-bold text-green-400'>20</p>
                    </span>
                    <span className='flex flex-col items-center w-[50%] '>
                        <h1 className='text-lg font-bold'>Wrong</h1>
                        <p className='text-lg font-bold text-red-400'>0</p>
                    </span>
                </div>
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
            <div className='mt-[90px] mb-[20px] w-full flex flex-col items-center text-Darkblue'>
            <Link to={`/SkillCentra/Quiz/dailyContest/leaderboard`}><span className='flex flex-col items-center'>
             <BsGraphUpArrow size="50"/>
                <p className='text-lg font-bold text-Darkblue'>Leaderboard</p></span>
            </Link>
            </div>
    {/* <Attempt isOpen={nextAttempt} onClose={()=>setNextAttempt(false)} levelId={levelId} domainId={domainId} /> */}
      
    </div>
  )
}

export default DailyQuizSubmisssion
