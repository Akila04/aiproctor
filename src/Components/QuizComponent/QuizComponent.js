import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './quizComponent.css';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ClearIcon from '@material-ui/icons/Clear';


const QuizComponent = (props) => {
    const questionNumber = props.questionSet.questionNumber;
    const question = props.questionSet.question;
    const answerOption = props.questionSet.answerOptions;
    const totalNumberOfQuestions = 5;

    const [answerOptions, setAnswerOptions] = useState('');
    useEffect(() => {
        setAnswerOptions(props.questionSet.selectedAnswer);
    }, [props]);

    
    const optionHandler = (event) => {
        setAnswerOptions(event.target.value)
    }

    
    return (
        <div>
        <div id="questionContainer" className="root">
            <p>Question {questionNumber} of {totalNumberOfQuestions}</p>
            <p>{question}</p>
            <RadioGroup name="quiz" id = "selectedOption" value={answerOptions} onChange={optionHandler}>
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
        <div>
        <div style={{textAlign: 'left'}}>
            <Button variant="contained" startIcon={<ArrowBackIcon />} className="buttons prevAndNextButton">
                Prev
            </Button>
            <Button variant="contained" startIcon={<BookmarksIcon />} className="buttons markAndClearButton">
                Mark
            </Button>
            <Button variant="contained" startIcon={<ClearIcon />} className="buttons markAndClearButton">
                Clear
            </Button>
            <Button id="nextButton" onClick={() => {props.NextQuestionHandler(props.questionSet,answerOptions)}} variant="contained" endIcon={<ArrowForwardIcon />} className="buttons prevAndNextButton">
                Next
            </Button>
        </div>

        </div>
        </div>
    );
}

export default QuizComponent;
