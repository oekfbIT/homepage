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
              Willkommen im neuen System
            </p>
          </div>
          <div className={styles.toCelebrateBundesliga}>
            Wir freuen uns, Ihnen mitteilen zu können, dass unser System mit neuen Funktionen und erweiterten Steuerungsmöglichkeiten aktualisiert wird, um Ihre Prozesse zu automatisieren und zu optimieren. Bitte beachten Sie, dass die neuen Login-Informationen am 23. August 2024 bereitgestellt werden. Bleiben Sie gespannt auf weitere Informationen, während wir die Einführung dieser neuen Plattform vorbereiten, die Effizienz und Benutzerfreundlichkeit erheblich steigern wird.
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
