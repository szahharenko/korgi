import React, { useState, useEffect } from 'react';
import WinnersTitle from './assets/WinnersTitle.png'
import { postData } from '../tools/tools';
import { API } from '../models/models';

interface Winner {
  title: string,
  names: string[]
}
interface WinnersResponse {
  status: 1 | 0,
  winners: Winner[]
}

const WinnersList: React.FC = () => {
  const [winners, setWinners] = useState<Winner[]>([]);

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
          {winners.map( (winner, i) =>
            <div key={`winner${i}`}>
              <h3>{winner.title}</h3>
              {winner.names.map((name, x) =><span  key={`winner${i}${x}`}>{name}<br/></span>)}
            </div>
          )}
      </div>
      <div className='winners--contact'>
        <h3>Võtame võitjatega ühendust</h3>
      </div>
    </>
  );
}

export default WinnersList;