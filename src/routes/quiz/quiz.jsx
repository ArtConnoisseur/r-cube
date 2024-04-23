import React, { useState } from 'react';
import useRef from 'react';
import './quiz.css';

function handleSubmitQuiz(score) {
    if(window.confirm('Are you sure you want to submit?')) {
        alert(
            `Score: ${score}` +
            `\n${score > 5 ? 'Passed!' : 'Failed'}`
        )
        window.location = '/';
    }
}

const handleOptionClick = (event, option, correct, checked, setChecked, enable, setEnable, currStats, updateStats, corrected, setCorrect) => {
  if (enable) {
    if (!checked) {
      setCorrect(option === correct);
    }
    setChecked(true);
    setEnable(false);

    const newStats = {
      score: currStats.score + (option === correct ? 1 : 0),
      attempted: currStats.attempted + 1,
      totalQuestions: currStats.totalQuestions,
    };

    updateStats(newStats);
  }
};

const Question = ({ question, a, b, c, d, correct, currStats, updateStats }) => {
  const [checked, setChecked] = useState(false);
  const [corrected, setCorrect] = useState(false);
  const [enable, setEnable] = useState(true);

  return (
    <div className='question-container'>
      <h3>{question}</h3>
      <div className='question-options'>
        <div 
          className='option-square' 
          onClick={(event) => handleOptionClick(event, 'a', correct, checked, setChecked, enable, setEnable, currStats, updateStats, corrected, setCorrect)} 
          data-enable={enable}
        >
          {a}
        </div>
        <div 
          className='option-square' 
          onClick={(event) => handleOptionClick(event, 'b', correct, checked, setChecked, enable, setEnable, currStats, updateStats, corrected, setCorrect)} 
          data-enable={enable}
        >
          {b}
        </div>
        <div 
          className='option-square' 
          onClick={(event) => handleOptionClick(event, 'c', correct, checked, setChecked, enable, setEnable, currStats, updateStats, corrected, setCorrect)} 
          data-enable={enable}
        >
          {c}
        </div>
        <div 
          className='option-square' 
          onClick={(event) => handleOptionClick(event, 'd', correct, checked, setChecked, enable, setEnable, currStats, updateStats, corrected, setCorrect)} 
          data-enable={enable}
        >
          {d}
        </div>
      </div>
      <h3 className={corrected ? 'green' : 'red'}>{checked ? (corrected ? 'Correct' : 'Incorrect') : ''}</h3>
    </div>
  );
};


const questions = [
    {
      "question": "What is the primary goal of waste segregation?",
      "a": "Reducing waste volume",
      "b": "Ensuring proper disposal",
      "c": "Recycling materials",
      "d": "All of the above",
      "correct": "d"
    },
    {
      "question": "Which type of waste is suitable for composting?",
      "a": "Plastic",
      "b": "Organic",
      "c": "Metal",
      "d": "Hazardous",
      "correct": "b"
    },
    {
      "question": "What is the main environmental concern with plastic waste?",
      "a": "Air pollution",
      "b": "Water pollution",
      "c": "Soil pollution",
      "d": "Noise pollution",
      "correct": "b"
    },
    {
      "question": "Which method is NOT used for recycling inorganic waste?",
      "a": "Melting",
      "b": "Composting",
      "c": "Shredding",
      "d": "Pulverizing",
      "correct": "b"
    },
    {
      "question": "What should be the immediate action for hazardous waste?",
      "a": "Recycle",
      "b": "Compost",
      "c": "Dispose safely",
      "d": "Reuse",
      "correct": "c"
    },
    {
      "question": "Which type of waste should be disposed of separately due to its harmful nature?",
      "a": "Organic waste",
      "b": "Plastic waste",
      "c": "Hazardous waste",
      "d": "Paper waste",
      "correct": "c"
    },
    {
      "question": "What is the first step in waste management?",
      "a": "Waste generation",
      "b": "Waste collection",
      "c": "Waste disposal",
      "d": "Waste segregation",
      "correct": "a"
    },
    {
      "question": "What does E-waste primarily consist of?",
      "a": "Organic materials",
      "b": "Electronic equipment",
      "c": "Plastic materials",
      "d": "Metal scraps",
      "correct": "b"
    },
    {
      "question": "What is the best method to reduce plastic waste?",
      "a": "Composting",
      "b": "Reusing",
      "c": "Recycling",
      "d": "Burning",
      "correct": "b"
    },
    {
      "question": "Which waste type is NOT biodegradable?",
      "a": "Organic waste",
      "b": "Inorganic waste",
      "c": "Hazardous waste",
      "d": "Plastic waste",
      "correct": "d"
    }
  ];
  

function MakeQuestions({ currStats, updateStats }) {  
  return questions.map((element, ind) => (
    <Question 
      question={element.question}
      a={element.a}
      b={element.b}
      c={element.c}
      d={element.d}
      correct={element.correct}
      updateStats={updateStats}
      currStats={currStats}
      key={ind + 1}
    />
  ));
}

export function Quiz() {
  const [questionStats, setQuestionStats] = useState({
    score: 0, 
    attempted: 0,
    totalQuestions: questions.length,
  });

  return (
    <div className="quiz-container">
        <h1>This is the official <span className='accent'>R<sup>3</sup></span> course quiz! All the best!</h1>
      <div id='score'>
        <p>Score: {questionStats.score}/{questionStats.totalQuestions}</p>
        <p>Attempted: {questionStats.attempted}</p>
        <p>Remaining: {questionStats.totalQuestions - questionStats.attempted}</p>
      </div>
      <MakeQuestions currStats={questionStats} updateStats={setQuestionStats} />
      <button onClick={() => handleSubmitQuiz(questionStats.score)}>Submit</button>
    </div>
  );
}


