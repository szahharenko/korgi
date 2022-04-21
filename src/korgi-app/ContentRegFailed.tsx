import React from 'react';
import FailedIcon from './assets/error-04.png';

interface Props {
  buttonAction: Function
}

const RegFailed: React.FC<Props> = ({buttonAction}) => {
  return (
    <div className='reg-result'>
      <div>
        <img className='code-used' src={FailedIcon} alt=''/>
        <h2>See kork on juba registreeritud!</h2>
        <div className='form-submit'>
          <button onClick={() => buttonAction()}>Proovi uuesti</button>
        </div>
      </div>
    </div>
  );
}

export default RegFailed;