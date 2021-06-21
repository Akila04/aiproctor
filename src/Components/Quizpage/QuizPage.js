import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import QuizComponent from '../QuizComponent/QuizComponent';
import './QuizPage.css';
import QuizPageTopSection from './QuizPageTopsection';
import LeftSideMenu from '../LeftSideMenu/LeftSideMenu.js';
import axios from 'axios';
import Webcam from "react-webcam";


const qnarray = [
    {
     questionNumber: 1,
     question: "Most of the kids love to carry these keys. What are those keys ?",
     answerOptions:  ["Play Room Keys", "Computer Room Keys", "Kitchen Keys", "Cookies"],
     selectedAnswer : "",
     status: "CURRENT"
    },
    {
     questionNumber: 2,
     question: "Which day is celebrated as World Environment Day ?",
     answerOptions:  ["5th June","4th April", "3rd March", "6th July"],
     selectedAnswer : "",
     status: ""
    },
    {
     questionNumber: 3,
     question: "Which star is at the centre of our Solar System ?",
     answerOptions:  ["Earth", "Jupiter", "Sun", "Mars"],
     selectedAnswer : "",
     status: ""
    },
    {
     questionNumber: 4,
     question: "Which is the tallest mountain in the world ?",
     answerOptions:  ["Himalayas", "Mount Everest", "K12", "Kamet"],
     selectedAnswer : "",
     status: ""
    },
    {
     questionNumber: 5,
     question: "Who built The Taj Mahal ?",
     answerOptions:  ["Shah Jahan","Babur", "Humayun", "Jahangir"],
     selectedAnswer : "",
     status: ""
    }   
]

const QuizPage = () => {
    /*const webcamRef = React.useRef(null);

    const videoConstraints = {
        facingMode: "user"
      };

      const capture = React.useCallback(
        () => {
          const imageSrc = webcamRef.current.getScreenshot();
          console.log(imageSrc)
        },
        [webcamRef]
      );
    
    */
    const [questionSetArray, setQuestionSetArray] = useState(qnarray)
    const [questionSet, setQuestionSet] = useState(questionSetArray[0]);
    
    const QuestionChangeHandler = (event) => {
        //const answer = document.getElementById("questionContainer")["selectedOption"].value;
        //var checkedButton;
        /*answer.forEach(e => {
            if (e.checked) {
                console.log(e);
                checkedButton = e.value;
            }
        });*/
        //console.log(checkedButton + "CHECKED BUTTON" )
        //var gender = document.querySelector('input[name = "gender"]:checked').value;
        //console.log(answer + "ANSWER")
        setAnswerForAQuestionSet(questionSet, questionSet.selectedAnswer);
        const tempQuestionset = questionSetArray[event.target.value];
        tempQuestionset.status = "CURRENT";
        
        setQuestionSet(tempQuestionset);
    }

    const NextQuestionHandler = (question, answerOption) => {
        setAnswerForAQuestionSet(question, answerOption);
        
        const questionNumber = question.questionNumber;
        const index = questionNumber-1;
        const tempQuestionset = questionSetArray[index+1];
        tempQuestionset.status = "CURRENT"
        setQuestionSet(tempQuestionset);
    }

    const setAnswerForAQuestionSet = (question, answerOption) => {
        const questionNumber = question.questionNumber;
        const index = questionNumber-1;

        if(answerOption===""){
            question.status="UNMARKED";
        }
        else {
            question.selectedAnswer = answerOption;
            question.status="MARKED";
        }
        const tempArray = questionSetArray;
        tempArray[index] = question;

        setQuestionSetArray(tempArray);
        
    }

    
    return (
        <div>
            <QuizPageTopSection />
            <div style={{marginTop: '8%'}}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <LeftSideMenu partAQuestions = {questionSetArray} QuestionChangeHandler={QuestionChangeHandler} />
                    </Grid>
                    <Grid item xs={8}>
                        <QuizComponent questionSet = {questionSet}  NextQuestionHandler={NextQuestionHandler}  />
                    </Grid>
                </Grid>
                
            </div>
            {/** <Webcam 
                ref={webcamRef}
                videoConstraints={videoConstraints} 
            />
            <button onClick={capture}>Capture photo</button>
                */}
        </div>

    );

}

export default QuizPage;