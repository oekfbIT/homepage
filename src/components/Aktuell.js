import Actions from "./Actions";
import PropTypes from "prop-types";
import styles from "./Aktuell.module.css";

const Aktuell = ({ className = "" }) => {
  return (
    <div className={[styles.aktuell, className].join(" ")}>
      <div className={styles.title}>
        <div className={styles.aktuell1}>Aktuell</div>
      </div>
      <Actions
        frameDivBackgroundImage="url('/frame-11@3x.png')"
        frameDivBackgroundImage1="url('/frame-12@3x.png')"
      />
    </div>
  );
};

Aktuell.propTypes = {
  className: PropTypes.string,
};

export default Aktuell;
