import React, { useState } from 'react';
import AskQuestion from './askQuestion';
import Explanation from './explanation';
import ResultsTemplate from './resultsTemplate';

function QuestionTemplate(props) {
    //Variable that counts the number of correct answers given.
    const[rightAnswers, setRightAnswers] = useState(0);
    //Variable that counts the number of wrong answers given.
    const[wrongAnswers, setWrongAnswers] = useState(0);
    //Variable that captures the answer the user chooses to each question.
    const[selectedAnswer, setSelectedAnswer] = useState();
    //Variable that will determine the index in the QuestionsArray to know which question to load.
    const[index, setIndex] = useState(0);
    //Variable that will display if the correct or incorrect answer was given.
    const[rightWrong, setRightWrong] = useState();
    //Variable that will load the askQuestion component if false. Then the explanation component if true.
    const[isQuestionAnswered, setIsQuestionAnswered] = useState(false);
    //Variable to help decide which result to display
    const[resultsIndex, setResultsIndex] = useState();

    function guessButton() {
        //if the chosen answer is equal to the correct answer...
        if(selectedAnswer === props.shuffledQuestionsArray[index].answer) {
            //increase rightAnswers variable by 1.
            setRightAnswers(rightAnswers + 1);
            //set rightWrong to display a 'correct' answer.
            setRightWrong('Correct!');   
        } else {
            //if not, increase wrongAnswers variable by 1.
            setWrongAnswers(wrongAnswers + 1);
            //set rightWrong to display an 'incorrect' answer.
            setRightWrong('Incorrect!'); 
        };
        //Change to True to load the Explanation Component
        setIsQuestionAnswered(true);
    }

    function nextButton() {
        //set the rightAnswers variable to half rounded up.
        if(Math.round(wrongAnswers/2) === 0) {
            setResultsIndex(0);
        } else {
            setResultsIndex(Math.round(wrongAnswers/2) - 1);
        }
        
        if(index === 19) {
            //load the results page
            props.setMainDisplay(
                <ResultsTemplate 
                    rightAnswers={rightAnswers}
                    resultsIndex={resultsIndex}
                />
            );
        } else {
            //increse index by 1 to load the next question from the shuffledQuestionsArray
            setIndex(index + 1);
            //Change to false to load the AskQuestion Component
            setIsQuestionAnswered(false);
        };
    }

    return (
        <section>
            <div>
                <h3>Correct Answers: {rightAnswers}</h3>
                <h3>Incorrect Answers: {wrongAnswers}</h3>
            </div>
            {isQuestionAnswered? 
                <Explanation 
                    rightWrong={rightWrong}
                    shuffledQuestionsArray={props.shuffledQuestionsArray}
                    index={index}
                    nextButton={nextButton}
                />
                :
                <AskQuestion  
                    index={index} 
                    setSelectedAnswer={setSelectedAnswer} 
                    shuffledQuestionsArray={props.shuffledQuestionsArray}
                    guessButton={guessButton}
                    selectedAnswer={selectedAnswer}
                />
            }
        </section>
    );
}

export default QuestionTemplate;