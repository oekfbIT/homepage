import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Actions.module.css";

const Actions = ({
  className = "",
  frameDivBackgroundImage,
  frameDivBackgroundImage1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundImage: frameDivBackgroundImage,
    };
  }, [frameDivBackgroundImage]);

  const frameDiv1Style = useMemo(() => {
    return {
      backgroundImage: frameDivBackgroundImage1,
    };
  }, [frameDivBackgroundImage1]);

  return (
    <div className={[styles.actions, className].join(" ")}>
      <div className={styles.strafsenatWrapper} style={frameDivStyle}>
        <div className={styles.strafsenat}>Strafsenat</div>
      </div>
      <div className={styles.livescoreWrapper} style={frameDiv1Style}>
        <div className={styles.strafsenat}>Livescore</div>
      </div>
    </div>
  );
};

Actions.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameDivBackgroundImage: PropTypes.any,
  frameDivBackgroundImage1: PropTypes.any,
};

export default Actions;
