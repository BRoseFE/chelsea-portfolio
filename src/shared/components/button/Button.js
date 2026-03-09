import styles from "shared/components/button/Button.module.css"

function Button({ text, type="button", onClick, ...rest }) {

    const handleClick = () => {
        const user = "chelsea_brooks";
        const domain = "outlook";
        const tld = "com";

        const email = `${user}@${domain}.${tld}`;
        window.location.href = `mailto:${email}`;
    };

    return(
        <button
            type={type}
            className={styles.button}
            onClick={handleClick}
            {...rest}
        >
            {text}
        </button>
    );
}

export default Button;