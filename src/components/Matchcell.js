import { useMemo } from "react";
import Scoreitems from "./Scoreitems";
import PropTypes from "prop-types";
import styles from "./Matchcell.module.css";

// Helper function to format the date to hh:mm without time zone conversion
const formatTime = (dateString) => {
  if (!dateString) return "Unknown time"; // Handle missing or incorrect date

  // Extract the time part from the date string (ISO format assumed)
  const timePart = dateString.split('T')[1]?.replace('Z', '').slice(0, 5); // Get the "hh:mm" part

  return timePart || "Unknown time"; // Return the time or handle missing part
};

const Matchcell = ({
                     className = "",
                     matchData, // Entire match data
                     matchcellAlignSelf,
                   }) => {
  const matchcellStyle = useMemo(() => {
    return {
      alignSelf: matchcellAlignSelf,
    };
  }, [matchcellAlignSelf]);

  // Use matchData.details.date directly since it's in ISO format
  const matchTime = formatTime(matchData?.details?.date); // Safeguard to avoid errors
  const matchLocation = matchData?.details?.location || "Unknown location";

  // Correct fields for home and away teams
  const homeTeamName = matchData?.home_blanket?.name || 'Home Team';
  const awayTeamName = matchData?.away_blanket?.name || 'Away Team';
  const scoreHome = matchData?.score?.home || 0; // Fixed score access
  const scoreAway = matchData?.score?.away || 0; // Fixed score access
  const homeTeamLogo = matchData?.home_blanket?.logo || '/default-logo.png';
  const awayTeamLogo = matchData?.away_blanket?.logo || '/default-logo.png';

  return (
      <div className={[styles.matchcell, className].join(" ")} style={matchcellStyle}>
        <div className={styles.matchDetailsWrapper}>
          {/* Time on the left */}
          <div className={styles.matchTime}>{matchTime}</div>

          {/* Teams and score in the center */}
          <div className={styles.content}>
            <div className={styles.teamData}>
              <div className={styles.hometeam}>
                <div className={styles.teamNameL}>{homeTeamName}</div>
                <img className={styles.teamLogo} alt="Home Team Logo" src={homeTeamLogo} />
              </div>
              <Scoreitems scoreitemsPosition="relative" homeScore={scoreHome} awayScore={scoreAway} />
              <div className={styles.awayteam}>
                <img className={styles.teamLogo} alt="Away Team Logo" src={awayTeamLogo} />
                <div className={styles.teamNameR}>{awayTeamName}</div>
              </div>
            </div>
          </div>

          {/* Location on the right */}
          <div className={styles.matchLocation}>{matchLocation}</div>
        </div>
      </div>
  );
};

Matchcell.propTypes = {
  className: PropTypes.string,
  matchData: PropTypes.object.isRequired, // Ensure matchData is required
  matchcellAlignSelf: PropTypes.any,
};

export default Matchcell;
