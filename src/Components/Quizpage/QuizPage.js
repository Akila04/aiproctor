import React from 'react';
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




const QuizPage = ({questionSet,setoption,markQuestion, controls,navigate}) => {
    
    // to clear the selection
    const clear= () =>{
        const curr_question = questionSet.find((element) => element.status === "current")
        setoption(curr_question.questionNumber, "")
    }

    return (
        <div>
            <QuizPageTopSection />
            <div style={{marginTop: '8%'}}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <LeftSideMenu questionSet = {questionSet} navigate={navigate} />
                    </Grid>
                    <Grid item xs={8}>
                        <QuizComponent questionSet = {questionSet} setoption ={setoption}/> 
                    </Grid>
                </Grid>
                <div>
                    <Button 
                        variant="contained" 
                        color="primary"
                        startIcon={<ArrowBackIcon />}
                        className="buttons prevAndNextButton"
                        onClick ={() => controls("prev")}
                    >
                        Prev
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary"
                        startIcon={<BookmarksIcon />}
                        className="buttons markAndClearButton"
                        onClick = {() => markQuestion()}
                    >
                        Mark
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary"
                        startIcon={<ClearIcon />}
                        className="buttons markAndClearButton"
                        onClick={()=>clear()}
                    >
                        Clear
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary"
                        endIcon={<ArrowForwardIcon />}
                        className="buttons prevAndNextButton"
                        onClick ={() => controls("next")}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );

}

export default QuizPage;