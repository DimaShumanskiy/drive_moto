import './Nav.css';

function Nav () {
  return (
    <nav className="header__nav">
      <ul className="header__list">
        <li className="header__list-item">Магазины</li>
        <li className="header__list-item">Акции</li>
        <li className="header__list-item">Доставка и оплата</li>
      </ul>
    </nav>
  );
}

export default Nav;