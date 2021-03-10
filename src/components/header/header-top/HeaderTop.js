import Logo from './logo/Logo';
import Nav from './nav/Nav';
import SocialLinks from './social-links/SocialLinks';
import Address from './address/Address';
import './HeaderTop.css'

function HeaderTop() {
  return (
    <>
      <div className="header__top">
        <Nav />
        <Logo />
        <div className="header__top-right"> 
          <Address />
          <SocialLinks />
        </div>
      </div>
    </>
  );
}

export default HeaderTop;
