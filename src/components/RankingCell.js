import StatItem from "./StatItem";
import PropTypes from "prop-types";
import styles from "./RankingCell.module.css";

const RankingCell = ({ className = "", logo }) => {
  return (
    <div className={[styles.rankingCell, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.leffblock}>
          <div className={styles.joined}>1</div>
          <div className={styles.hometeam}>
            <img className={styles.logoIcon} alt="" src={logo} />
            <div className={styles.joined1}>FC Incicta</div>
          </div>
        </div>
        <div className={styles.rightblock}>
          <StatItem
            statItemWidth="50px"
            statvalueAlignSelf="stretch"
            statvalueWidth="unset"
            divFlex="1"
          />
          <div className={styles.statitemParent}>
            <StatItem
              statItemWidth="unset"
              statvalueAlignSelf="stretch"
              statvalueWidth="unset"
              divFlex="unset"
            />
            <StatItem
              statItemWidth="unset"
              statvalueAlignSelf="stretch"
              statvalueWidth="unset"
              divFlex="unset"
            />
            <StatItem
              statItemWidth="unset"
              statvalueAlignSelf="stretch"
              statvalueWidth="unset"
              divFlex="unset"
            />
          </div>
          <StatItem
            statItemWidth="25px"
            statvalueAlignSelf="unset"
            statvalueWidth="50px"
            divFlex="unset"
          />
          <StatItem
            statItemWidth="50px"
            statvalueAlignSelf="unset"
            statvalueWidth="50px"
            divFlex="1"
          />
        </div>
      </div>
    </div>
  );
};

RankingCell.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string,
};

export default RankingCell;
