import { useState } from 'react';
import './App.css';
import QuizPage from './Components/Quizpage/QuizPage';


function App() {
  
  // const questionSet = {
  //   questionNumber: 1,
  //   question: "About how often did you feel tired out for no good reason ?",
  //   answerOptions:  ["Option 1","Option 2", "Option 3", "Option 4"],
  //   selectedAnswer : "",
  //   status : "unmarked"
  // }

  const [questionSet, setQuestionSet] = useState([   {
      questionNumber: 1,
      question: "question-1",
      answerOptions:  ["Option 1","Option 2", "Option 3", "Option 4"],
      selectedAnswer : "",
      status : "current"
    },
    {
      questionNumber: 2,
      question: "question-2",
      answerOptions:  ["Option 1","Option 2", "Option 3", "Option 4"],
      selectedAnswer : "",
      status : "unmarked"
    },
    {
    questionNumber: 3,
    question: "question-3",
    answerOptions:  ["Option 1","Option 2", "Option 3", "Option 4"],
    selectedAnswer : "",
    status : "unmarked"
  },
  ]
)

// Select Option
const setoption = (id,answerOption) =>{
  setQuestionSet(questionSet.map((question) => question.questionNumber === id ? {...question, selectedAnswer: answerOption }: question))
}


// Sets the status of the current question before changing  
const setStatus = () =>{
  var number;
  setQuestionSet(questionSet.map((question) =>{
    if(question.status === "current"){
      if(question.selectedAnswer === ""){
        question.status = "unmarked"
      }
      else{
        question.status = "answered"
      }
      number = question.questionNumber
    }
  }))
  return number
}


// Mark a particular question
const markQuestion = () =>{
  console.log("hello")
  var questionNumber;
  setQuestionSet(questionSet.map((question) => {
    if(question.status === "current") {
      question.status = "marked"
      questionNumber = question.questionNumber
    }
  }))
  changeQuestion(questionNumber+1 )
}


// To move prev or next
const controls = (control) =>{
  console.log(control)
  var number = setStatus();
  control === "next" ? changeQuestion(number+1) : changeQuestion(number-1)
}

// Move prev or next
const changeQuestion = (questionNumber) =>{
  var id;
  if(questionNumber >questionSet.length || questionNumber === 0){
    id = 1;
  }
  else id = questionNumber
  setQuestionSet(questionSet.map((question) => question.questionNumber === id ?{...question, status:"current"} : question))
}


// Navigate through button
const navigate = (questionNumber) =>{
  console.log(questionNumber)
  setStatus()
  setQuestionSet(questionSet.map((question)=> question.questionNumber === questionNumber ? {...question, status:"current"}:question))
}

  return (
    <div className="App">
      <QuizPage  
      questionSet = {questionSet} 
      setoption = {setoption} 
      markQuestion={markQuestion} 
      controls = {controls} 
      navigate = {navigate} />
    </div>
  );
}

export default App;
