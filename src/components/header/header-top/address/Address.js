import location from './../../../../assets/images/location.svg';
import './Address.css'

function Address() {
  return (
    <>
      <img className="location" src={location} alt="location" />
      <p>Москва,  ул. Науки  25</p>
    </>

  );
}

export default Address;
