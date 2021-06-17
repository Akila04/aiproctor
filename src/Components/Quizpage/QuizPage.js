import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import QuizComponent from '../QuizComponent/QuizComponent';
import './QuizPage.css';
import QuizPageTopSection from './QuizPageTopsection';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ClearIcon from '@material-ui/icons/Clear';
import LeftSideMenu from '../LeftSideMenu/LeftSideMenu.js';

const questionSet = {
    questionNumber: 1,
    question: "About how often did you feel tired out for no good reason ?",
    answerOptions:  ["Option 1","Option 2", "Option 3", "Option 4"],
    selectedAnswer : ""
  }

const QuizPage = () => {

    return (
        <div>
            <QuizPageTopSection />
            <div style={{marginTop: '8%'}}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <LeftSideMenu />
                    </Grid>
                    <Grid item xs={8}>
                        <QuizComponent questionSet = {questionSet}  />
                    </Grid>
                </Grid>
                <div>
                    <Button 
                        variant="contained" 
                        color="primary"
                        startIcon={<ArrowBackIcon />}
                        className="buttons prevAndNextButton"
                    >
                        Prev
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary"
                        startIcon={<BookmarksIcon />}
                        className="buttons markAndClearButton"
                    >
                        Mark
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary"
                        startIcon={<ClearIcon />}
                        className="buttons markAndClearButton"
                    >
                        Clear
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary"
                        endIcon={<ArrowForwardIcon />}
                        className="buttons prevAndNextButton"
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );

}

export default QuizPage;