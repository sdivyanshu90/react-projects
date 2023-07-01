import React from "react";

const WrongLetters = ({wrongLetters}) => {
    return (
        <div className="wrong-letters-container">
            <div>
                {wrongLetters.length > 0 && <p>Wrong</p>}
                {wrongLetters.map((letter, index) => <span key={index}>{letter}</span>).reduce((previous, current) => previous === null  ? [current] : [previous, ',', current], null)}
            </div>
        </div>
    )
}

export default WrongLetters;
