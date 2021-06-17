import React from 'react'
import { Calculator } from 'react-mac-calculator';
import Dialog from '@material-ui/core/Dialog';


const CalculatorComponent = (props) => {

    return (
        <div className="app">
            
            <Dialog aria-labelledby="simple-dialog-title" onClose={props.calculatorClose} open={props.open}>
            <Calculator />
            </Dialog>
    
        </div>
    );

}

 
export default CalculatorComponent;