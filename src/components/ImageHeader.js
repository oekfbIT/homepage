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
              Große Website-Aktualisierung in Kalenderwoche 44,
            </p>
            <p className={styles.toCelebrateBundesliga}>
              Sehr geehrte Mannschaftsleiter,
            </p>
          </div>
          <div className={styles.toCelebrateBundesliga}>
            <p>
              Wie lange versprochen, wird unsere Website in Kalenderwoche 44 ein großes Update erhalten! Es erwarten
              euch viele neue Features und detaillierte Statistiken.
              Auch die Spielberichte werden zukünftig sichtbar sein, zusammen mit vielen weiteren spannenden Funktionen.
            </p>
            <p>
              Hinter der Website steckt viel Arbeit und ein komplexes System, das im Hintergrund reibungslos laufen
              muss. Leider kam es in den letzten Wochen zu einigen unerwarteten Fehlern, die behoben werden mussten,
              wodurch sich die Einführung der neuen Features etwas verzögerte.
              Wir entschuldigen uns dafür aufrichtig und bitten um Verständnis – wir benötigen noch etwa zwei Wochen, um
              alles perfekt zu finalisieren.
            </p>

            <p>
              Vielen Dank für eure Geduld und euer Verständnis!
            </p>
            <p>
              Euer ÖKFB-Team
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
