import React from 'react';
import './assets/app.scss';
import RegForm from './ContentRegForm';
import Rules from './Rules';
import PrizesIntro from './PrizesIntro';
import Navigation from './Navigation';
import PrizeSection from './PrizeSection';
import WinnersList from './WinnersList';

const App: React.FC = () => {

return (
    <div className='main-app'>
      <div className='app-container'>
        <div className='content'>
          <div className='screen-section screen-section--register'>
            <div className='screen-section__content' id='welcome'>
              <Navigation/>
              <div className='register-form'>
                <RegForm></RegForm>
              </div>
              <PrizesIntro/>
            </div>
          </div>
          <div className='screen-section screen-section--prizes'>
            <div className='screen-section__content'>
              <PrizeSection/>
            </div>
          </div>
          <div className='screen-section screen-section--winners' id='winz'>
            <div className='screen-section__content winners'>
              <WinnersList/>
            </div>
          </div>
          <div className='screen-section screen-section--rules' id='rules'>
            <div className='screen-section__content'>
              <Rules/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;