import location from './../../../../assets/images/location.svg';
import './Address.css'

function Address() {
  return (
    <div className="header__address">
      <img className="header__location-img" src={location} alt="location" />
      <p className="header__location">Москва,  ул. Науки  25</p>
    </div>
  );
}

export default Address;
