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
              Liebe ÖKFB Mitglieder,
            </p>
          </div>
          <div className={styles.toCelebrateBundesliga}>
            wir sind ständig dabei, unsere Dienstleistungen für Sie zu verbessern. Deshalb freuen wir uns, Ihnen mitteilen zu können, dass wir ein neues Update durchführen. Dieses Update umfasst neben der Ergänzung von Statistiken und neuen Funktionen zum Ausfüllen des Blankett auch wichtige Fehlerbehebungen. Es wird ab Sonntag, dem 8.9., online verfügbar sein.
            Während wir an diesem Update arbeiten, danken wir Ihnen herzlich für Ihr Verständnis und Ihre Geduld. Bei dringenden Anfragen oder Fragen können Sie sich gerne an unser Büro wenden oder uns unter support@oekfb.eu kontaktieren.
            Vielen Dank und eine erfolgreiche Saison!          </div>
        </div>
      </div>
    </div>
  );
};

ImageHeader.propTypes = {
  className: PropTypes.string,
};

export default ImageHeader;
