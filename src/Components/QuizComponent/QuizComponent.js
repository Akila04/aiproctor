import React, {useState} from 'react';
import './quizComponent.css';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';


const QuizComponent = ({questionSet,setoption}) => {


    const totalNumberOfQuestions = questionSet.length;
    const curr_question = questionSet.find((element) => element.status === "current") //get the current question

    const [answerOption, setAnswerOption] = useState(curr_question.selectedAnswer);

    const optionHandler = (event) => {
        setAnswerOption(event.target.value)
    }

    // set the radio button according to the selectedAnswer
    const setRadio =(option) =>{
         return (option === curr_question.selectedAnswer) ? true : false
    }


    return (
        <div className="root">
            
              <p>Question {curr_question.questionNumber} of {totalNumberOfQuestions}</p>
            <p>{curr_question.question}</p>
            <RadioGroup aria-label="quiz" name="quiz" value={answerOption} onChange={optionHandler} >
                {curr_question.answerOptions.map((option, index) => (
                    <div key={index}>   
                        <FormControlLabel  checked = {setRadio(option)} onClick={() => setoption(curr_question.questionNumber, option)}
                            value={option} 
                            control={
                                <Radio />
                            } 
                            label={option} 
                        />
                        <hr />
                    </div>                    
                ))}
            </RadioGroup> 
        </div>
    );
}

export default QuizComponent;
