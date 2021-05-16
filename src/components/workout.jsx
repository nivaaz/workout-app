import {  useState } from "react";
import styles from "./styles.module.css"

const Workout = (props) =>{
    const weight = props?.weight;
    const reps = props?.reps;
    const itemClass = getItemClass(props.setType);
    const [completed, setCompleted] = useState(false);
    if (reps?.length > 1){
        return reps.map((x, i)=>
        <WorkoutItem 
        superSet = {props?.superSet} 
        workout = {props?.workout} 
        reps = {reps[i]} 
        weight = {weight[i]} 
        setType = {props.setType} 
        />)
    }
    else 
    return (
    <div className={completed?  styles.itemCompleted: itemClass}>
        <div className={styles.superSet}> {props?.superSet ? "💪" : "👊"} </div>
        <div className={styles.workout}> {props?.workout}  </div>
        <div className={styles.reps}> {reps} reps</div>
        <div className={styles.weight}> { weight ?? <>{poundToKilo(weight)} kg</>} </div>
        <button 
        className={completed? styles.done : styles.notDone} 
        onClick={e=>setCompleted(!completed)}> 
        {completed? '✅': 'Crushed it'} 
        </button>
    </div>)
}
export default Workout 


const WorkoutItem = (props) => {
    const weight = poundToKilo(props?.weight) +'kg';
    const reps = props?.reps;
    const itemClass = getItemClass(props?.setType);
    const [completed, setCompleted] = useState(false);
    return (
        <div className={completed?  styles.itemCompleted: itemClass}>
            <div className={styles.superSet}> {props?.superSet ? "💪" : "👊"} </div>
            <div className={styles.workout}> {props?.workout}  </div>
            <div className={styles.reps}> {reps} reps</div>
            <div className={styles.weight}> { weight ?? <>{} kg</>} </div>
            <button 
            className={completed? styles.done : styles.notDone} 
            onClick={e=>setCompleted(!completed)}> 
            {completed? '✅': 'Crushed it'} 
            </button>
        </div>)
}

function getItemClass(itemType){
    console.log(itemType)
    if (itemType==='WARM_UP'){
        return  styles.itemWarmUp
    }
    if (itemType==='CARDIO'){
        return  styles.itemCardio
    }     else {
        return styles.item 
    }
}
function poundToKilo (pound){
    const kilo = (pound *1000)/2205
    return Math.floor(kilo)
}