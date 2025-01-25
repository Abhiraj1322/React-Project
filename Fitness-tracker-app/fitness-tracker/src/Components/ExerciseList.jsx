import React, { useEffect ,useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai';
const ExerciseList = ({exercises}) => {
const [storedExercise,setStoredExercise]=useState([]);  /// tis will hold local storage data
 const savedTolocalStorageFunction=(exercises)=>{
  localStorage.setItem("exercises",JSON.stringify(exercises)) 
 }
useEffect(()=>{
  const Exercises = JSON.parse(localStorage.getItem("exercises")) || [];
setStoredExercise(Exercises);
},[])
useEffect(()=>{
  if(exercises.length>0){
    savedTolocalStorageFunction(exercises)
    setStoredExercise(exercises)
  }
},) 
const deletefunction=(indexdelete)=>{
const updatedExercisees=storedExercise.filter((_,index)=>
  index!==indexdelete
);
setStoredExercise(updatedExercisees);
savedTolocalStorageFunction(updatedExercisees)
}
 


  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg" >
      <h2 className= "text-2xl font-semibold text-center mb-4">Exercise List</h2>
      {storedExercise.length>0 ? (

        <ul className="">
          {storedExercise.map((exercise,index)=>(
 <li className="p-4 bg-gray-100 rounded-lg shadow-sm" key={index}>
 <strong className="text-lg text-green-600">{exercise.name} - {exercise.duration} mins - {exercise.calories} calories</strong>
<button className="p-3" onClick={()=>deletefunction(index)}> <AiOutlineClose size={20} /></button>
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
