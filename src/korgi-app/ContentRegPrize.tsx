import React from 'react';

interface Props {
  buttonAction: Function,
  prizeNumber: 1 | 2 | 3 | 4 | 5 | 6
}

const RegPrize: React.FC<Props> = ({buttonAction, prizeNumber}) => {
  return (
    <div className='reg-result'>
      <div>
        <h2>Palju õnne!</h2>
        <p>Oled võitnud {prizeNumber}</p>
        <div className='form-submit'>
          <button onClick={() => buttonAction()}>Registreeri uus kork</button>
        </div>
      </div>
    </div>
  );
}

export default RegPrize;