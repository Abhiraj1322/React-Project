import React from 'react'
import MoodSelector from './components/MoodSelector'
import SongPlayer from './components/SongPlayer'
import { useState } from 'react'
import MoodHistory from './components/MoodHistory'

const App = () => {
  const[mood,setmood]=useState("")
  const[history,sethistory]=useState([])
  const handleMoodSelect=(selectmood)=>{
setmood(selectmood);
sethistory((prevhistory)=> [
  ...prevhistory,
  { mood: selectmood,time:new Date().toLocaleTimeString()},
]);
};

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Music Mood tracker</h1>
    <MoodSelector onMoodselector={handleMoodSelect}/>
    <SongPlayer mood={mood}/>
    <MoodHistory history={history}/>

 
    </div>
      
  
  );
}

export default App
