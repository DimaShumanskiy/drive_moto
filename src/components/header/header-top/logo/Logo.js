import logo from './../../../../assets/images/logo.svg';
import './Logo.css';

function Logo() {
  return (
    <div className="header__logo">
      <img className="header__logo-img" src={logo} alt="logo" />
    </div>
    
  );
}

export default Logo;
