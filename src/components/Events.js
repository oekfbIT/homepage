import PropTypes from "prop-types";
import styles from "./Events.module.css";

const Events = ({ className = "" }) => {
  return (
    <div className={[styles.events, className].join(" ")}>
      <div className={styles.title}>
        <div className={styles.aktuell}>Aktuell</div>
      </div>
      <div className={styles.cells}>
        <div className={styles.eventcell}>
          <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        </div>
        <div className={styles.eventcell}>
          <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        </div>
        <div className={styles.eventcell}>
          <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        </div>
        <div className={styles.eventcell}>
          <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        </div>
      </div>
    </div>
  );
};

Events.propTypes = {
  className: PropTypes.string,
};

export default Events;
