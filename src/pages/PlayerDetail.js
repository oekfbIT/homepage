import PlayerHeader from "../components/PlayerHeader";
import Stats from "../components/Stats";
import Matchday from "../components/Matchday";
import RankingTabellele from "../components/RankingTabellele";
import styles from "./PlayerDetail.module.css";
import FooterMain from "../components/FooterMain";
import BundeslanderSelectionRow from "../components/BundeslanderSelectionRow";

const PlayerDetail = () => {
  return (
    <div className={styles.playerDetail}>
      <img
        className={styles.navigationbarIcon}
        alt=""
        src="/navigationbar.svg"
      />
        <BundeslanderSelectionRow />

        <PlayerHeader
        flag="/flag8@2x.png"
        logo="/logo2@2x.png"
        playerimgBackgroundImage="url('/playerimg@3x.png')"
      />
      <div className={styles.kaderWrapper}>
        <div className={styles.kader}>Kader</div>
      </div>
      <div className={styles.spielerStatistikParent}>
        <div className={styles.kader}>{`Spieler Statistik `}</div>
        <div className={styles.season20232024}>Season 2023-2024</div>
      </div>
      <Stats />
      <div className={styles.spielerStatistikParent}>
        <div className={styles.kader}>{`Spiele `}</div>
        <div className={styles.season20232024}>Season 2024-2025</div>
      </div>
      <Matchday
        rectangle10="/rectangle-101@2x.png"
        rectangle9="/rectangle-91@2x.png"
        rectangle101="/rectangle-101@2x.png"
        rectangle91="/rectangle-91@2x.png"
        rectangle102="/rectangle-101@2x.png"
        rectangle92="/rectangle-91@2x.png"
        rectangle103="/rectangle-101@2x.png"
        rectangle93="/rectangle-91@2x.png"
      />
      <div className={styles.spielerStatistikParent}>
        <div className={styles.kader}>Tabelle</div>
        <div className={styles.season20232024}>Season 2024-2025</div>
        <RankingTabellele
          logo="/logo3@2x.png"
          logo1="/logo4@2x.png"
          logo2="/logo4@2x.png"
          logo3="/logo4@2x.png"
          logo4="/logo4@2x.png"
        />
      </div>
      <FooterMain/>
    </div>
  );
};

export default PlayerDetail;
