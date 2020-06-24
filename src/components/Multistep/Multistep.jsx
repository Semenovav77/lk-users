import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Steps, Button } from 'antd';
import { LoginContainer } from '../../containers';

const { Step } = Steps;
const steps = [
  {
    title: 'First',
  },
  {
    title: 'Second',
  },
];

const Multistep = () => {
  const history = useHistory();

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const redirectOnUsers = () => {
    history.push('/');
  };

  return (
    <>
      <Steps current={currentStep}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">
        {currentStep === 0 && <LoginContainer nextStep={nextStep} />}
        {currentStep === 1 && <div> Verify </div>}
      </div>
      {currentStep > 0 && (
        <Button type="primary" onClick={redirectOnUsers}>
          Done
        </Button>
      )}
      {currentStep > 0 && (
        <Button style={{ margin: '0 8px' }} onClick={prevStep}>
          Previous
        </Button>
      )}
    </>
  );
};

export default Multistep;
