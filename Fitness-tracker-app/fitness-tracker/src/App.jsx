import React, {useState} from 'react'
import ExerciseLogger from './Components/ExerciseLogger'
import ProgressChart from './Components/ProgressChart'
import ExerciseList from './Components/ExerciseList'
import MotivationalQuotes from './Components/MotivationalQuotes'
const App = () => {
  const[exercises,setexercises]=useState([]);
  const addexercise=(exercise)=>{
    setexercises([...exercises,exercise])
  };
  const removeExcercise=(indextoremove)=>{
    setexercises(exercises.filter((_,index)=>index==!indextoremove))
  }

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

  // Function to change the quote
  const randomQuote = () => {
    const rQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
    setCurrentQuote(rQuote);  // Update the state with a new random quote
  };
console.log
  return (
    <div>
      <h1>Fitness Tracker </h1>
     <ExerciseLogger onAddexercise={addexercise} quote={randomQuote}/>
     <ExerciseList exercises={exercises}   Excercise={removeExcercise} />
     
     <ProgressChart exercises={exercises}/>
     <MotivationalQuotes Quote={currentQuote} />
    </div>
  );
};

export default App
