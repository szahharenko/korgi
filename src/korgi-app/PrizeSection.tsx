import React from 'react';
import Bottles from './assets/Vichy_kampaaania_pudelid.png'

interface Props {}

const PrizeSection: React.FC<Props> = () => {
  return (
    <>
      <div className='prize-info'>
        <strong>1x</strong> 2000 € ESTRAVELI kinkekaart<br/>
        <strong>3x</strong> Apple Watch SE GPS<br/>
        <strong>5x</strong> Fjällräven seljakott
      </div>
      <div className='prizes__table'>
        <div>
          <span className='prize no-img'></span>
          <strong>10x</strong> Vichy telk
        </div>
        <div>
          <span className='prize no-img'></span>
          <strong>30x</strong> Vichy saunalina
        </div>
        <div>
          <span className='prize no-img'></span>
          <strong>50x</strong> Vichy sokid
        </div>
      </div>
      <div className='prizes__table prizes__table--small'>
        <div>
          <span className='prize no-img'></span>
          <strong>30x</strong> Membo<br/>puuviljakast
        </div>
        <div>
          <span className='prize no-img'></span>
          <strong>100x</strong> Apollo<br/>kinopilet
        </div>
        <div>
          <span className='prize no-img'></span>
          <strong>50x</strong> MyFitness<br/>ühekordne külastus
        </div>
        <div>
          <span className='prize no-img'></span>
          <strong>273x</strong> Plokk Vichy<br/>vett
        </div>
      </div>
      <img className='bottles' src={Bottles} alt=''/>
  </>
  );
}

export default PrizeSection;