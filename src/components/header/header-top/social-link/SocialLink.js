import like from './../../../../assets/images/like.svg';
import person from './../../../../assets/images/person.svg';
import basket from './../../../../assets/images/basket.svg';
import './SocialLink.css'

function SocialLink() {
  return (
    <>
      <img className="header__social-link" src={like} alt="like" />
      <img className="header__social-link" src={person} alt="person" />
      <img className="header__social-link" src={basket} alt="basket" />
    </>

  );
}

export default SocialLink;
