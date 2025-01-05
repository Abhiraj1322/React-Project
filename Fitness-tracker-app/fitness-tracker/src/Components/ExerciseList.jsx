import React from 'react'

const ExerciseList = ({exercises}) => {
 
  return (
    <div>
      <h2>Exercise List</h2>
      {exercises.length>0 ? (

        <ul>
          {exercises.map((exercise,index)=>(
 <li key={index}>
 <strong>{exercise.name}</strong> - {exercise.duration} mins - {exercise.calories} calories

</li>

        )  )}
          
        </ul>
      ):(
        <p>No exercises logged yet. Start by adding some!</p> 
      )}
       

      
    </div>
      );
};

export default ExerciseList
