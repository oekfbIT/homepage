import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./Banner.module.css";

const Banner = ({ className = "" }) => {
  return (
    <div className={[styles.banner, className].join(" ")}>
      <div className={styles.overlay}>
        <div className={styles.logoParent}>
          <img className={styles.logoIcon} alt="" src="/logo.svg" />
          <div className={styles.experienceTheWorldOfWinnerParent}>
            <div className={styles.experienceTheWorldContainer}>
              <p className={styles.experienceTheWorld}>
                Experience the World of
              </p>
              <p className={styles.experienceTheWorld}>Winners</p>
            </div>
            <Button
              button="Jetzt Reigstrieren"
              icon="/icon.svg"
              showIcon
              buttonBackgroundColor="#ea9805"
              buttonPosition="unset"
              buttonWidth="159px"
              buttonFontWeight="500"
              href="/register"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  className: PropTypes.string,
};

export default Banner;
