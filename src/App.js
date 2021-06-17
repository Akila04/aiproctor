import './App.css';

import React from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'
import { ToggleButtonGroup } from '@material-ui/lab';


function App() {

  const [flag, setFlag] = React.useState(true);
  const handleClick = () => {
    setFlag(!flag);
  };

  return (
    <Grid container>

      {/* sideMenu */}
      <Grid item xs={4}>

        {/* title */}
        <Typography variant="h5" style={{ margin: "20px ", letterSpacing:"2px" }} >
          STSEB
        </Typography>

        {/* section */}
        <Grid container justify="flex-end">
          <div>
            <ToggleButtonGroup>
              <Button variant="contained" onClick={handleClick} color={flag ? "primary" : ""}> part A</Button>
              <Button variant="contained" onClick={handleClick} color={flag ? "" : "primary"}>part B</Button>
            </ToggleButtonGroup>
          </div>
        </Grid>

        {/* question-container */}
        {/* part A */}
        <div className="question-container" hidden={flag ? "" : "hidden"}>
          <button className="question"> 1</button>
          <button className="question"> 2</button>
          <button className="question"> 3</button>
          <button className="question"> 4</button>
          <button className="question"> 5</button>
          <button className="question"> 6</button> 
          <button className="question"> 7</button>
          <button className="question"> 8</button>
          <button className="question"> 9</button>
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

        <img className="image" src ="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"/>

      </Grid>
      <Grid item xs={8}>
        ...
      </Grid>
    </Grid>
  );

}

export default App;
