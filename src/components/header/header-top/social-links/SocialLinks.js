import person from './../../../../assets/images/person.svg';
import basket from './../../../../assets/images/basket.svg';
import './SocialLinks.css'
import Like from '../../../images/like/Like';

function SocialLinks() {
  return (
    <ul className="header__social social">
      <li className="social__list-like">
        <Like />
      </li>
      <li className="social__list-person">
        <img className="social__img-2" src={person} alt="person" />
      </li>
      <li className="social__list-basket">
        <img className="social__img-3" src={basket} alt="basket" />
        <span className="social-links-caunt">1</span>
      </li>
    </ul>
      
  );
}

export default SocialLinks;
