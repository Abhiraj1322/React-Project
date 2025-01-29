import React, { useState,useEffect } from "react";

const ExerciseLogger = ({ addexercise, randomQuote }) => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");
  


  const handleSubmit = (e) => {
    e.preventDefault();


    if (!name.trim() || !duration.trim() || !calories.trim()) {
      alert("Please fill in all fields!");
      return;
    }

    const newExercise = {
      name,
      duration: parseInt(duration, 10),
      calories: parseInt(calories, 10),
    };



    addexercise(newExercise)
 
    setName("");
    setDuration("");
    setCalories("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="text-customGrey font-sans p-2">Log Exercise</h2>

        <input
          type="text"
          placeholder="Exercise Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Duration (mins)"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <input
          type="text"
          placeholder="Calories Burned"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ml-4 mb-6 mt-3"
          onClick={randomQuote}
          type="submit"
        >
          Add Exercise
        </button>
      </form>
    </div>
  );
};

export default ExerciseLogger;
