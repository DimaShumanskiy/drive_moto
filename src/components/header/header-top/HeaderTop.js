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
        <Address />
        <SocialLinks />
      </div>
    </>
  );
}

export default HeaderTop;
