import styles from "./Input.module.css";

function Input({
    type,
    text,
    name,
    placeholder,
    handleOnChange,
    value,
    multiple,
    
}) {
    return(
        <div>
            <label htmlFor=''></label>
            <input type='text' />
        </div>
    )
    
}

export default Input