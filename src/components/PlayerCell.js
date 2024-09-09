import PropTypes from "prop-types";
import styles from "./PlayerCell.module.css";

const PlayerCell = ({ className = "", name, nationality, birthday, position, image, eligibility }) => {
    // Function to return the correct class based on eligibility
    const getEligibilityClass = (eligibility) => {
        switch (eligibility) {
            case "Spielberechtigt":
                return styles.eligibilityOK;
            case "Warten":
                return styles.eligibilityPending;
            case "Gesperrt":
                return styles.eligibilityNo;
            default:
                return "";
        }
    };

    // Conditionally set the image source
    const getImageSrc = (eligibility, defaultImage) => {
        if (eligibility === "Warten") {
            return "https://firebasestorage.googleapis.com/v0/b/oekfbbucket.appspot.com/o/adminfiles%2FpendingPlayer.png?alt=media&token=b504ecd3-3c5d-4f88-b629-e901c51f5bb4";
        }
        return defaultImage;
    };

    return (
        <div className={[styles.playerCell, className].join(" ")}>
            <img className={styles.logoIcon} alt={name} src={getImageSrc(eligibility, image)} />
            <div className={styles.textContainer}>
                <div className={styles.name}>{name}</div>
                <div className={styles.info}>{`${nationality}, ${birthday}`}</div>
                <div className={styles.position}>{position}</div>
                <div className={getEligibilityClass(eligibility)}>{eligibility}</div>
            </div>
        </div>
    );
};

PlayerCell.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    eligibility: PropTypes.string.isRequired,
};

export default PlayerCell;
