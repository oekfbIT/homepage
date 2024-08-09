import PropTypes from "prop-types";
import styles from "./NewsItem.module.css";

const NewsItem = ({ className = "", image1, text, date }) => {
  return (
      <div className={[styles.newsItem, className].join(" ")}>
        <img className={styles.image1Icon} alt="" src={image1} />
        <div className={styles.info}>
          <div className={styles.winBigPrizesAsPartOfBundParent}>
            <div className={styles.winBigPrizesContainer}>
              <p className={styles.winBigPrizes}>{text.split('\n')[0]}</p>
              {text.split('\n').length > 1 && (
                  <p className={styles.winBigPrizes}>{text.split('\n')[1]}</p>
              )}
            </div>
            <div className={styles.toCelebrateBundesliga}>
              {text.split('\n').slice(2).join('\n')}
            </div>
            <div className={styles.div}>{new Date(date).toLocaleDateString()}</div>
          </div>
        </div>
      </div>
  );
};

NewsItem.propTypes = {
  className: PropTypes.string,
  image1: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

export default NewsItem;
