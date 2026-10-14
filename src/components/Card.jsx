import { useState } from "react"

const Card = (props) => {
    const [flipped, isFlipped] = useState(true);


    return (
        <div className={`Card ${flipped ? "flipped" : ""}`} id={`${props.type}${flipped ? "-flipped" : ""}`} onClick={ () => isFlipped(!flipped)}>
            <h2>{flipped ? props.Question : props.Answer}</h2>
        </div>
    )
}

export default Card