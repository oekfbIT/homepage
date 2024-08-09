import PropTypes from "prop-types";
import styles from "./NationalrankingItem.module.css";

const NationalrankingItem = ({
  className = "",
  rank,
  flag,
  coumtry,
  points,
}) => {
  return (
    <div className={[styles.nationalrankingitem, className].join(" ")}>
      <div className={styles.rank}>{rank}</div>
      <img className={styles.flagIcon} alt="" src={flag} />
      <div className={styles.coumtry}>{coumtry}</div>
      <div className={styles.points}>{points}</div>
    </div>
  );
};

NationalrankingItem.propTypes = {
  className: PropTypes.string,
  rank: PropTypes.string,
  flag: PropTypes.string,
  coumtry: PropTypes.string,
  points: PropTypes.string,
};

export default NationalrankingItem;
