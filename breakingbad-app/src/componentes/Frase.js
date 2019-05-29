import React from 'react';

function Frase(props) {
    const { author, quote } = props.frase;
    return(
        <div className="frase">
            <h1>{quote}</h1>
            <p>-{author}</p>
        </div>
    )
}

export default Frase;