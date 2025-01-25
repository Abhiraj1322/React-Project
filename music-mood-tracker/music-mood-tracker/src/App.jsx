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

    <div className="min-h-screen bg-brand text-red-500 flex flex-col items-center py-10">
      <div className="flex gap-8 ml-auto" >
      <nav className="text-lg text-bold hover:text-red-700 cursor-pointer">Home</nav> 
      <nav className="text-lg text-bold hover:text-red-700 cursor-pointer">Add Mood</nav>
      <nav className="text-lg text-bold hover:text-red-700 cursor-pointer"> Randomizer</nav>
      <nav className="text-lg text-bold hover:text-red-700 cursor-pointer">Support</nav>
      </div>
      <h1 className="text-3xl font-bold mb-6 text-center mt-12">Music Mood tracker</h1>
    <MoodSelector onMoodselector={handleMoodSelect}/>
    <SongPlayer mood={mood}/>
    
    <MoodHistory history={history}/>

 
    </div>
      
  
  );
}

export default App
