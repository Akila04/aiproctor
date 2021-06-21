import React, {useState, useEffect} from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import { ToggleButtonGroup } from '@material-ui/lab';
import './leftSideMenu.css';
import Draggable from 'react-draggable';
import VideoRecorder from 'react-video-recorder'



const LeftSideMenu = (props) => {
    const [flag, setFlag] = React.useState(true);
    const handleClick = () => {
        setFlag(!flag);
    };

    const [partAquestions, setPartAQuestions] = useState([]);
    useEffect(() => {
      setPartAQuestions(props.partAQuestions);
    }, []);
    return (
        <div style={{textAlign: 'left'}}>
            {/* section */}
            {/**<Grid container justify="flex-end"> */}
              <div style={{textAlign: 'right', marginTop: '-4%'}}>
                <ToggleButtonGroup>
                  <Button variant="contained" onClick={handleClick} style={flag ? {backgroundColor: '#6c63ff', color: '#ffffff'}: {}}> part A</Button>
                  <Button variant="contained" onClick={handleClick} style={flag ? {} : {backgroundColor: '#6c63ff', color: '#ffffff'}}>part B</Button>
                </ToggleButtonGroup>
              </div>
            {/**</Grid> */}
    
            {/* question-container */}
            {/* part A */}
            <div className="question-container" hidden={flag ? "" : "hidden"}>
            { partAquestions.map((question, index) => (
              <button 
                className="question" 
                value={index} 
                onClick={props.QuestionChangeHandler} 
                style={
                  (question.status==="MARKED") ?{backgroundColor:"#6247AA", color: "#ffffff"}
                  :(question.status==="UNMARKED")?{backgroundColor:"#3f005e", color: "#ffffff"}
                  :(question.status==="CURRENT")?{backgroundColor:"#C19EE0", color: "#ffffff"}:{}
                }
              > 
                {index + 1}
              </button>
            ))}
              {/** <button className="question"> 1</button>
              <button className="question"> 2</button>
              <button className="question"> 3</button>
              <button className="question"> 4</button>
              <button className="question"> 5</button>
              <button className="question"> 6</button> 
              <button className="question"> 7</button>
              <button className="question"> 8</button>
              <button className="question"> 9</button>*/}
            </div>
    
            {/* part B */}
            <div className="question-container" hidden={flag ? "hidden" : ""}>
              <button className="question"> 1</button>
              <button className="question"> 2</button>
              <button className="question"> 3</button>
            </div>
    
            {/* reference */}
            <div className="ref">
    
              {/* how to include without inline style */}
              <div className="answers">
                <button className="round marked"></button> <span> Marked Answers </span>
              </div> <div></div>
    
              <div className="answers">
                <button className="round unmarked "></button> <span> Unmarked Answers</span>
              </div> <div></div>
    
              <div className="answers"> 
                <button className="round current "></button> <span > Current Answer</span>
              </div>
            </div>
            <Draggable>
                <img className="image" src ="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"/>
            </Draggable>
     </div>
      );
}

export default LeftSideMenu;