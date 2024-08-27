import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SkillCentreNavbar from './components/SkillCentreNavbar';
import QuizHome from './components/QuizPages/QuizHome';
import Domains from './components/QuizPages/Domains';
import Levels from './components/QuizPages/Levels';
import MultipleChoiceQuestion from './components/QuizPages/Multiple';
import Submisssion from './components/QuizPages/Submisssion';
import Performance from './components/QuizPages/Performance';
import Question from './components/QuizPages/Question';
import DailyQuizContest from './components/QuizPages/DailyQuizContest';
import DailyQuizQuestion from './components/QuizPages/DailyQuizQuestion';
import DailyQuizSubmisssion from './components/QuizPages/DailyQuizSubmission';
import DailyQuizCongratulation from './components/QuizPages/DailyQuizCongratulation';
import Leaderboard from './components/QuizPages/Leaderboard';
function App() {
  
  return (
    <BrowserRouter>
    <SkillCentreNavbar />
      <Routes>
        <Route path='/' element={<QuizHome />} />
        <Route path='/SkillCentra/Quiz/domains/:domainId' element={<Domains />} />
        <Route path='/SkillCentra/Quiz/levels/:levelId/:domainId' element={<Levels />} />
        <Route path="/SkillCentra/Quiz/levels/submission/:levelId/:domainId" element={<Submisssion />} />
        <Route path="/SkillCentra/Quiz/levels/performance" element={<Performance />} />
        <Route path="/SkillCentra/Quiz/levels/mcqs/:levelId/:domainId" element={<Question />} />
        <Route path="/SkillCentra/Quiz/dailyContest" element={<DailyQuizContest />} />
        <Route path="/SkillCentra/Quiz/dailyContest/mcqs/:levelId/:domainId" element={<DailyQuizQuestion />} />
        <Route path="/SkillCentra/Quiz/dailyContest/submission/:levelId/:domainId" element={<DailyQuizSubmisssion />} />
        <Route path="/SkillCentra/Quiz/dailyContest/congratulation/submission/:levelId/:domainId" element={<DailyQuizCongratulation />} />
        <Route path="/SkillCentra/Quiz/dailyContest/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
 
 )
}

export default App