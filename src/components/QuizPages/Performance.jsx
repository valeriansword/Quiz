import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Label } from 'recharts';
import {Link} from "react-router-dom"
function Performance() {
    const data = [
        // { name: 'Group A', value: 700 },
        // { name: 'Group B', value: 200 },
       {
        id:1,
        data1:[
          { name: 'Group A', value: 700 },
          { name: 'Group B', value: 300 }
        ],
        name:"Two Days Ago",
        insideText:"Accuracy 70%",
        lead:"80/500",
        success:"20/30",
        time:"2hrs 20m"
       },
       {
        id:2,
        data1:[
          { name: 'Group A', value: 800 },
          { name: 'Group B', value: 200 }
        ],
        name:"Previous Day ",
        insideText:"Accuracy 90%",
        lead:"60/500",
        success:"25/30",
        time:"2hrs 10m"
       },
       {
        id:3,
        data1:[
          { name: 'Group A', value: 1000 },
          { name: 'Group B', value: 0 }
        ],
        name:"Today's",
        insideText:"Accuracy 100%",
        lead:"20/500",
        success:"25/30",
        time:"3hrs 20m"
       }

      ];
      const COLORS = ["#f5cf6b","#17212e"];
      
  return (
    <div className='bg-Darkblue w-full p-2 font-times'>
      <h1 className='text-2xl font-bold text-Yellow text-center mt-[20px] mb-[20px]'>Your Performance</h1>
    <div className='bg-Darkblue w-full grid grid-cols-3 max-sm:grid-cols-1 md:p-2 divide-x max-sm:divide-y border border-1 text-white font-times'>
      {data.map((info,id)=>(
        <div>
          <h1 className='text-center font-bold text-lg pt-[20px] ml-[-20px]'>{info.name}</h1>
           <PieChart width={300} height={350} key={id} >
           <Pie
             data={info.data1}
             cx={160}
             cy={160}
             innerRadius={100}
             outerRadius={130}          
             paddingAngle={5}
             dataKey="value"
             
           >
             {data.map((entry, index) => (
               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}  style={{outline:"none"}}/>
             ))}
             <Label position={'center'} width={30} fill='white' fontSize={30}>
              {info.insideText}</Label>
           </Pie>
           
         </PieChart>
         <div className='w-full flex flex-col items-center text-lg font-bold'>
             <span className='flex space-x-2 '>
              <h1>Leaderboard Rank:</h1><p className='text-Yellow'>{info.lead}</p>
             </span >
             <span className='flex space-x-2'>
              <h1>Successful Attempts:</h1><p className='text-Yellow'>{info.success}</p>
             </span>
             <span className='flex space-x-2'>
              <h1>Time Taken:</h1><p className='text-Yellow'>{info.time}</p>
             </span>
         </div>
         
        </div>
      ))}
        
      </div>
      <div className='mt-[30px] w-full flex justify-center mb-[20px]'>
          <Link to="/" className='w-full flex justify-center'>
          <button className='text-lg font-bold text-Darkblue w-[15%] max-sm:w-[40%] ring-2 ring-Yellow bg-Yellow
           rounded-md'>Go  To Home</button>
        </Link>
      </div>
      </div>
  )
}

export default Performance
