import { useMemo } from "react";
import Scoreitems from "./Scoreitems";
import PropTypes from "prop-types";
import styles from "./Matchcell.module.css";

const Matchcell = ({
  className = "",
  rectangle10,
  rectangle9,
  matchcellAlignSelf,
}) => {
  const matchcellStyle = useMemo(() => {
    return {
      alignSelf: matchcellAlignSelf,
    };
  }, [matchcellAlignSelf]);

  return (
    <div
      className={[styles.matchcell, className].join(" ")}
      style={matchcellStyle}
    >
      <div className={styles.content}>
        <div className={styles.hometeam}>
          <img className={styles.hometeamChild} alt="" src={rectangle10} />
          <div className={styles.joined}>FC Incicta</div>
        </div>
        <Scoreitems scoreitemsPosition="relative" />
        <div className={styles.awayteam}>
          <img className={styles.hometeamChild} alt="" src={rectangle9} />
          <div className={styles.joined}>FC Salzburg</div>
        </div>
      </div>
    </div>
  );
};

Matchcell.propTypes = {
  className: PropTypes.string,
  rectangle10: PropTypes.string,
  rectangle9: PropTypes.string,

  /** Style props */
  matchcellAlignSelf: PropTypes.any,
};

export default Matchcell;
