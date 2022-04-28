import React, { useState, useEffect } from 'react';
import WinnersTitle from './assets/WinnersTitle.png'
import { postData } from '../tools/tools';
import { API } from '../models/models';

type prizeNumber = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
interface Winners {
  name: string
  surname: string
  prize_type: prizeNumber
}
interface WinnersResponse {
  status: 1 | 0,
  winners: Winners[],
}

const prizeNames: { [key in prizeNumber] : string } = {
  '0' : 'Demo prize',
  '1' : '1',
  '2' : '2',
  '3' : '3',
  '4' : '4',
  '5' : '5',
  '6' : '6',
  '7' : '7',
  '8' : '8',
  '9' : '9',
  '10': '10'
}

const WinnersList: React.FC = () => {
  const [winners, setWinners] = useState<Winners[]>([]);

  const drawWinners = (prizeType: prizeNumber) => {
    const filtered = winners.filter( w => w.prize_type === prizeType);
    if(filtered.length) {
      return <div><h3>{prizeNames[prizeType]}</h3>{ filtered.map( (winner, i) => <span>{winner.name} {winner.surname}<br/></span>) }</div>
    }
    return <></>;
  }
  const loadWinners = () => {
    postData(API, {action: 'winners'})
    .then((resp: WinnersResponse) => {
      setWinners(resp.winners)
    })
  }
  useEffect(loadWinners,[]);
  return (
    <>
      <div className='winners--title'>
        <img src={WinnersTitle} alt=''/>
      </div>
      <div className='winners--list'>
        { drawWinners('0') }
        { drawWinners('1') }
        { drawWinners('2') }
        { drawWinners('3') }
        { drawWinners('4') }
        { drawWinners('5') }
        { drawWinners('6') }
        { drawWinners('7') }
        { drawWinners('8') }
        { drawWinners('9') }
        { drawWinners('10') }
      </div>
      <div className='winners--contact'>
        <h3>Võtame võitjatega ühendust</h3>
      </div>
    </>
  );
}

export default WinnersList;