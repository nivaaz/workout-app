
const SelectDay = (props) =>{
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    return (
        days.map(item=>(
            <button className={props.day === item ? "selected": "none"}> {item}</button>
        ))
        )
        
    }
export default SelectDay 
