import RadioButton from "./RadioButton.js";
function Search(){
    return(
        <div className="search">
            <div className="type-search">
                {/* <div class="form_radio_btn">
	                <input id="radio-1" type="radio" name="radio" value="1" />
	                <label for="radio-1">Поиск по номеру</label>
                </div>
 
                <div class="form_radio_btn">
	                <input id="radio-2" type="radio" name="radio" value="2" />
	                <label for="radio-2">Поиск по марке</label>
                </div>
 
                <div class="form_radio_btn">
	                <input id="radio-3" type="radio" name="radio" value="3" />
	                <label for="radio-3">Поиск по названию товара</label>
                </div> */}
                <RadioButton id="radio-1" value="1" text="Поиск по номеру"/>
                <RadioButton id="radio-2" value="2" text="Поиск по марке"/>
                <RadioButton id="radio-3" value="3" text="Поиск по названию товара"/>
            </div>
            <div className="search-input-text">
                <input type="text"/>
                <button>Искать</button>
            </div>
        </div>
    );
};

export default Search;