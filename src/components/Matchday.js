import Matchcell from "./Matchcell";
import PropTypes from "prop-types";
import styles from "./Matchday.module.css";

const Matchday = ({
  className = "",
  rectangle10,
  rectangle9,
  rectangle101,
  rectangle91,
  rectangle102,
  rectangle92,
  rectangle103,
  rectangle93,
}) => {
  return (
    <div className={[styles.matchday, className].join(" ")}>
      <div className={styles.headliner}>
        <div className={styles.date}>
          <span className={styles.friday}>{`Friday `}</span>
          <span className={styles.august}>2 August</span>
        </div>
        <div className={styles.time}>20:30</div>
      </div>
      <Matchcell
        rectangle10="/rectangle-10@2x.png"
        rectangle9="/rectangle-91@2x.png"
        matchcellAlignSelf="stretch"
      />
      <Matchcell
        rectangle10="/rectangle-10@2x.png"
        rectangle9="/rectangle-91@2x.png"
        matchcellAlignSelf="stretch"
      />
      <div className={styles.headliner}>
        <div className={styles.date}>
          <span className={styles.friday}>{`Friday `}</span>
          <span className={styles.august}>2 August</span>
        </div>
        <div className={styles.time}>20:30</div>
      </div>
      <Matchcell
        rectangle10="/rectangle-10@2x.png"
        rectangle9="/rectangle-91@2x.png"
        matchcellAlignSelf="stretch"
      />
      <Matchcell
        rectangle10="/rectangle-10@2x.png"
        rectangle9="/rectangle-91@2x.png"
        matchcellAlignSelf="stretch"
      />
    </div>
  );
};

Matchday.propTypes = {
  className: PropTypes.string,
  rectangle10: PropTypes.string,
  rectangle9: PropTypes.string,
  rectangle101: PropTypes.string,
  rectangle91: PropTypes.string,
  rectangle102: PropTypes.string,
  rectangle92: PropTypes.string,
  rectangle103: PropTypes.string,
  rectangle93: PropTypes.string,
};

export default Matchday;
