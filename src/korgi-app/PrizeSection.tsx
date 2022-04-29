import React from 'react';
import Bottles from './assets/Vichy_kampaaania_pudelid.png'

interface Props {}

const PrizeSection: React.FC<Props> = () => {
  return (
    <>
      <div className='prize-info'>
        <strong>1x</strong> 2000 € ESTRAVELI kinkekaart<br/>
        <strong>3x</strong> Apple Watch SE GPS<br/>
        <strong>10x</strong> Fjällräven seljakott
      </div>
      <div className='prizes__table'>
        <div>
          <span className='prize prize-7'></span>
          <strong>10x</strong> Vichy telk
        </div>
        <div>
          <span className='prize prize-6'></span>
          <strong>30x</strong> Vichy rätik
        </div>
        <div>
          <span className='prize prize-5'></span>
          <strong>50x</strong> Vichy sokid
        </div>
      </div>
      <div className='prizes__table prizes__table--small'>
        <div>
          <span className='prize prize-4'></span>
          <strong>30x</strong> Vitamiinikulleri<br/>puuviljakast
        </div>
        <div>
          <span className='prize prize-3'></span>
          <strong>50x</strong> Apollo<br/>kinopilet kahele
        </div>
        <div>
          <span className='prize prize-2'></span>
          <strong>50x</strong> 24-7fitness.ee<br/>külastus kahele
        </div>
        <div>
          <span className='prize prize-1'></span>
          <strong>273x</strong> Plokk Vichy<br/>vett
        </div>
      </div>
      <img className='bottles' src={Bottles} alt=''/>
  </>
  );
}

export default PrizeSection;