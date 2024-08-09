import React from 'react';
import PropTypes from 'prop-types';
import styles from './Bundeslander.module.css';

const Bundeslander = ({ name, wappen, href }) => {
    const bundeslandStyle = {
        backgroundColor: '#191e25',
        flex: '1',
    };

    const nameStyle = {
        color: '#fff',
    };

    return (
        <a href={`${href}`} className={styles.bundesland} style={bundeslandStyle}>
            <img className={styles.wappenIcon} alt={name} src={wappen} />
            <div className={styles.name} style={nameStyle}>
                {name}
            </div>
        </a>
    );
};

Bundeslander.propTypes = {
    name: PropTypes.string.isRequired,
    wappen: PropTypes.string.isRequired,
};

export default Bundeslander;
