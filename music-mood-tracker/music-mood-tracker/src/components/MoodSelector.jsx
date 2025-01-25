import React, { useState } from 'react';

const MoodSelector = ({ onMoodselector }) => {
  const [mood, setMood] = useState(''); // Local state for mood

  const selectMood = (e) => {
    const selectedMood = e.target.value; // Get the selected value
    setMood(selectedMood); // Update local state for the dropdown
    if (onMoodselector) {
      onMoodselector(selectedMood); // Notify the parent component
    }
  };

  return (
    <div>
      <label className=" text-2xl text-red-500 hover:text-red-700 w-full ">Select your mood</label>
     <div className='w-96 mt-2 '>
     <select 
        value={mood}  
        onChange={selectMood} 
        className="w-full p-3 rounded sm mt-3 "
      >
        <option className='text-center'>---Choose---</option>
        <option className='text-center' value="Happy">Happy</option>
        <option className='text-center' value="Love">Love</option>
        <option  className='text-center'value="Sad">Sad</option>
        <option className='text-center'  value="Workout">Workout</option>
      </select>
      </div> 
      <p className=' text-center mt-4 p-3 text-xl  text-red-500 hover:text-red-300'>Your Current Mood: {mood} </p>
    </div>
  );
};

export default MoodSelector;
