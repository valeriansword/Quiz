import React, { useState } from 'react';

const MultipleChoiceQuestion = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  // Sample question and options
  const question = "What is the capital of France?";
  const options = [
    { id: 1, text: "Berlin", isCorrect: false },
    { id: 2, text: "Madrid", isCorrect: false },
    { id: 3, text: "Paris", isCorrect: true },
    { id: 4, text: "Rome", isCorrect: false },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option.id);
    setIsCorrect(option.isCorrect);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{question}</h2>
      <ul>
        {options.map((option) => (
          <li key={option.id} className="mb-2">
            <button
              onClick={() => handleOptionClick(option)}
              className={`w-full p-3 text-left border rounded-md
                ${selectedOption === option.id ? (isCorrect ? 'bg-green-500' : 'bg-red-500') : 'bg-white'}
            
              `}
            >
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultipleChoiceQuestion;
