
import React, { useEffect } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import '../CSS/VerticalStepper.css'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  
  },
  Step:{
    
  },
  
}));


function getSteps() {
  return ["form", "form", "form", "form", "form"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit quos ut nisi deleniti commodi soluta incidunt repudiandae, quis ipsam nemo.`;
    case 1:
      return " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit quos ut nisi deleniti commodi soluta incidunt repudiandae, quis ipsam nemo.";
    case 2:
      return ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit quos ut nisi deleniti commodi soluta incidunt repudiandae, quis ipsam nemo.`;
      case 3:
        return ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit quos ut nisi deleniti commodi soluta incidunt repudiandae, quis ipsam nemo.`;
        case 4:
          return ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit quos ut nisi deleniti commodi soluta incidunt repudiandae, quis ipsam nemo.`;
    default:
      return "Unknown step";
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => 
    prevActiveStep + 1);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [activeStep]);

  return (
    <div  class="main">
    <div class="header">
      <h1>HOW TO APPLY</h1>
    </div>
    <div  className="steps">
      <Stepper 
        activeStep ={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step
          className={classes.Step}
           key={label}>
            <StepLabel
           ><div class="info">{getStepContent(index)}</div></StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
    </div>
  );
}




