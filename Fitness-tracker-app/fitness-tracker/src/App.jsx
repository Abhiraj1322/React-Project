import React, {useState} from 'react'
import ExerciseLogger from './Components/ExerciseLogger'
import ProgressChart from './Components/ProgressChart'
import ExerciseList from './Components/ExerciseList'
import MotivationalQuotes from './Components/MotivationalQuotes'

const App = () => {
  const[exercises,setexercises]=useState([]);
  const addexercise = (newExercise) => {
    setexercises((prevExercises) => [...prevExercises, newExercise]);
    console.log(newExercise);
  };



  const quotesArray = [
    "The only bad workout is the one that didn't happen.",
    "Push yourself, because no one else is going to do it for you.",
    "Don't stop when you're tired. Stop when you're done.",
    "Success starts with self-discipline."
  ];

  // State to store the current quote
  const [currentQuote, setCurrentQuote] = useState(
    quotesArray[Math.floor(Math.random() * quotesArray.length)]
  );


  const randomQuote = () => {
    const rQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
    setCurrentQuote(rQuote);  // Update the state with a new random quote
  };
console.log
  return (
    <div className='min-h-screen bg-customWhite p-6 flex flex-col items-center'>
      <h1 className='text-4xl font-bold text-green-500 mb-8 font-sans'>Fitness Tracker </h1>
     <ExerciseLogger addexercise={addexercise} quote={randomQuote}/>
     <ExerciseList exercises={exercises}   />
     
     <ProgressChart exercises={exercises}/>
     <MotivationalQuotes Quote={currentQuote} />
    </div>
  );
};

export default App
