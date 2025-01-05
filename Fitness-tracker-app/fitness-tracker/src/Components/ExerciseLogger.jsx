import React,{useState} from 'react'

const ExerciseLogger = ({onAddexercise},{randomQuote}) => {
    const [name,setname]=useState('')
    const [duration,setduration]=useState('')
    const[calories,setcalories]=useState('')

    const handlesubmit=(e)=>{
        e.preventDefault();
        const newExercise={name,duration:parseInt(duration),calories:parseInt(calories)}
        onAddexercise(newExercise);
        setname('');
        setduration('');
        setcalories('');
    }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <h2>Log exercise</h2>
      
          <input type="text"
        placeholder='Excercise Name' 
        value={name}
        onChange={(e) => setname(e.target.value)}/>
          <input type="text"
        placeholder='Duration(mins)' 
        value={duration}
        onChange={(e) => setduration(e.target.value)}/>
          <input type="text"
        placeholder='calories burned' 
        value={calories}
        onChange={(e) => setcalories(e.target.value)}/>
        <button onClick={randomQuote}  type="submit">Add Exercise</button>
      </form>
    </div>
  )
}

export default ExerciseLogger
