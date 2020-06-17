import React from 'react';

function AskQuestion(props) {

    return (
        <div className='fader'>
            <div>
                {props.shuffledQuestionsArray[props.index].question}
            </div>
            <div id='choicesDiv'>
                {props.shuffledQuestionsArray[props.index].choices.map((choice, key) => (
                    <h4 key={key}>
                        <input 
                            type="radio" 
                            onChange={(e) => props.setSelectedAnswer(e.target.value)} 
                            name='choices' 
                            value={choice}
                            id={key + 'z'}
                        />
                        <label htmlFor={key + 'z'}>{choice}</label>
                        <br />
                    </h4>
                ))}
            </div>
            <button id='guessButton' onClick={props.guessButton}>Guess!</button>
        </div>
    );
}

export default AskQuestion;