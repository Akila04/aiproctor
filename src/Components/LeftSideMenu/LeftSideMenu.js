import React from 'react';
import { Button } from '@material-ui/core';
import { ToggleButtonGroup } from '@material-ui/lab';
import './leftSideMenu.css';
import Webcam from "react-webcam";
import Draggable from 'react-draggable';


const LeftSideMenu = ({ questionSet, navigate }) => {


  const [flag, setFlag] = React.useState(true);

  const handleClick = () => {
    setFlag(!flag);
  //   if(flag){
  //   navigate((questionSet.length/2)+1)
  // }
  // else{ 
  //   navigate(1)
  // }

  };
  
  //web-cam constraints
  const videoConstraints = {
    width: 100,
    height: 100,
    facingMode: "user",
  };

  // Set the color of the buttons
  const setColor = (status) => {
    if (status === "current") return { backgroundColor: "#FFE3FE" }
    else if (status === 'marked') return { backgroundColor: '#6247AA' }
    else if (status === "answered") return { backgroundColor: '#C19EE0' }
    else return { backgroundColor: '#A06CD5' }
  }

  return (
    <div>


      {/* section */}
      <div style={{ textAlign: 'right', marginTop: '-4%' }}>
        <ToggleButtonGroup>
          <Button variant="contained" onClick={()=>{handleClick();navigate(1)}} style={flag ? { backgroundColor: '#6c63ff', color: '#ffffff' } : {}}> part A</Button>
          <Button variant="contained" onClick={()=>{handleClick();navigate((questionSet.length/2)+1)}} style={flag ? {} : { backgroundColor: '#6c63ff', color: '#ffffff' }}>part B</Button>
        </ToggleButtonGroup>
      </div>

      {/* question-container */}
      {/* part A */}
      <div className="question-container" hidden={flag ? "" : "hidden"} >
        {questionSet.slice(0,questionSet.length/2).map((question) => (
          <button key={question.questionNumber} className="question" style={setColor(question.status)} onClick={() => navigate(question.questionNumber)}>{question.questionNumber}</button>

        )
        )}
      </div>

      {/* part B  */}
      <div className="question-container" hidden={flag ? "hidden" : ""} >
      {questionSet.slice(questionSet.length/2).map((question) => (
          <button key={question.questionNumber} className="question" style={setColor(question.status)} onClick={() => navigate(question.questionNumber)}>{question.questionNumber}</button>

        )
        )}
      </div>



      {/* reference */}
      <div className="ref">
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

      

      {/* webcam */}
      <Draggable>
        <div className="webcam-container">
          <Webcam className="webcam" videoConstraints={videoConstraints} />
        </div>
      </Draggable>


    </div>
  );
}

export default LeftSideMenu;