import React from 'react';

interface Props {
  buttonAction: Function,
  prizeNumber: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
}
const prizeNames = {
  0: 'Demo auhind',
  1: 'Vichy plokk',
  2: '24-7fitness.com (pääse 2tk)',
  3: 'Apollo kinopilet',
  4: 'Vitamiinikulleri  puuviljakast',
  5: 'Vichy sokid',
  6: 'Vichy saunalina',
  7: 'Vichy telk',
  8: 'Falljarven seljakott',
  9: 'Apple Watch SE',
  10: 'Estraveli 2000€ kinkekaart'
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