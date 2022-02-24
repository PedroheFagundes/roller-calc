import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';

const Header = () => {

  const [openedNavBar, setOpenedNavBar] = useState(false);
  const [chosenPage, setChosenPage] = useState("Calculator");

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
            <li onClick={() => toggleNavBar()}><Link to="/" onClick={() => setChosenPage(("Calculator"))}>Calculator</Link></li>
            <li onClick={() => toggleNavBar()}><Link to="/better-coin" onClick={() => setChosenPage(("Better Coin to Mine"))}>Better Coin to Mine</Link></li>
            <li className='soon'>Data Tables <span>soon</span></li>
          </ul>
          : <h1 className='chosen-page'>{chosenPage}</h1>}
        <ul className='web-navbar'>
          <li><Link to="/">Calculator</Link></li>
          <li><Link to="/better-coin">Better Coin to Mine</Link></li>
          <li className='soon'>Data Tables <span>soon</span></li>
        </ul>
      </div>
    </HeaderArea>
  );
}

export default Header;