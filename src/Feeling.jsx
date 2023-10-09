import { useState } from "react";
import './Feeling.css'

function Feeling ({feeling, rotation}){
    const [feelingState, setFeelingState] = useState({...feeling});

    function onFeelingClick() {
        setFeelingState((prevState) => ({
          ...prevState,
          isBold: !prevState.isBold,
        }));
    }

    return (
        <div 
            className={`Feeling ${feelingState.feeling}`}
            style={{ 
                fontWeight: feelingState.isBold ? 'bold' : 'normal', 
                fontSize : feelingState.isBold ? '1.5vh' : '1.25vh',
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