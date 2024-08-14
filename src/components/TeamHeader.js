import PropTypes from "prop-types";
import styles from "./TeamHeader.module.css";

const TeamHeader = ({ className = "", logo, name, league, membership_since, average_age, foundation_year, trikot }) => {
  return (
      <div className={[styles.teamheader, className].join(" ")}>
        <div className={styles.left}>
          <img className={styles.logoIcon} alt="" src={logo} />
          <div className={styles.name}>{name}</div>
        </div>
        <div className={styles.middle}>
          <div className={styles.liga}>{league}</div>
          <div className={styles.liga}>{membership_since}</div>
          <div className={styles.liga}>{average_age}</div>
          <div className={styles.liga}>{foundation_year}</div>
          <div className={styles.socials}>
            <a className={styles.entypoSocialfacebookWithCi}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </a>
            <a className={styles.entypoSocialtwitterWithCir}>
              <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            </a>
            <a className={styles.entypoSocialinstagramWithC}>
              <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <img className={styles.homeIcon} alt="Home Trikot" src={trikot.home} />
          <img className={styles.homeIcon} alt="Away Trikot" src={trikot.away} />
        </div>
      </div>
  );
};

TeamHeader.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string,
  name: PropTypes.string.isRequired,
  league: PropTypes.string.isRequired,
  membership_since: PropTypes.string.isRequired,
  average_age: PropTypes.string.isRequired,
  foundation_year: PropTypes.string.isRequired,
  trikot: PropTypes.shape({
    home: PropTypes.string.isRequired,
    away: PropTypes.string.isRequired,
  }).isRequired,
};

export default TeamHeader;
