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
      <label className="block text-lg font-medium text-gray-700 mb-2">Select your mood</label>
      <select 
        value={mood} // Bind state to the value
        onChange={selectMood} // Handle changes
        className="w-full p-2 border rounded-lg"
      >
        <option value="">---Choose---</option>
        <option value="happy">Happy</option>
        <option value="love">Love</option>
        <option value="sad">Sad</option>
        <option value="workout">Workout</option>
      </select>
      <p>Your current mood is: {mood}</p>
    </div>
  );
};

export default MoodSelector;
