import HeaderBottom from './header-bottom/HeaderBottom';
import HeaderTop from './header-top/HeaderTop';
import './header.css';

function Header() {
  return (
    <>
      <div className="header">
        <HeaderTop />
        <HeaderBottom />
      </div>
    </>
  );
}

export default Header;
