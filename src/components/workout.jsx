import {  useState } from "react";
import styles from "./styles.module.css"

const Workout = (props) =>{
    const weight = props?.weight;
    const reps = props?.reps;
    const [completed, setCompleted] = useState(false);
    if (reps?.length > 1){
        return reps.map((x, i)=><Workout 
        superSet = {props?.superSet} 
        workout = {props?.workout} 
        reps = {reps[i]} 
        weight = {weight[i]} 
        />)
    }
    else 
    return (
    <div className={completed?  styles.itemCompleted: styles.item}>
        <div> {props?.superSet ? "💪" : "👊"} </div>
        <div> {props?.workout}  </div>
        <div> {reps} reps</div>
        <div className="weights"> { weight ?? weight?.map(x=>(<div> {x} </div>))} </div>
        <button 
        className={completed? styles.done : styles.notDone} 
        onClick={e=>setCompleted(!completed)}> 
        {completed? '✅': 'Crushed it'} 
        </button>
    </div>)
}
export default Workout 

// cardio
// time
// reps
// weights
// sets?
// super set 
// set number
