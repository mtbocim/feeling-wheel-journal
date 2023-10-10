import { useState, useContext } from "react";
import './Feeling.css'
import feelingContext from "./feelingContext";

function Feeling ({feeling, rotation}){
    const [feelingState, setFeelingState] = useState({...feeling});
    const counter = useContext(feelingContext)

    function onFeelingClick() {
        feelingState.isSelected = !feelingState.isSelected;
        setFeelingState({...feelingState});
        counter(feelingState)
    }

    return (
        <div 
            className={`Feeling ${feelingState.feeling}`}
            style={{ 
                fontWeight: feelingState.isSelected ? 'bold' : 'normal', 
                fontSize : feelingState.isSelected ? '1.5vh' : '1.25vh',
                background: feeling.color,
                rotate: rotation
            }}
            onClick={onFeelingClick}
        >
            <div className='Feeling-text'>{feelingState.feeling}</div>
        </div>
    )

}

export default Feeling;