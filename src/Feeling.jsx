// A feeling will have 3? parts
// What color it is, what ring it's in, and its bolded status

import { useState } from "react";
import './Feeling.css'

function Feeling ({feeling, rotation}){
    const [feelingState, setFeelingState] = useState({...feeling});
    const [mouseOver, setMouseOver] = useState(false);

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
                background: feeling.color,
                rotate: rotation
            }}
            onClick={onFeelingClick}
            // onMouseOver={}
        >
            <div className='Feeling-text'>{feelingState.feeling}</div>
        </div>
    )

}

export default Feeling;