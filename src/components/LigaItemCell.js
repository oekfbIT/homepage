import React from 'react';
import PropTypes from 'prop-types';
import styles from './LigaItemCell.module.css';

const LigaItemCell = ({ league }) => {
  return (
      <a href={`/league-detail/${league.code}`} className={styles.ligaitemcell}>
        <div className={styles.bundeslandCell}>
          <div className={styles.name}>
            <p className={styles.liga}>{league.name}</p>
          </div>
        </div>
      </a>
  );
};

LigaItemCell.propTypes = {
  league: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    teamcount: PropTypes.number,
    hourly: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
};

export default LigaItemCell;
