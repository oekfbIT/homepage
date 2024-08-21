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
              Team Login Verzögerung,
            </p>
          </div>
          <div className={styles.toCelebrateBundesliga}>
            Liebe ÖKFB Mitglieder,
            Aufgrund der großen Umstellungen kommt es zu leichten Verzögerungen. Die Login Daten der Teams werden im Laufe der Woche an die angegebene E-Mail Adresse versendet. Falls ihr diese Woche keine Login Daten bekommt, bitten wir euch uns eine Mail an support@oekfb.eu zu senden.
            Vielen Dank für euer Verständnis.          </div>
        </div>
      </div>
    </div>
  );
};

ImageHeader.propTypes = {
  className: PropTypes.string,
};

export default ImageHeader;
