import TopRow from "./TopRow";
import RankingCell from "./RankingCell";
import PropTypes from "prop-types";
import styles from "./RankingTabellele.module.css";

const RankingTabellele = ({
  className = "",
  logo,
  logo1,
  logo2,
  logo3,
  logo4,
}) => {
  return (
    <div className={[styles.rankingTabellele, className].join(" ")}>
      <TopRow logo="/logo11@2x.png" contentPadding="20px 0px" />
      <RankingCell logo="/rectangle-101@2x.png" />
      <RankingCell logo="/rectangle-101@2x.png" />
      <RankingCell logo="/rectangle-101@2x.png" />
      <RankingCell logo="/rectangle-101@2x.png" />
    </div>
  );
};

RankingTabellele.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string,
  logo1: PropTypes.string,
  logo2: PropTypes.string,
  logo3: PropTypes.string,
  logo4: PropTypes.string,
};

export default RankingTabellele;
