import Nav from './Nav.css';

function Nav() {
  return (
    <div className="header__nav">
      <ul className="header__list">
        <li className="header__list-item">Магазины</li>
        <li className="header__list-item">Акции</li>
        <li className="header__list-item">Доставка и оплата</li>
      </ul>
    </div>
  );
}

export default Nav;
