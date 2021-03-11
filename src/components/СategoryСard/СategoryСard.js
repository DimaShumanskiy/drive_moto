import s from "./СategoryСard.module.css";

function CategoryCard(props){
    return(
        <div className={s.categoryCard}>
            <div>
                <h3>{props.title}</h3>
                <a href={props.categoryLink}>Подробнее</a>
            </div>
            <img src={props.src} alt="imfge category"/>
        </div>
    );
};

export default CategoryCard;