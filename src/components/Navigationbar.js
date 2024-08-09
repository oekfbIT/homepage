import PropTypes from "prop-types";
import styles from "./Navigationbar.module.css";

const Navigationbar = ({ className = "" }) => {
    return (
        <div className={[styles.navigationbar, className].join(" ")}>
            <div className={styles.wrapper}>
                <a href="/">
                    <img className={styles.logoIcon} alt="" src="/group.svg"/>
                </a>
            </div>
        </div>
    );
};

Navigationbar.propTypes = {
    className: PropTypes.string,
};

export default Navigationbar;
