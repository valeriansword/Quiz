// src/components/Leaderboard.js

import React from "react";
import first from "../../assets/first.png";
import second from "../../assets/second.png";
import third from "../../assets/third.png";
import { RiCoinsLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Leaderboard = () => {
  const players = [
    { ranking: "01", name: "You", score: 100, points: 1000,img:first, },
    { ranking: "02", name: "Player4135", score: 95, points: 750,img:second, },
    { ranking: "03", name: "Player2963", score: 90, points: 500 ,img:third},
    { ranking: "04", name: "Player5472", score: 93, points: 100 },
    { ranking: "05", name: "Player2578", score: 89, points: 50 },
    { ranking: "06", name: "Player0235", score: 85, points: 0 },
    { ranking: "07", name: "Player5454", score: 80, points: 0 },
  ];

  return (
    <div className="min-h-screen flex  justify-center bg-Darkblue md:p-4 ">
      <div className="  w-full ">
        <h1 className="text-center text-2xl font-bold text-Yellow py-6">
          LeaderBoard
        </h1>
        <table className="w-full text-left table-auto border-separate md:border-spacing-2">
          <thead>
            <tr>
              <th className="md:px-4 py-2 text-Yellow text-center">Ranking</th>
              <th className="md:px-4 py-2 text-Yellow text-center">Name</th>
              <th className="md:px-4 py-2 text-Yellow text-center">Score</th>
              <th className="md:px-4 py-2 text-Yellow text-center">Points</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
                } transform transition:transform md:text-lg md:font-bold hover:scale-[1.02] hover:ease-in-out `}
              >
                <td className="border md:px-4 py-2 text-Yellow">
                  {player.ranking}
                </td>
                <td className="border px-4 py-2 text-Yellow">
                    <div className="flex space-x-2 items-center">
                    {player.img && (<img src={player.img} className="h-[25px] w-[25px]"/>)}
                    <span>{player.name}</span>
                  </div>
                </td>
                <td className="border px-4 py-2 text-Yellow">
                  {player.score}
                </td>
                <td className="border px-4 py-2 text-Yellow">
                  <div className="flex items-center space-x-2">
                  <RiCoinsLine />
                    <span className="mr-2">{player.points}</span>
                   
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full flex justify-center">
            <Link to="/"><button className="text-lg font-bold ring-2 ring-Yellow bg-Yellow 
            text-Darkblue rounded-md px-2 mt-[10px]">Explore more</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
