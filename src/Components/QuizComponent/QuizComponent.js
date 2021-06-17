import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './quizComponent.css';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';


const QuizComponent = (props) => {
    const questionNumber = props.questionSet.questionNumber;
    const question = props.questionSet.question;
    const answerOption = props.questionSet.answerOptions;
    const totalNumberOfQuestions = 15

    const [answerOptions, setAnswerOptions] = useState(props.questionSet.selectedAnswer);

    const optionHandler = (event) => {
        console.log(event.target.value);
        setAnswerOptions(event.target.value)
    }
    
    return (
        <div className="root">
            <p>Question {questionNumber} of {totalNumberOfQuestions}</p>
            <p>{question}</p>
            <RadioGroup aria-label="quiz" name="quiz" value={answerOptions} onChange={optionHandler}>
                {answerOption.map((option, index) => (
                    <div key={index}>
                        <FormControlLabel 
                            value={option} 
                            control={
                                <Radio  />
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
