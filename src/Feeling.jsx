// A feeling will have 3? parts
// What color it is, what ring it's in, and its bolded status

import { useState } from "react";

function Feeling ({feeling}){
    const [feelingState, setFeelingState] = useState({...feeling})

    function onFeelingClick() {
        setFeelingState((prevState) => ({
          ...prevState,
          isBold: !prevState.isBold,
        }));
    }
    
    return (
        <div 
            className={`Feeling-${feelingState.feeling}`}
            style={{ 
                fontWeight: feelingState.isBold ? 'bold' : 'normal', 
                background: feeling.color,
                cursor:'pointer',
                fontSize:'4vw',
                userSelect: 'none',
            }}
            onClick={onFeelingClick}
        >
            {feelingState.feeling}
        </div>
    )

}

export default Feeling;