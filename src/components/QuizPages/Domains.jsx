import React, { useEffect, useState } from 'react'
import dbms from "../../assets/software.png";
import { RiCoinsLine } from "react-icons/ri";

import { FaRegClock } from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";
import progress from "../../assets/emptyProgress.png";
import fill from "../../assets/progress.png";
import { Link, useParams } from 'react-router-dom';
import { domains } from './DomainData';
import { levels } from './DomainData';
function Domains() {
  const {domainId}=useParams();
  console.log(domainId);
  // const [oneDomain,setOneDomain]=useState()
  // useEffect(()=>{
  //   setOneDomain(domains.filter((do)=>do.id==domainId))
  // },[])
  const particularDomain=domains.filter((user)=>user.id==domainId);
  console.log(particularDomain);
  
  
  return (
    <div className='bg-Darkblue w-full h-full p-4 font-times'>
      {/* about */}
      {particularDomain.map((domain)=>(

        <div key={domain.id} className='w-full flex justify-center items-center md:space-x-[60px] text-white md:pl-[150px]'>
          <img src={domain.img} className='bg-white rounded-full w-[200px]  h-[200px] object-scale-down max-sm:w-[150px] max-sm:h-[150px]'/>
          <div className='flex flex-col justify-center w-full'>
              <h1 className='text-Yellow text-3xl font-bold max-sm:text-2xl'>{domain.name}</h1>
              <p className='text-lg font-normal w-[50%] text-justify mt-[10px] max-sm:w-full max-sm:text-sm max-sm:ml-[5px]'>{domain.desc}</p>
          </div>
        
        </div>
      ))}
      {/* overview */}
      <div className='w-full md:px-[50px] mt-[40px]'>
        <h1 className='text-Yellow text-2xl text-bold'>Overview</h1>
        <p className='text-white text-lg text-normal text-justify'>Complete each level of our quiz challenges to earn 100 coins per level, with 10 levels in each domain and each level covering 10 to 20 topics. Each topic grants you 10 coins. Accumulate coins as you progress, which can be converted into money. This money can be used to unlock exclusive discounts on internships or enroll in specialized courses. The more levels you complete, the more rewards you earn, enhancing your learning journey and providing valuable opportunities for professional growth.</p>

      </div>
      {/* tasks */}
      <div className='mt-[40px] md:px-[50px] w-full'>
        <span className='text-Yellow flex space-x-4'>
            <RiCoinsLine size="30"/>
            
              <p className='text-lg font-bold'>Coins Earned:100</p>
            
        </span>
        {/* levels */}

       {levels.map((level)=>(
         <Link to={`/SkillCentra/Quiz/levels/${level.id}/${domainId}`} className='w-full' key={level.id}>
        <div  className='bg-Yellow rounded-md w-full text-Darkblue flex max-sm:flex-col max-sm:space-y-2 max-sm:pl-[10px] justify-between md:items-center md:px-[30px] mt-[30px] py-[20px]'>
        <h1 className='text-lg font-bold'>{level.name}</h1>
        <span className='flex space-x-4 max-sm:items-center'>
          <p className='text-md font-normal'>Intermediate</p>
          <span className='flex items-center text-md space-x-[1px] '><FaRegClock /><p>20mins</p></span>
          <span className='flex items-center text-md space-x-[1px]'><GoTriangleRight /><p>Attempt 1/3</p></span>
        </span>
         <div className='flex space-x-2 items-center'>
         <div className='bg-white h-2 w-[150px] max-sm:w-[80%] rounded-full'>
              <div className={`${level.progress==(100) ? " w-[100%] ": level.progressStyle }bg-Darkblue  h-full rounded-full`}></div>
         </div>
         <p>{level.progress}%</p>
         </div>
      </div>
     
      </Link>
       ))}
      

       
       
      </div>

      
      
      
    </div>
  )
}

export default Domains
