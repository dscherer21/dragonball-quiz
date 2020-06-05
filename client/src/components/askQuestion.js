import React, { useState, useEffect } from 'react';

function AskQuestion(props) {

    function selectOption(choice) {
        console.log(props.selectedAnswer);
    };

    return (
        <div>
            <div>
                <h3>{props.shuffledQuestionsArray[props.index].question}</h3>
            </div>
            <div>
                {props.shuffledQuestionsArray[props.index].choices.map((choice, key) => (
                    <h4 key={key}>
                        <input 
                            type="radio" 
                            onChange={() => props.setSelectedAnswer(choice)} 
                            name='choices' 
                            value={choice}
                        />
                        <label htmlFor={key}>{choice}</label>
                        <br />
                    </h4>
                ))}
            </div>
            <button onClick={props.guessButton}>Guess!</button>
        </div>
    );
}

export default AskQuestion;