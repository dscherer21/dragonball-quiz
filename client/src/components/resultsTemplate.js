import React from 'react';
import resultsArray from './results';

function ResultsTemplate(props) {

    return (
       <section>
            <div>
                <h2>You Scored {(props.rightAnswers * 100)/20}%</h2>
                <h3>You got {resultsArray[props.resultsIndex].character}!</h3>
            </div>
            <div>
                <img 
                    src={resultsArray[props.resultsIndex].image} 
                    className='resultsImage'
                    alt={'Image of ' + resultsArray[props.resultsIndex].character} 
                />
            </div>
            <div>
                <h3>
                    <p>{resultsArray[props.resultsIndex].summary}</p>
                </h3>
            </div>
       </section>
    );
}

export default ResultsTemplate;