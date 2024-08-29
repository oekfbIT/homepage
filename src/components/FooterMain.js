import PropTypes from "prop-types";
import styles from "./FooterMain.module.css";

const FooterMain = ({ className = "" }) => {
  return (
      <footer className={[styles.footer, className].join(" ")}>
        <div className={styles.fickleflightBio}>
          <a href="/">
            <img className={styles.groupIcon} alt="ÖKFB Logo" src="/group.svg" />
          </a>
          <div className={styles.sterreichischerKleinfeldFubContainer}>
            <p
                className={styles.sterreichischerKleinfeld}
            >{`Österreichischer Kleinfeld `}</p>
            <p className={styles.sterreichischerKleinfeld}>Fußball Bund</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>1020 Wien, Pazmanitengasse 15/7</p>
            <p className={styles.blankLine}>ÖKFB </p>
            <p className={styles.blankLine}>office@oekfb.eu</p>
            <p className={styles.blankLine}>support@oekfb.eu</p>
          </div>
          <div className={styles.socialIcons}>
            <a
                href="https://www.facebook.com/kleinfeldliga/"
                className={styles.entypoSocialfacebookWithCi}
                target="_blank"
                rel="noopener noreferrer"
            >
              <img className={styles.vectorIcon} alt="Facebook" src="/vector.svg" />
            </a>
            <a
                href="https://www.instagram.com/oekfb/"
                className={styles.entypoSocialinstagramWithC}
                target="_blank"
                rel="noopener noreferrer"
            >
              <img className={styles.vectorIcon} alt="Instagram" src="/vector2.svg" />
            </a>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.company}>
            <div className={styles.company1}>Der Bund</div>
            <a href="/ligaordnung" className={styles.sterreichischerKleinfeldFubContainer}>
              Ligaordnung
            </a>
            <a href="/impressium" className={styles.sterreichischerKleinfeldFubContainer}>
              Impressum
            </a>
          </div>
          <div className={styles.company}>
            <div className={styles.company1}>Support</div>
            <a href="https://team.oekfb.eu" className={styles.sterreichischerKleinfeldFubContainer}>
              Mein Team Login
            </a>
            <a href="https://ref.oekfb.eu" className={styles.sterreichischerKleinfeldFubContainer}>
              Schiedsrichter Login
            </a>
          </div>
          {/* Uncomment and add hrefs as needed */}
          {/*<div className={styles.more}>*/}
          {/*  <div className={styles.company1}>More</div>*/}
          {/*  <a href="/covid-advisory" className={styles.sterreichischerKleinfeldFubContainer}>*/}
          {/*    Covid Advisory*/}
          {/*  </a>*/}
          {/*  <a href="/airline-fees" className={styles.sterreichischerKleinfeldFubContainer}>*/}
          {/*    Airline Fees*/}
          {/*  </a>*/}
          {/*  <a href="/tips" className={styles.sterreichischerKleinfeldFubContainer}>*/}
          {/*    Tips*/}
          {/*  </a>*/}
          {/*  <a href="/quarantine-rules" className={styles.sterreichischerKleinfeldFubContainer}>*/}
          {/*    Quarantine Rules*/}
          {/*  </a>*/}
          {/*</div>*/}
        </div>
      </footer>
  );
};

FooterMain.propTypes = {
  className: PropTypes.string,
};

export default FooterMain;
