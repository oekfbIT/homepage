import PropTypes from "prop-types";
import styles from "./PlayerCell.module.css";

const PlayerCell = ({ className = "", name, nationality, birthday, position, image }) => {
    return (
        <div className={[styles.playerCell, className].join(" ")}>
            <img className={styles.logoIcon} alt={name} src={image} />
            <div className={styles.textContainer}>
                <div className={styles.name}>{name}</div>
                <div className={styles.info}>{`${nationality}, ${birthday}`}</div>
                <div className={styles.position}>{position}</div>
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
};

export default PlayerCell;
