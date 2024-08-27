import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import "./Question.css";
import { mcqs } from "./Quizquestions";
import { Link,useParams } from "react-router-dom";
function DailyQuizQuestion() {
    const {levelId} =useParams();
  const {domainId} =useParams();

    let [questionNo,setQuestionNo]=useState(1);
    const particularDomain=mcqs.filter((domain)=>domain.id==domainId);
    console.log(particularDomain[0].domain);
    const firstQuestion=particularDomain[0].domain.filter((question)=>question.id==questionNo);
    console.log(firstQuestion)
    
    const [correctAnswer,setCorrectAnswer]=useState(0);
    let [answerId,setAnswerId]=useState(0);
    const [isCorrect,setIsCorrect]=useState(null);
    // const [isQuestionOver,setQuestionOver]=useState(false);
    
  
    
    const handleAnswer=(id)=>{
        setAnswerId(id);

    }
    //update the minimum question number once you increase the total question 
    //so that total score can we shown
    useEffect(()=>{
        if(correctAnswer!=0 && answerId!=0){
        if(answerId==correctAnswer){
            setIsCorrect(true);
        }else{
            setIsCorrect(false);
            
        }}

    },[answerId])
    
    
    // useEffect(()=>{
       
    //     if(questionNo<1){
    //         onClose();
    //     }

    // },[questionNo])
   
    //go previous  question
    const handlePrevious=()=>{
        setQuestionNo(questionNo=questionNo-1)
    }

    const handleNext=()=>{
        setQuestionNo(questionNo=questionNo+1);
        setIsCorrect(undefined)

    }

  return (
    <>

        <div className=" p-6  rounded-md text-white bg-Darkblue max-sm:h-screen">
        
        <div className="w-full">
            <div className="w-full flex justify-center ">
                <h1 className="text-lg font-bold text-center text-Darkblue 
                bg-Yellow ring-2 ring-Yellow rounded-md w-fit px-2">Question No:{questionNo}</h1>
            </div>
            {/* questions and options */}
            {firstQuestion && (
            firstQuestion.map((fq)=>(

                <div className="w-full mt-[30px] flex flex-col" key={fq.id}>
                {/* question */}
                <div className="bg-Yellow text-Darkblue p-4 relative top-[50px]  ">
                    <div className=" bg-white p-2 rounded-full w-[80px] h-[80px] 
                    flex items-center justify-center absolute top-[-55px] left-[45%] max-sm:left-[35%]">
                        <div className="bg-Yellow rounded-full w-[65px] h-[65px] flex flex-col items-center justify-center">
                             <h1 className="text-lg font-bold ">60</h1>
                            <p className="text-md font-normal mt-[-10px]">Seconds</p>
                        </div>
                    </div>
                    <h1 className="text-lg font-bold mt-[10px] ">{fq.question}</h1>
                </div>

                {/* options */}
                <div className="mt-[60px]" onClick={()=>setCorrectAnswer(fq.correctChoice)}>
                {fq.choice.map((ch)=>(
                    <div className=" mt-[10px] bg-white p-[2px] text-Darkblue rounded-[30px]" 
                    key={ch.id} onClick={()=>handleAnswer(ch.id)}>
                    
                    <div className={`${answerId == ch.id ? (isCorrect==true?" bg-green-400 ":isCorrect==false?" bg-red-400 ":" bg-Yellow "):" bg-Yellow "} bg-Yellow rounded-[30px] flex pl-[25px] items-center space-x-4 pr-[5px] `}>
                    <div className="bg-white rounded-full h-[8px] w-[8px]"></div>
                        <h1 className="text-lg font-bold">{ch.name}</h1>
                    </div>
                </div>

                ))}
                </div>
                
            </div>


            )))}
            <div className="flex justify-between">
                <button className={`${questionNo>1?" block ":" hidden "} text-Darkblue ring-2 ring-Yellow bg-Yellow rounded-md text-lg font-semibold mt-[20px] px-2 w-[20%] max-sm:w-[30%]`}
                onClick={()=>handlePrevious()}>Previous</button>
                {questionNo<=19?
                      <button className="text-Darkblue ring-2 ring-Yellow bg-Yellow rounded-md text-lg font-semibold mt-[20px] px-2 w-[20%]" 
                      onClick={()=>handleNext()}>Next</button>

                :<Link to={`/SkillCentra/Quiz/dailyContest/congratulation/submission/${levelId}/${domainId}`} className="w-full flex justify-end"><button className="text-Darkblue ring-2 ring-Yellow bg-Yellow rounded-md text-lg font-semibold mt-[20px] px-2 w-[20%] max-sm:w-[30%]" 
                >Submit</button></Link>}
              
            </div>


            
        </div>

        </div>
      
    </>
  );
}

export default DailyQuizQuestion;