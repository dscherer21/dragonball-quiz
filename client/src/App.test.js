import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
//import { act, renderHook } from '@testing-library/react-hooks';
import { unmountComponentAtNode } from "react-dom";
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App, { startButton } from './App';
import AskQuestion from './components/askQuestion.js';
import Explanation from './components/explanation.js';
import QuestionTemplate from './components/questionTemplate.js';
import ResultsTemplate from './components/resultsTemplate.js';
import questions from './components/questions.js';
import resultsArray from './components/results.js';
import { act, renderHook } from 'react-dom/test-utils';

//Configuring Enzyme
configure({ adapter: new Adapter() });

let rightWrong;
let setSelectedAnswer;
let selectedAnswer;
let index = 0;
let shuffledQuestionsArray = [
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

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

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
    let wrapper = mount(<App />);
    expect(wrapper).not.toBeNull();
  });

  test('startButton registers click', () => {
    const startButton = jest.fn();
    const wrapper = mount(<App startButton={startButton} />);
    wrapper.find('#startButton').simulate('click');
    expect(startButton).toHaveBeenCalled();
  });
});

test('questions array contains Korin and Master Roshi', () =>{
  expect(questions[0].answer).toContain("Korin");
  expect(questions[1].choices[1]).toContain("Master Roshi fired a Kamehameha Wave at it.");
});

test(' resultsArray contains Goku and Vegeta', () =>{
  expect(resultsArray[0].character).toContain("Goku");
  expect(resultsArray[1].character).toContain("Vegeta");
});

describe('QuestionTemplate functionality', () => {

  test('QuestionTemplate renders without crashing', () => {
    let setMainDisplay;
    const div = document.createElement('div');
    ReactDOM.render(
      <QuestionTemplate 
        shuffledQuestionsArray={shuffledQuestionsArray}
        setMainDisplay={setMainDisplay} 
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
        index={index} 
        setSelectedAnswer={setSelectedAnswer} 
        shuffledQuestionsArray={shuffledQuestionsArray}
        guessButton={guessButton}
        selectedAnswer={selectedAnswer}
      />
      , div);
  });

  test('guessButton registers click', () => {
    const mockSubmit = jest.fn();
    const wrapper = mount(
      <AskQuestion  
        index={index} 
        setSelectedAnswer={setSelectedAnswer} 
        shuffledQuestionsArray={shuffledQuestionsArray}
        guessButton={mockSubmit}
        selectedAnswer={selectedAnswer}
      />
    );
    wrapper.find('#guessButton').simulate('click');
    expect(mockSubmit).toHaveBeenCalled();
  });
});

describe('Explanation component functionality', () => {
  
  test('renders without crashing', () => {
    const div = document.createElement('div');
    let nextButton;
    ReactDOM.render(
      <Explanation 
        rightWrong={rightWrong}
        shuffledQuestionsArray={shuffledQuestionsArray}
        index={index}
        nextButton={nextButton}
      />
    , div);
  });

  test('nextButton registers click', () => {
    const mockSubmit = jest.fn();
    const wrapper = mount(
      <Explanation 
        rightWrong={rightWrong}
        shuffledQuestionsArray={shuffledQuestionsArray}
        index={index}
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






