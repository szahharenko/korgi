import React from 'react';
import Bottles from './assets/Vichy_kampaaania_pudelid.png'

interface Props {}

const PrizeSection: React.FC<Props> = () => {
  return (
    <>
      <div className='prize-info'>
        1x 2000 € ESTRAVELI kinkekaart<br/>
        3x Apple Watch SE GPS<br/>
        5x Fjällräven seljakott
      </div>
      <div className='prizes__table'>
        <div>
          <span className='prize no-img'></span>
          10x Vichy telk
        </div>
        <div>
          <span className='prize no-img'></span>
          30x Vichy saunalina
        </div>
        <div>
          <span className='prize no-img'></span>
          50x Vichy sokid
        </div>
      </div>
      <div className='prizes__table prizes__table--small'>
        <div>
          <span className='prize no-img'></span>
          30x Membo<br/>puuviljakast
        </div>
        <div>
          <span className='prize no-img'></span>
          100x Apollo<br/>kinopilet
        </div>
        <div>
          <span className='prize no-img'></span>
          50x MyFitness<br/>ühekordne külastus
        </div>
        <div>
          <span className='prize no-img'></span>
          273x Plokk Vichy<br/>vett
        </div>
      </div>
      <img className='bottles' src={Bottles} alt=''/>
  </>
  );
}

export default PrizeSection;