import "./СategoryСard.css";

function CategoryCard(props){
    return(
        <div className="category-card">
            <div>
                <h3>{props.title}</h3>
                <a href={props.categoryLink}>Подробнее</a>
            </div>
            <img src={props.src} alt="imfge category"/>
        </div>
    );
};

export default CategoryCard;