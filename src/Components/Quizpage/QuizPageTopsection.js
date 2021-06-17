import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Calculator from '../../Images/Calculator.svg';
import ProfileImage from '../../Images/ProfileImage.jpeg';
import Avatar from '@material-ui/core/Avatar';
import Timer from '../Timer/Timer';
import './QuizPage.css';
import CalculatorComponent from '../CalculatorComponent/Calulator';



const QuizPageTopSection = () => {

    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes time

    const [calculatorOpen, setCaluclatorOpen] = useState(false);
    return (
        <div>
        <div className="AppTitle">
            STSEB
        </div>
        <div className = "topContent">  
            <div className="profileContent">
                <Avatar variant="square" className="avatarSquare">
                    <img src={ProfileImage} width="100%" height="100%" />
                </Avatar>
                <div style={{textAlign: 'left'}}>
                    <p className="profileData">Akila</p>
                    <p className="profileData">312318104017</p>
                </div>
            </div>
            <div className="timer">
                <Timer expiryTimestamp={time} />
            </div>
            <div className="calculatorstyle">
                <IconButton style={{padding: '5px'}} onClick={() => {setCaluclatorOpen(true)}}>
                    <img src={Calculator} alt="React Logo" width="40px" height="40px" />
                </IconButton>
            </div>
            <CalculatorComponent open = {calculatorOpen} calculatorClose={() => {setCaluclatorOpen(false)}} />
        </div>
        </div>
    );
}

export default QuizPageTopSection;