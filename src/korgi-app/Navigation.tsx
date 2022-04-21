import React from 'react';
import { smoothScroll  } from '../tools/tools';
const Navigation: React.FC = () => {


  return (
    <div className='navigation'>
      <div className='logo'></div>
      <ul className='navigation__menu'>
          <li><a href="#prize" onClick={ e => smoothScroll(e, 'prize') }>Auhinnad</a></li>
          <li><a href="#winz" onClick={e => smoothScroll(e, 'winz')}>Võitjad</a></li>
          <li><a href="#rules" onClick={e => smoothScroll(e, 'rules')}>Tingimised</a></li>
      </ul>
    </div>
  );
}

export default Navigation;