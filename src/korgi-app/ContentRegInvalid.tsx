import React from 'react';
import FailedIcon from './assets/error-04.png';

interface Props {
  buttonAction: Function
}

const RegInvalid: React.FC<Props> = ({buttonAction}) => {
  return (
    <div className='reg-result'>
      <div>
        <img className='code-used' style={{width:'100px',height:'100px'}} src={FailedIcon} alt=''/>
        <h2>Oih! Midagi läks valesti.</h2>
        <p style={{textAlign:'center'}}>Proovi uuesti või registreeri uus kork!</p>
        <div className='form-submit'>
          <button onClick={() => buttonAction()}>Proovi uuesti</button>
        </div>
      </div>
    </div>
  );
}

export default RegInvalid;