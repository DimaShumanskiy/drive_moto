import Card from "./Card.css"


function Card() {
   return (
     <>
       <div className="Card">
         <p className='Card__text'>{props.CardText}</p>
         
       </div>
     </>
   );
 }
 
 export default Card;
 