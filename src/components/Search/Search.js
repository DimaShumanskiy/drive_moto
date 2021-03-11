import s from "./Search.module.css";
import RadioButton from "./RadioButton.js";
import Input from "../Input/Input.js"
import Button from "../Button/Button.js";



function Search(){
    return(
        <div className={s.search}>
            <div className={s.typeSearch}>
                {/* наверное можно было обайтись без компонентов_radiobutton, но пускай будет. тут я изучал Propsы */}
                <RadioButton id="radio-1" value="1" text="Поиск по номеру"/>
                <RadioButton id="radio-2" value="2" text="Поиск по марке"/>                        
                <RadioButton id="radio-3" value="3" text="Поиск по названию товара"/>
            </div>
            <div className={s.searchInputText}>
                <Input class={s.inputSearch}/>
                <Button class={s.searchButton} text="ИСКАТЬ"/>
            </div>
        </div>
    );
};

export default Search;