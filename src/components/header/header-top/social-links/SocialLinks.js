import person from './../../../../assets/images/person.svg';
import basket from './../../../../assets/images/basket.svg';
import './SocialLinks.css'
import Like from '../../../images/like/Like';

function SocialLinks() {
  return (
    <div className="header__social-list">
      <Like />
      <img className="header__social-links" src={person} alt="person" />
      <img className="header__social-links" src={basket} alt="basket" />
    </div>
      
  );
}

export default SocialLinks;
