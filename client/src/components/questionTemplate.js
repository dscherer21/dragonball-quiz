import React, { useState, useEffect } from 'react';

function QuestionTemplate(props) {
    const[rightAnswers, setRightAnsers] = useState(0);
    const[wrongAnswers, setWrongAnswers] = useState(0);
    const[selectedAnswer, setSelectedAnswer] = useState();
    const[index, setIndex] = useState(0);

    useEffect(() => {
        console.log(props.shuffledQuestionsArray);
    });

    return (
        <section>
            <div>
                <h3>Correct Answers: {rightAnswers}</h3>
                <h3>Incorrect Answers: {wrongAnswers}</h3>
            </div>
            <div>
                <div>
                    <h3>{props.shuffledQuestionsArray[index].question}</h3>
                </div>
                <div>
                    {props.shuffledQuestionsArray[index].choices.map((choice, key) => (
                        <h4 key={key}>
                            <input type="radio" onChange={() => setSelectedAnswer(choice)} name='choices' value={key} />
                            <label htmlFor={key}>{choice}</label>
                            <br />
                        </h4>
                    ))}
                </div>
                <button>Guess!</button>
            </div>
        </section>
    );
}

export default QuestionTemplate;