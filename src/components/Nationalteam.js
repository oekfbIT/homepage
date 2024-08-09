import NationalrankingItem from "./NationalrankingItem";
import PropTypes from "prop-types";
import styles from "./Nationalteam.module.css";

const Nationalteam = ({ className = "" }) => {
  return (
    <div className={[styles.nationalteam, className].join(" ")}>
      <div className={styles.title}>
        <div className={styles.nationalMannschaft}>National Mannschaft</div>
      </div>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-5@2x.png" />
        <div className={styles.nationalRanglisteWrapper}>
          <div className={styles.nationalRangliste}>
            <div className={styles.nationalrankingitemParent}>
              <NationalrankingItem
                rank="1."
                flag="/flag@2x.png"
                coumtry="Tschechien"
                points="4256"
              />
              <NationalrankingItem
                rank="2."
                flag="/flag1@2x.png"
                coumtry="Rumänien"
                points="3527"
              />
              <NationalrankingItem
                rank="3."
                flag="/flag2@2x.png"
                coumtry="Bosnien"
                points="2723"
              />
              <NationalrankingItem
                rank="4."
                flag="/flag3@2x.png"
                coumtry="Kazakhstan"
                points="2564"
              />
              <NationalrankingItem
                rank="5."
                flag="/flag4@2x.png"
                coumtry="Russland"
                points="2549"
              />
              <NationalrankingItem
                rank="6."
                flag="/flag5@2x.png"
                coumtry="Ungarn"
                points="2510"
              />
              <div className={styles.nationalrankingitem}>
                <div className={styles.rank}> ...</div>
                <img className={styles.flagIcon} alt="" src="/flag6@2x.png" />
                <div className={styles.coumtry}>Tschechien</div>
                <div className={styles.points}>4256</div>
              </div>
              <NationalrankingItem
                rank="26. "
                flag="/flag7@2x.png"
                coumtry="Österreich"
                points="338"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.euro2022EndetFrhParent}>
          <div className={styles.euro2022Endet}>Euro 2022 endet früh!</div>
          <div className={styles.dasSterreichischeKleinfeldContainer}>
            <p className={styles.dasSterreichischeKleinfeld}>
              Das Österreichische Kleinfeld Fußball Nationalteam muss trotz
              guter Leistungen und starken Auftritten die Segel bereits nach der
              Vorrunde streichen.
            </p>
            <p className={styles.dasSterreichischeKleinfeld}>&nbsp;</p>
            <p className={styles.dasSterreichischeKleinfeld}>
              Die kurze Vorbereitungszeit und eine komplett neue Mannschaft, gab
              dem Team nicht mehr die Möglichkeit sich auf ein solch hohes
              Niveau vorzubereiten.
            </p>
            <p className={styles.dasSterreichischeKleinfeld}>&nbsp;</p>
            <p className={styles.dasSterreichischeKleinfeld}>
              Dennoch gibt es ein positives Fazit: In allen Spielen war
              Österreich die feldüberlegene Mannschaft. Leider jedoch nicht 50
              sondern nur 45 Minuten lang.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Nationalteam.propTypes = {
  className: PropTypes.string,
};

export default Nationalteam;
