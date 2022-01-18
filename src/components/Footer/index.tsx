import { Link } from 'react-router-dom';
import { FooterArea } from './styled';

const Footer = () => {
  return (
    <FooterArea>
      <a href="https://rollercoin.com/?r=kxs0cdb9">
        <img src="//rollercoin.com/static/img/public_img/gen2/w728h90.gif" alt='' />
      </a>
      <div>
        <div>
          <span>RollerCalc is not associated with RollerCoin. All rights reserved to rollercoin.com.</span>
          <Link className='soon' to="/about">About RollerCalc <span>soon</span></Link>
        </div>
      </div>
    </FooterArea>
  );
}

export default Footer;