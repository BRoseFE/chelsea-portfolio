import styles from "shared/components/button/Button.module.css"

function Button({ text, type="button", onClick, disabled = false, ...rest }) {
    return(
        <button
            type={type}
            className={styles.button}
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {text}
        </button>
    );
}

export default Button;