import like from './../../../../assets/images/like.svg';
import person from './../../../../assets/images/person.svg';
import basket from './../../../../assets/images/basket.svg';
import './SocialLinks.css'

function SocialLinks() {
  return (
    <>
      <img className="header__social-links" src={like} alt="like" />
      <img className="header__social-links" src={person} alt="person" />
      <img className="header__social-links" src={basket} alt="basket" />
    </>
  );
}

export default SocialLinks;
