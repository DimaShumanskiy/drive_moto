import "./Search.css";
import RadioButton from "./RadioButton.js";
import Input from "../Input/Input.js"
import Button from "../Button/Button.js";



function Search(){
    return(
        <div className="search container">
            <div className="type-search">
                {/* наверное можно было обайтись без компонентов_radiobutton, но пускай будет. тут я изучал Propsы */}
                <RadioButton id="radio-1" value="1" text="Поиск по номеру"/>
                <RadioButton id="radio-2" value="2" text="Поиск по марке"/>                        
                <RadioButton id="radio-3" value="3" text="Поиск по названию товара"/>
            </div>
            <div className="search-input-text">
                <Input class="input-search"/>
                <Button class="search-button" text="ИСКАТЬ"/>
            </div>
        </div>
    );
};

export default Search;