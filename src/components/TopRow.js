import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./TopRow.module.css";

const TopRow = ({ className = "", logo, contentPadding }) => {
  const contentStyle = useMemo(() => {
    return {
      padding: contentPadding,
    };
  }, [contentPadding]);

  return (
    <div className={[styles.toprow, className].join(" ")}>
      <div className={styles.content} style={contentStyle}>
        <div className={styles.leffblock}>
          <div className={styles.joined}>1</div>
          <div className={styles.hometeam}>
            <img className={styles.logoIcon} alt="" src={logo} />
            <div className={styles.joined1}>FC Incicta</div>
          </div>
        </div>
        <div className={styles.rightblock}>
          <div className={styles.statitem}>
            <div className={styles.matches}>Matches</div>
            <div className={styles.statvalue}>
              <div className={styles.div}>0</div>
            </div>
          </div>
          <div className={styles.statitemParent}>
            <div className={styles.statitem1}>
              <div className={styles.matches}>W</div>
            </div>
            <div className={styles.statitem2}>
              <div className={styles.matches}>D</div>
            </div>
            <div className={styles.statitem2}>
              <div className={styles.matches}>L</div>
            </div>
          </div>
          <div className={styles.statitem4}>
            <div className={styles.matches}>Tore</div>
          </div>
          <div className={styles.statitem4}>
            <div className={styles.matches}>Punkte</div>
          </div>
        </div>
      </div>
    </div>
  );
};

TopRow.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string,

  /** Style props */
  contentPadding: PropTypes.any,
};

export default TopRow;
