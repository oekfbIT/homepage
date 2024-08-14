import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './TeamCell.module.css';

const TeamCell = ({ id, logo, teamName, foundationYear, coachName, averageAge, captain, homeTrikot, awayTrikot, teamCellWidth }) => {
    // Validate that the ID is present
    if (!id) {
        console.error('TeamCell: Missing team ID.');
        return null; // Don't render the component if the ID is invalid
    }

    return (
        <Link to={`/team-detail/${id}`} className={styles.link}>
            <div className={styles.teamCell} style={{ width: teamCellWidth }}>
                <img src={logo} alt={`${teamName} logo`} className={styles.logoIcon} />
                <div className={styles.teamInfo}>
                    <h3 className={styles.teamName}> {teamName}</h3>
                </div>
            </div>
        </Link>
    );
};

TeamCell.propTypes = {
    id: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    teamName: PropTypes.string.isRequired,
    foundationYear: PropTypes.string.isRequired,
    coachName: PropTypes.string.isRequired,
    averageAge: PropTypes.string.isRequired,
    captain: PropTypes.string.isRequired,
    homeTrikot: PropTypes.string.isRequired,
    awayTrikot: PropTypes.string.isRequired,
    teamCellWidth: PropTypes.string,
};

export default TeamCell;
