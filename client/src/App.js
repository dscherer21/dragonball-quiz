import React, { useState, useEffect } from 'react';
import './App.scss';
import Audio from './media/dragonballzfunimationintro.mp3';
import QuestionTemplate from './components/questionTemplate';

function App() {
  const[mainDisplay, setMainDisplay] = useState(
    <section>
      <p>Welcome to the <span>Dragon Ball Quiz</span>! This quiz will test your knowledge of the entire <span>Dragon Ball</span> franchise. It will contain questions from <span>Dragon Ball</span>, <span>Dragon Ball Z</span>, <span>Dragon Ball GT</span>, and <span>Dragon Ball Super</span>. Your final results will then compared to a character from the show. Whenever you're ready, click the Start button.</p>
      <button onClick={startButton}>Start</button>
    </section>
  );

  function startButton() {
    setMainDisplay(<QuestionTemplate />)
  }

  useEffect(() => {

  });

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
