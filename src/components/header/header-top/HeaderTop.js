import Logo from './logo/Logo';
import Nav from './nav/Nav';
import SocialLinks from './social-links/SocialLinks';
import Address from './address/Address';

function HeaderTop() {
  return (
    <>
      <div className="header-top">
        <Nav />
        <Logo />
        <Address />
        <SocialLinks />
      </div>
    </>
  );
}

export default HeaderTop;
