import React from 'react';
import PropTypes from 'prop-types';
import TeamCell from './TeamCell';
import styles from './TeamWrapper.module.css';

const TeamWrapper = ({ className = "", teams }) => {
    return (
        <div className={[styles.teamwrapper, className].join(" ")}>
            {teams.map((team, index) => (
                <TeamCell
                    id={team.id}
                    key={index}
                    logo={team.logo}
                    teamName={team.team_name}
                    foundationYear={team.foundation_year}
                    coachName={team.coach.name}
                    averageAge={team.average_age}
                    captain={team.captain}
                    homeTrikot={team.trikot.home}
                    awayTrikot={team.trikot.away}
                    teamCellWidth="360px"
                />
            ))}
        </div>
    );
};

TeamWrapper.propTypes = {
    className: PropTypes.string,
    teams: PropTypes.arrayOf(PropTypes.shape({
        logo: PropTypes.string,
        team_name: PropTypes.string,
        foundation_year: PropTypes.string,
        coach: PropTypes.shape({
            name: PropTypes.string,
        }),
        average_age: PropTypes.string,
        captain: PropTypes.string,
        trikot: PropTypes.shape({
            home: PropTypes.string,
            away: PropTypes.string,
        }),
    })).isRequired,
};

export default TeamWrapper;
