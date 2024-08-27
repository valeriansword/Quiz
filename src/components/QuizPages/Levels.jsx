import React, { useState } from 'react'
import dbms from "../../assets/software.png";
import { RiCoinsLine } from "react-icons/ri";

import { FaRegClock } from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";
import progress from "../../assets/emptyProgress.png";
import fill from "../../assets/progress.png";
import { Link, useParams } from 'react-router-dom';
import { levels } from './DomainData';
import { domains } from './DomainData';
import { topics } from './DomainData';
import Question from './Question';
function Topic() {
  const {levelId} =useParams();
  const {domainId} =useParams();

  const particularDomain=domains.filter((user)=>user.id==domainId);
  const particularLevel=levels.filter((level)=>level.id==levelId);
  // const particularDomain=[{
  //   id:1,
  //   name:"Level-1",
  //   desc:"Test your SQL skills with our comprehensive quiz challenge, covering query optimization, database design, and advanced SQL features. ",
  //   overview:"Complete each level of our quiz challenges to earn 100 coins per level, with 10 Topic in each domain and each level covering 10 to 20 topics. Each topic grants you 10 coins. Accumulate coins as you progress, which can be converted into money. This money can be used to unlock exclusive discounts on internships or enroll in specialized courses. The more Topic you complete, the more rewards you earn, enhancing your learning journey and providing valuable opportunities for professional growth.",
  //   img:dbms,
  // }]
const [doQuiz,setDoQuiz]=useState(false);

  return (
    <div className='bg-Darkblue w-full h-full p-4 font-times'>
      {/* about */}
      {particularDomain.map((domain)=>(

        <div key={domain.id} className='w-full flex justify-center items-center md:space-x-[60px] text-white md:pl-[150px] '>
          <img src={domain.img} className='bg-white rounded-full w-[200px]  h-[200px] object-scale-down max-sm:mt-[-20px] max-sm:mr-[10px] max-sm:w-[150px] max-sm:h-[150px]'/>
          <div className='flex flex-col justify-center w-full'>
              <h1 className='text-Yellow text-3xl font-bold max-sm:text-2xl'>{particularLevel[0].name}</h1>
              <p className='text-md font-normal w-[50%] text-justify mt-[10px] max-sm:text-sm max-sm:w-full'>{domain.desc}</p>
              <div className='flex text-Yellow mt-[20px] items-center md:space-x-4 max-sm:flex-col max-sm:ml-[-20px] max-sm:items-start'>
                    <span className='flex items-center md:space-x-[2px] '>
                        <FaRegClock />
                        <p>Total Duration:20mins</p>
                    </span>   
                    <span className='flex items-center'>
                        <GoTriangleRight />
                        <p>Total Attempt:3</p>
                    </span>
             </div>
          </div>
          
        
        </div>
      ))}
      {/* overview */}
      <div className='w-full md:px-[50px] mt-[40px]'>
        <h1 className='text-Yellow text-2xl text-bold'>Overview</h1>
        <p className='text-white text-lg text-normal text-justify'>Complete each level of our quiz challenges to earn 100 coins per level, with 10 Topic in each domain and each level covering 10 to 20 topics. Each topic grants you 10 coins. Accumulate coins as you progress, which can be converted into money. This money can be used to unlock exclusive discounts on internships or enroll in specialized courses. The more Topic you complete, the more rewards you earn, enhancing your learning journey and providing valuable opportunities for professional growth.</p>

      </div>
      {/* tasks */}
      <div className='mt-[40px] md:px-[50px] w-full'>
        <span className='text-Yellow flex space-x-4'>
            <RiCoinsLine size="30"/>
            
              <p className='text-lg font-bold'>Coins Earned:100</p>
            
        </span>
        {/* Topic */}
        {topics.map((topic)=>(
           <Link to={`/SkillCentra/Quiz/levels/mcqs/${levelId}/${domainId}`}>
          <div className='bg-Yellow rounded-md w-full text-Darkblue flex justify-between max-sm:flex-col max-sm:space-y-2 max-sm:pl-[10px] md:items-center md:px-[30px] mt-[30px] py-[20px]' onClick={()=>setDoQuiz(true)}>
             <h1 className='text-lg font-bold'>{topic.name}</h1>
             <span className='flex space-x-4'>
               <p className='text-md font-normal'>Intermediate</p>
               <span className='flex items-center text-md space-x-[1px] '><FaRegClock /><p>20mins</p></span>
               <span className='flex items-center text-md space-x-[1px]'><GoTriangleRight /><p>Attempt 1/3</p></span>
             </span>
             <div className='flex space-x-2 items-center'>
         <div className='bg-white h-2 w-[150px] max-sm:w-[80%] rounded-full'>
              <div className={`${topic.progress==(100) ? " w-[100%] ": topic.progressStyle }bg-Darkblue  h-full rounded-full`}></div>
         </div>
         <p>{topic.progress}%</p>
         </div>
           </div>
           
           </Link>

        ))}
       
       {/* <Question isOpen={doQuiz} onClose={()=>setDoQuiz(false)} levelId={levelId} domainId={domainId}/> */}
      </div>

      
      
      
    </div>
  )
}

export default Topic;
