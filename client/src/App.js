import React, { useState } from 'react';
import './App.scss';
import Audio from './media/dragonballzfunimationintro.mp3';
import QuestionTemplate from './components/questionTemplate';
import questionsArray from './components/questions';
import IntroTemplate from './components/introTemplate';

function App() {
  const[mainDisplay, setMainDisplay] = useState(
    <IntroTemplate  startButton={startButton} />
  );
  //On the initial page load, take questionsArray and shuffle it.
  const[shuffledQuestionsArray] = useState(
    questionsArray.map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
  );

  function startButton() {
    //when the start button is clicked, switch to the QuestionTemplate
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
        <h1 id='header'><span>Dragon Ball Quiz</span></h1>
      </header>
      <main>
        {mainDisplay}
        <section>
          <h4 id='audioTitle'><span>Dragon Ball Z Funimation Intro</span></h4>
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
