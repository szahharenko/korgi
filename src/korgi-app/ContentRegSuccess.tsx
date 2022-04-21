import React from 'react';

interface Props {
  buttonAction: Function
}

const RegSuccess: React.FC<Props> = ({buttonAction}) => {
  return (
    <div className='reg-result'>
      <div>
        <h1 className='caps'>Oih! Kahjuks selle korgi all auhinda peidus ei ole.</h1>
        <p>Aga järgmise all võib-olla on!</p>
        <div className='form-submit'>
          <button onClick={() => buttonAction()}>Registreeri uus kork</button>
        </div>
      </div>
    </div>
  );
}

export default RegSuccess;