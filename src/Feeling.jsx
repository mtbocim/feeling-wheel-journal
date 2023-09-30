// A feeling will have 3? parts
// What color it is, what ring it's in, and its bolded status

import { useState } from "react";

function Feeling ({feeling, color}){
    const [feelingState, setFeelingState] = useState(
        {
            feeling, 
            color, 
            isBold: false
        }
    )
}

export default Feeling;