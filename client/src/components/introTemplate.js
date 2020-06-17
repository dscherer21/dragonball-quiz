import React from 'react';

function IntroTemplate(props) {
  
  return (
    <section>
      <div className='fader'>
        <p>Welcome to the <span>Dragon Ball Quiz</span>! This quiz will test your knowledge of the entire <span>Dragon Ball</span> franchise. It will contain questions from <span>Dragon Ball</span>, <span>Dragon Ball Z</span>, <span>Dragon Ball GT</span>, and <span>Dragon Ball Super</span>. Your final results will then compared to a character from the show. Whenever you're ready, click the Start button.</p>
        <button id='startButton' onClick={props.startButton}>Start</button>
      </div>
    </section>
  );
}

export default IntroTemplate;
