import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Scoreitems.module.css";

const Scoreitems = ({ className = "", scoreitemsPosition }) => {
  const scoreitemsStyle = useMemo(() => {
    return {
      position: scoreitemsPosition,
    };
  }, [scoreitemsPosition]);

  return (
    <div
      className={[styles.scoreitems, className].join(" ")}
      style={scoreitemsStyle}
    >
      <div className={styles.scoreitem}>
        <div className={styles.div}>0</div>
      </div>
      <div className={styles.scoreitem1}>
        <div className={styles.div}>0</div>
      </div>
    </div>
  );
};

Scoreitems.propTypes = {
  className: PropTypes.string,

  /** Style props */
  scoreitemsPosition: PropTypes.any,
};

export default Scoreitems;
