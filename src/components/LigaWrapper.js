import React from 'react';
import LigaItemCell from './LigaItemCell';
import PropTypes from 'prop-types';
import styles from './LigaWrapper.module.css';

const LigaWrapper = ({ leagues }) => {
    return (
        <div className={styles.ligawrapper}>
            {leagues.map(league => (
                <LigaItemCell key={league.id} league={league} />
            ))}
        </div>
    );
};

LigaWrapper.propTypes = {
    leagues: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            teamcount: PropTypes.number,
            hourly: PropTypes.number.isRequired,
            state: PropTypes.string.isRequired,
            code: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default LigaWrapper;
