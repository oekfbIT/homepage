import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Scoreitems.module.css";

const Scoreitems = ({ className = "", scoreitemsPosition, homeScore, awayScore }) => {
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
          <div className={styles.div}>{homeScore}</div>
          {/* Home Score */}
        </div>

        <div className={styles.scoreitem1}>
          <div className={styles.div}>:</div>
          {/* Colon and Away Score */}
        </div>

        <div className={styles.scoreitem2}>
          <div className={styles.div}>{awayScore}</div>
          {/* Colon and Away Score */}
        </div>
      </div>
  );
};

Scoreitems.propTypes = {
  className: PropTypes.string,

  /** Style props */
  scoreitemsPosition: PropTypes.any,
  homeScore: PropTypes.number.isRequired, // Home score prop
  awayScore: PropTypes.number.isRequired, // Away score prop
};

export default Scoreitems;
