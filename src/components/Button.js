import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({
                  className = "",
                  button,
                  icon,
                  showIcon,
                  buttonBackgroundColor,
                  buttonPosition,
                  buttonWidth,
                  buttonFontWeight,
                  href, // Add href prop
                }) => {
  const buttonStyle = useMemo(() => {
    return {
      backgroundColor: buttonBackgroundColor,
      position: buttonPosition,
      width: buttonWidth,
    };
  }, [buttonBackgroundColor, buttonPosition, buttonWidth]);

  const button1Style = useMemo(() => {
    return {
      fontWeight: buttonFontWeight,
    };
  }, [buttonFontWeight]);

  const content = (
      <>
        <div className={styles.button} style={button1Style}>
          {button}
        </div>
        {showIcon && <img className={styles.icon} alt="" src={icon} />}
      </>
  );

  return href ? (
      <a
          href={href}
          className={[styles.sizemediumStylecontained, className].join(" ")}
          style={buttonStyle}
      >
        {content}
      </a>
  ) : (
      <button
          className={[styles.sizemediumStylecontained, className].join(" ")}
          style={buttonStyle}
      >
        {content}
      </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  button: PropTypes.string,
  icon: PropTypes.string,
  showIcon: PropTypes.bool,

  /** Style props */
  buttonBackgroundColor: PropTypes.any,
  buttonPosition: PropTypes.any,
  buttonWidth: PropTypes.any,
  buttonFontWeight: PropTypes.any,

  /** New href prop */
  href: PropTypes.string,
};

export default Button;
