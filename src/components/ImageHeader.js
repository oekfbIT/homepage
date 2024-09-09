import PropTypes from "prop-types";
import styles from "./ImageHeader.module.css";

const ImageHeader = ({ className = "" }) => {
  return (
    <div className={[styles.imageheader, className].join(" ")}>
      <img className={styles.image1Icon} alt="" src="/brandingheader.png" />
      <div className={styles.info}>
        <div className={styles.winBigPrizesAsPartOfBundParent}>
          <div className={styles.winBigPrizesContainer}>
            <p className={styles.winBigPrizes}>
              Saisonstart
            </p>
            <p className={styles.toCelebrateBundesliga}>
              Wichtiges update bis 8.9.2024,
            </p>
            <p className={styles.toCelebrateBundesliga}>
              Sehr geehrte Mannschaftsleiter,,
            </p>
          </div>
          <div className={styles.toCelebrateBundesliga}>
            <p>
              wie sie sicher schon gemerkt haben, gab es immer wieder Updates und kleine technische Probleme auf der
              Homepage.
              Um einen fehlerlosen Saisonstart zu ermöglichen wird der Start um eine Woche auf den 22.09.2024
              verschoben.
              Der Spielplan wird am 11.09.2024 für alle ersichtlich sein.
            </p>
            <p>
              Wir entschuldigen uns und bitten um Verständnis.
            </p>

            <p>
              In diesem Zuge wollen wir auch alle Teamleiter noch einmal daran erinnern, dass sie bitte ihre Spieler spielberechtigen um für das erste Spiel bereit zu sein.
            </p>

            <p>
              Desweiteren wollen wir noch einmal erwähnen, dass das Design und die Funktionen der Homepage noch nicht Final sind, ein Spielbetrieb jedoch möglich ist.
              In Zukunft wird die Bearbeitung von Spieleranmeldungen, Nachrichten etc. viel schneller erfolgen und euch die Arbeit erleichtert.
            </p>

            <p>
              Vor Saisonstart kommt ein Bericht auf der Homepage wo euch die Änderungen im Verband vorgestellt werden.
              Außerdem wird es noch einmal eine kleine Anpassung in der Ligaordnung geben.

            </p>

            <p>
              Wir freuen uns auf die Saison, wünschen allen einen guten Start am 22.09.2024.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ImageHeader.propTypes = {
  className: PropTypes.string,
};

export default ImageHeader;
