import React from 'react'
import "./QuizHome.css"
import quiz from  "../../assets/quizHome.png";
import { IoSearchOutline } from "react-icons/io5";
import { GiCoins } from "react-icons/gi";
import { RiCoinsLine } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";
import {Link} from "react-router-dom";
import { domains } from './DomainData';
function QuizHome() {
    
  return (
    <div className='h-full w-full font-times bg-Yellow'>
        {/* top */}
        <div className='top h-[90vh] max-sm:h-[50vh]'>
            <div className=' absolute left-[250px] top-[90px] max-sm:left-[90px] max-sm:top-[110px]'>
                <img src={quiz} className='h-[200px] w-[200px] rounded-full max-sm:h-[120px] max-sm:w-[120px]'/>
                <h1 className='text-6xl font-bold max-sm:text-4xl'>Online Quiz challenge</h1>
            </div>
        </div>


        <div className='p-6 px-[50px] w-full max-sm:px-[20px]'>
            {/* Overview */}
            <div className='w-full'>
                <h1 className='font-bold text-xl text-Darkblue'>Overview</h1>
                <p className='text-justify text-lg font-normal mt-[10px]'>Welcome to the Ultimate Quiz Challenge platform! Test and enhance your knowledge across various domains with our engaging quizzes. Whether you're a beginner or an expert, our quizzes offer a structured learning experience with multiple levels.
                    Earn points by completing quizzes and convert them into money for exclusive discounts on internships. The more quizzes you complete, the more points you earn, maximizing your savings on valuable real-world opportunities.
                    Explore quizzes in various domains and enjoy comprehensive coverage of essential topics.
                </p>
            </div>
            {/* benefits */}
            <div className='w-full bg-Darkblue rounded-[20px] p-4  mt-[30px] text-white mb-[30px]'>
                <h1 className='text-lg font-bold text-center text-Yellow'>Benefits of Quiz Challenge</h1>
                <ul className='px-[20px] ' style={{listStyleType:"disc"}}>
                    <li>Explore a diverse range of quizzes across multiple domains on our platform, ensuring thorough coverage of essential topics.</li>
                    <li>Complete quizzes to earn points that convert into money, which can be used for exclusive discounts on internships. The more quizzes you finish, the greater your potential savings on internships.</li>
                    <li>Each quiz is designed with 10 levels of increasing difficulty, ensuring a progressive and challenging learning experience in every domain.</li>
                </ul>


            </div>
            {/* serach bar */}
            <div className="w-[100%] flex justify-center  sticky mt-[20px] mb-[30px]  ">
            <form action="" className="w-[80%] max-sm:w-[90%]">
              <div className="relative flex items-center text-gray-400 text-lg font-semibold focus-within:text-gray-600">
                <IoSearchOutline
                  size="20"
                  className="absolute pointer-events-none ml-2 
                  bg-Yellow rounded-full h-[30px] w-[30px] pt-[2px] "
                />
                <input
                  text="text"
                  name="search"
                  placeholder="Choose your Domain"
                  autoComplete="off"
                  className="w-full h-[50px] px-3 pl-12 py-2 font-semibold 
                  text-Darkblue placeholder-gray-400 text-lg rounded-md
                   border-none ring-2 ring-gray-300 "
                />
              </div>
            </form>   
          </div>

          {/* domains */}
          <div className='w-full mt-[10px] rounded-md grid grid-cols-4 mx-[20px] max-sm:mx-[0px] max-sm:grid-cols-1'>
            {
                domains.map((domain)=>(
                    <div className=' w-[250px] max-sm:w-full bg-white mb-[20px] rounded-md p-2 transform transition-transform duration-300  ease-in-out hover:scale-105 ' key={domain.id}>
                        <div className='w-full flex justify-center'>
                            <img src={domain.img} className='w-fit h-[130px]' />
                        </div>
                        <h1 className='text-lg font-bold text-Darkblue text-center my-[5px]'>{domain.name}</h1>
                        <p className='text-justify text-gray-600'>{domain.desc}</p>
                        <div className='w-full flex justify-center mb-[10px]'>
                           <Link to={`/SkillCentra/Quiz/domains/${domain.id}`}> <button className='bg-Yellow px-2 ring-2 ring-Yellow rounded-md text-Darkblue'>Take Now</button></Link>
                        </div>
                    </div>

                ))
            }

          </div>

          {/* daily quiz context */}
          <div className='w-full flex justify-center'>
          <div className='w-[90%] max-sm:w-[100%] max-sm:rounded-md  bg-Darkblue rounded-[20px] p-4 mt-[30px] text-white'>
            <h1 className='text-center text-2xl font-bold text-Yellow mb-[20px] '>Daily Quiz contest</h1>
            <div className='flex md:ml-[30px] max-sm:flex-col-reverse max-sm:ml-[10px]'>
                <div className='bg-white w-[30%] max-sm:w-[100%] rounded-md p-2 text-Darkblue'>
                    <span className='text-Yellow font-bold flex justify-center w-full'>
                        <GiCoins size="200" />
                    </span>
                    <p className='text-justify text-lg'>
                    Don't miss out on this exciting opportunity to test your knowledge, compete for top positions, and enhance your skills every day!
                    </p>
                    <div className='w-full flex justify-center mb-[10px]
                    '>
                        <Link to={`/SkillCentra/Quiz/dailyContest`}><button className='bg-Yellow px-2 ring-2 ring-Yellow rounded-md text-Darkblue text-lg font-bold'>Take Now</button></Link>
                    </div>

                </div>

                <div className='w-[70%] md:ml-[30px] max-sm:w-[100%] '>
                    <ul style={{listStyleType:"disc"}}>
                        <li className='text-justify'>
                            Join our Daily Quiz Contest for a chance to tackle a diverse set of questions from all domains! Each day, you'll face a mix of challenges across software, hardware, general knowledge, technology, and more. 
                            Participate to earn Super points, which can be accumulated and 
                            converted into valuable rewards, including exclusive discounts and special offers.
                            Quizzes can be used as a brief assessment in education and similar fields to measure growth in knowledge, abilities, and skills, or simply as a hobby.
                        </li>
                    </ul>
                    <div className='mt-[40px] ml-[-20px] w-full flex justify-center max-sm:mb-[40px] '>
                        <div className='space-y-6'>
                        <span className='flex space-x-2 items-center text-Yellow'>
                            <RiCoinsLine size="30"/>
                            <p className='text-lg font-bold'>Earn Points Upto:1000</p> 
                        </span>
                        <span className='flex space-x-2 items-center text-Yellow'>
                            <FaRegClock size="25"/>
                            <p className='text-lg font-bold'>Total Duration:30 Mins</p> 
                        </span >
                        <span className='flex space-x-2 items-center text-Yellow'>
                            <GoTriangleRight size="30" />
                            <p className='text-lg font-bold'>Total Attempt:1</p> 
                        </span>
                        </div>

                    </div>
                </div>
            </div>


            </div>
          </div>









        </div>

    </div>
  )
}

export default QuizHome
