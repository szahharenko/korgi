import React from 'react';
import prizesTitle from './assets/prizes-title.png';

const PrizesIntro: React.FC = () => {
  return (
    <div className='prizes' id='prize'>
      <img src={prizesTitle} className='prizes__title' alt=''/>
      <div className='prizes__list'>
        <span className='prize prize-watch'></span>
        <span className='prize prize-travel'></span>
        <span className='prize prize-bag'></span>
      </div>
    </div>
  );
}

export default PrizesIntro;