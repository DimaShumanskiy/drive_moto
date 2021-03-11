import s from "./RadioButton.module.css";

function RadioButton(props){
    return(
        <div className={s.form_radio_btn}>
	        <input id={props.id} type="radio" name="radio" value={props.value} />
	        <label for={props.id}>{props.text}</label>
        </div>
    );
}

export default RadioButton;