import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./PlayerHeader.module.css";

const PlayerHeader = ({
  className = "",
  flag,
  logo,
  playerimgBackgroundImage,
}) => {
  const playerimgStyle = useMemo(() => {
    return {
      backgroundImage: playerimgBackgroundImage,
    };
  }, [playerimgBackgroundImage]);

  return (
    <div className={[styles.playerheader, className].join(" ")}>
      <div className={styles.playerimg} style={playerimgStyle}>
        <img className={styles.flagIcon} alt="" src={flag} />
      </div>
      <div className={styles.content}>
        <div className={styles.statusSpielberechtigt}>Jahrgang: 1985</div>
        <div className={styles.statusSpielberechtigt}>Spieler ID: 14569</div>
        <div className={styles.statusSpielberechtigt}>
          Status: Spielberechtigt
        </div>
        <div className={styles.statusSpielberechtigt}>
          Position: Feldspieler
        </div>
        <div className={styles.statusSpielberechtigt}>
          Mannschaft: 
          <a
            className={styles.fcInvicta}
            href={`https://www.oekfb.com/?action=showTeam&data=396`}
            target="_blank"
          >
            <span className={styles.fcInvicta1}>FC Invicta</span>
          </a>
        </div>
        <div className={styles.statusSpielberechtigt}>
          Nationalität: Italien
        </div>
      </div>
      <div className={styles.left}>
        <img className={styles.logoIcon} alt="" src={logo} />
        <div className={styles.name}>FC Invicta</div>
      </div>
    </div>
  );
};

PlayerHeader.propTypes = {
  className: PropTypes.string,
  flag: PropTypes.string,
  logo: PropTypes.string,

  /** Style props */
  playerimgBackgroundImage: PropTypes.any,
};

export default PlayerHeader;
