import React from 'react';

interface Props {
  buttonAction: Function
}

const RegSuccess: React.FC<Props> = ({buttonAction}) => {
  return (
    <div className='reg-result'>
      <div className='no-luck'>
        <h2>Oih! Kahjuks selle korgi all auhinda peidus ei ole.</h2>
        <p><strong>Aga järgmise all võib-olla on!</strong></p>
        <div className='form-submit'>
          <button onClick={() => buttonAction()}>Registreeri uus kork</button>
        </div>
      </div>
    </div>
  );
}

export default RegSuccess;