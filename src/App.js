import { useState } from 'react';
import './App.css';
import Workout from './components/workout';
import data from "./data/data.json";

function App() {

  const [letter, setLetter] = useState("A");
  const [weekday, setWeekday] = useState("Monday");
  const workoutSet = data[letter][weekday];

  const onClickSet =(e, itemId) =>{
    if (itemId==='weekday'){
      setWeekday(e.target.value)
    } else {
      setLetter(e.target.value)
    }
  }
  return (
    <div className="App">
      <h1 className="title" >Pick Workout</h1>
      <div className="playlist" href="https://open.spotify.com/playlist/37i9dQZF1DX0pH2SQMRXnC?si=8ed9967f42ad4623"> Hardstyle workout playlist 🤘</div>
        <SelectLetter
          letter={letter}
          setLetter={onClickSet}/>
        <SelectWorkout
          weekday={weekday}
          setWeekday={onClickSet}/>
    <div>
  
    </div>
    {workoutSet.map(item=>{
      return <Workout
          key={item.workout}
          superSet={item?.superSet ?? false }
          workout={item?.workout}
          reps={item?.reps}
          weight={item?.weight}
          setType={item?.setType}
     />   
      })}
     <Workout
          key={"cardioo"}
          superSet={false}
          workout={"HIIT"}
          reps={['20min']}
          weight={[0]}
          setType={'CARDIO'}
     />   
    </div>
  );
}

export default App;

const SelectWorkout = (props)=>{
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const renderedDays = days.map(
    item=>(
    <button key={item} className={item===props.weekday ? 'selected' : ''} onClick={e=>{props.setWeekday(e, 'weekday')}} value={item}>
       {item}
       </button>
    ));
  return <div className="days">{renderedDays}</div> 
}


const SelectLetter = (props)=>{
  const letters = ["A", "B"];
  const renderedLetters = letters.map(
    item=>(
    <button key={item} className={item===props.letter ? 'selected' : ''} onClick={e=>{props.setLetter(e, 'letter')}} value={item}>
       {item}
       </button>
    ));
  return <div className="letters"> {renderedLetters} </div>
}