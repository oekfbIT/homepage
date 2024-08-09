import React from 'react';
import PropTypes from 'prop-types';
import styles from './BundeslanderSelectionRow.module.css';
import Bundeslander from './Bundeslander';

const bundeslandData = [
    { name: 'Wien', wappen: '/wappen10@2x.png', href: "/league/wien"},
    { name: 'Oberösterreich', wappen: '/wappen11@2x.png', href: "/league/oberoesterreich"},
    { name: 'Steiermark', wappen: '/wappen12@2x.png', href: "/league/steiermark"},
    { name: 'Kärnten', wappen: '/wappen13@2x.png', href: "/league/kaernten"},
    { name: 'Niederösterreich', wappen: '/wappen4@2x.png', href: "/league/niederoesterreich"},
    { name: 'Tirol', wappen: '/wappen14@2x.png', href: "/league/tirol"},
    { name: 'Voralberg', wappen: '/wappen15@2x.png', href: "/league/vorarlberg"},
    { name: 'Salzburg', wappen: '/wappen16@2x.png', href: "/league/salzburg"},
    { name: 'Burgenland', wappen: '/wappen17@2x.png', href: "/league/burgenland"},
];

const BundeslanderSelectionRow = ({ className = '' }) => {
    return (
        <div className={[styles.bundeslanderSelectionRow, className].join(' ')}>
            <div className={styles.ligen}>Ligen</div>
            <div className={styles.scrollContainer}>
                {bundeslandData.map((bundesland, index) => (
                    <Bundeslander key={index} {...bundesland} />
                ))}
            </div>
        </div>
    );
};

BundeslanderSelectionRow.propTypes = {
    className: PropTypes.string,
};

export default BundeslanderSelectionRow;
