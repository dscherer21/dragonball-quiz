import React, { useState, useEffect } from 'react';

function Explanation(props) {

    return (
        <div>
            <h3>{props.rightWrong}</h3>
            <h3>Answer: {props.shuffledQuestionsArray[props.index].answer}</h3>
            <h3>Explanation: <p>{props.shuffledQuestionsArray[props.index].explanation}</p></h3>
            <button onClick={props.nextButton}>Next</button>
        </div>
    );
}

export default Explanation;