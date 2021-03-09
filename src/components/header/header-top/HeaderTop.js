import Logo from './logo/Logo';
import Addres from './addres/Addres';
import './nav/Nav';
import Nav from './nav/Nav';
import SocialLink from './social-link/SocialLink';

function HeaderTop() {
  return (
    <>
      <div className="header-top">
        <Nav />
        <Logo />
        <Addres />
        <SocialLink />
      </div>
    </>
  );
}

export default HeaderTop;
