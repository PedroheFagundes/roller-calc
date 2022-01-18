import { useState } from 'react';
import { HeaderArea } from './styled';

const Header = () => {

  const [openedNavBar, setOpenedNavBar] = useState(false);

  const toggleNavBar = () => {
    openedNavBar ? setOpenedNavBar(false) : setOpenedNavBar(true);
  }

  return (
    <HeaderArea>
      <div>
        <div className="logo">
          <span>roller<strong>CALC</strong></span>
          <div className='burguer-icon' onClick={() => toggleNavBar()}><div></div><div></div><div></div></div>
        </div>
        {openedNavBar ?
          <ul>
            <li onClick={() => toggleNavBar()}>Calculator</li>
            <li className='soon'>Better Coin to Mine <span>soon</span></li>
            <li className='soon'>Data Tables <span>soon</span></li>
            <li className='soon'>Strategies <span>soon</span></li>
          </ul>
          : <div className='chosen-page'>Calculator</div>}
        <ul className='web-navbar'>
          <li>Calculator</li>
          <li className='soon'>Better Coin to Mine <span>soon</span></li>
          <li className='soon'>Data Tables <span>soon</span></li>
          <li className='soon'>Strategies <span>soon</span></li>
        </ul>
      </div>
    </HeaderArea>
  );
}

export default Header;