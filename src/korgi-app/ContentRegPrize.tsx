import React from 'react';
import { prizeNames } from './WinnersList';

interface Props {
  buttonAction: Function,
  prizeNumber: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
}
const RegPrize: React.FC<Props> = ({buttonAction, prizeNumber}) => {
  return (
    <div className='reg-result'>
      <div>
        <h2>Palju õnne!</h2>
        <p>Oled võitnud<br/>{prizeNames[prizeNumber]}</p>
        <p>Võtame sinuga<br/>peatselt ühendust</p>
        <div className={`prize-preview prize-${prizeNumber}`}></div>
        <div className='form-submit'>
          <button onClick={() => buttonAction()}>Registreeri uus kork</button>
        </div>
      </div>
    </div>
  );
}

export default RegPrize;