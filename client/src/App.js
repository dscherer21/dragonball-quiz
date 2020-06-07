import React, { useState } from 'react';
import './App.scss';
import Audio from './media/dragonballzfunimationintro.mp3';
import QuestionTemplate from './components/questionTemplate';
import questionsArray from './components/questions';
//import ResultsTemplate from './components/resultsTemplate';

function App() {
  const[mainDisplay, setMainDisplay] = useState(
    <section>
      <p>Welcome to the <span>Dragon Ball Quiz</span>! This quiz will test your knowledge of the entire <span>Dragon Ball</span> franchise. It will contain questions from <span>Dragon Ball</span>, <span>Dragon Ball Z</span>, <span>Dragon Ball GT</span>, and <span>Dragon Ball Super</span>. Your final results will then compared to a character from the show. Whenever you're ready, click the Start button.</p>
      <button onClick={startButton}>Start</button>
    </section>
  );
  //On the initial page load, take questionsArray and shuffle it.
  const[shuffledQuestionsArray] = useState(
    questionsArray.map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
  );

  function startButton() {
    //when the start button is clicked switch the QuestionTemplate
    setMainDisplay(
      <QuestionTemplate 
        shuffledQuestionsArray={shuffledQuestionsArray}
        setMainDisplay={setMainDisplay} 
      />
    );
  }

  return (
    <div className="App">
      <header>
        <h1>Dragon Ball Quiz</h1>
      </header>
      <main>
        {mainDisplay}
        <section>
          <h4>Dragon Ball Z Funimation Intro</h4>
          <audio controls loop='loop' title='Dragon Ball Z Funimation Intro'>
            <source src={Audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </section>
      </main>
    </div>
  );
}

export default App;
