import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { act, renderHook } from 'react-dom/test-utils';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import AskQuestion from './components/askQuestion.js';
import Explanation from './components/explanation.js';
import QuestionTemplate from './components/questionTemplate.js';
import ResultsTemplate from './components/resultsTemplate.js';
import questions from './components/questions.js';
import resultsArray from './components/results.js';
import IntroTemplate from './components/introTemplate';
import Audio from './media/dragonballzfunimationintro.mp3';


//Configuring Enzyme
configure({ adapter: new Adapter() });

const fakeData = [
  {
    question: "In Dragon Ball, who was the original owner of the Power Pole?",
    choices: [
        "Goku",
        "Master Roshi",
        "Grandpa Gohan",
        "Korin"
    ],
    answer: "Korin",
    explanation: "Goku is shown to be in possession of the Power Pole through most of Dragon Ball, however, Korin mentioned in the episode 'Lost and Found' that he had given the Pole to Master Roshi when he had climbed Korin Tower. Master Roshi eventually gave the Pole to Grandpa Gohan, who eventually gave it to Goku."
  }
];

test('Sample Test', () =>{
  expect(true).toBeTruthy();
})

describe('App functionality', () => {

  test('renders Welcome in the document', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Welcome/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders without crashing', () => {
    let wrapper = shallow(<App />);
    expect(wrapper).not.toBeNull();
  });

  test('audio element has source of Audio', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find("source").prop('src')).toEqual(Audio);
  });

});

describe('IntroTemplate functionality', () => {
  let startButton;
  test('renders without crashing', () => {
    let wrapper = shallow(<IntroTemplate startButton={startButton} />);
    expect(wrapper).not.toBeNull();
  });

  test('startButton registers click', () => {
    const mockSubmit = jest.fn();
    const wrapper = shallow(<IntroTemplate startButton={mockSubmit} />);
    wrapper.find('#startButton').simulate('click');
    expect(mockSubmit).toHaveBeenCalled();
  })

  test('renders Welcome in the document', () => {
    const { getByText } = render(
      <IntroTemplate startButton={startButton} />
    );
    const linkElement = getByText(/Welcome/i);
    expect(linkElement).toBeInTheDocument();
  });

});

describe('questions and results arrays', () => {

  test('questions array contains Korin and Master Roshi', () =>{
    expect(questions[0].answer).toContain("Korin");
    expect(questions[1].choices[1]).toContain("Master Roshi fired a Kamehameha Wave at it.");
  });
  
  test(' resultsArray contains Goku and Vegeta', () =>{
    expect(resultsArray[0].character).toContain("Goku");
    expect(resultsArray[1].character).toContain("Vegeta");
  });

});



describe('QuestionTemplate functionality', () => {

  test('QuestionTemplate renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <QuestionTemplate 
        shuffledQuestionsArray={fakeData}
        setMainDisplay 
      />
    , div);
  });
});

describe('AskQuestion functionality', () => {

  test('renders without crashing', () => {
    let guessButton;
    const div = document.createElement('div');
    ReactDOM.render(
      <AskQuestion  
        index='0'
        setSelectedAnswer
        shuffledQuestionsArray={fakeData}
        guessButton={guessButton}
        selectedAnswer
      />
      , div);
  });

  test('guessButton registers click', () => {
    const mockSubmit = jest.fn();
    const wrapper = mount(
      <AskQuestion  
        index='0' 
        setSelectedAnswer
        shuffledQuestionsArray={fakeData}
        guessButton={mockSubmit}
        selectedAnswer
      />
    );
    wrapper.find('#guessButton').simulate('click');
    expect(mockSubmit).toHaveBeenCalled();
  });

});

describe('Explanation component functionality', () => {

  test('renders without crashing', () => {
    let nextButton;
    const div = document.createElement('div');
    ReactDOM.render(
      <Explanation 
        rightWrong
        shuffledQuestionsArray={fakeData}
        index='0'
        nextButton={nextButton}
      />
    , div);
  });

  test('nextButton registers click', () => {
    const mockSubmit = jest.fn();
    const wrapper = mount(
      <Explanation 
        rightWrong
        shuffledQuestionsArray={fakeData}
        index='0'
        nextButton={mockSubmit}
      />
    );
    wrapper.find('#nextButton').simulate('click');
    expect(mockSubmit).toHaveBeenCalled();
  });
});

describe('ResultsTemplate component functionality', () => {

  test('renders without crashing', () => {
    const div = document.createElement('div');
    let rightAnswers = 0;
    let resultsIndex = 0;
    ReactDOM.render(
      <ResultsTemplate 
        rightAnswers={rightAnswers}
        resultsIndex={resultsIndex}
      />
    , div);
  });
});






