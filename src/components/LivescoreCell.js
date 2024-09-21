import { useMemo, useEffect, useState } from "react";
import Scoreitems from "./Scoreitems";
import PropTypes from "prop-types";
import styles from "./LivescoreCell.module.css";
import { getElapsedTime } from '../utils/time';  // Utility function for calculating elapsed time

const formatTimeElapsed = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const formatLocalTime = (dateString) => {
  if (!dateString) return "Unknown time";
  const date = new Date(dateString);
  const options = { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Vienna' }; // Vienna time
  return date.toLocaleTimeString('en-GB', options);
};

const calculateMatchTimeAndStatus = (match, elapsedSeconds) => {
  const { status, first_half_start_date, second_half_start_date } = match;

  switch (status) {
    case 'pending':
      return formatLocalTime(match?.details?.date); // Show scheduled start time in Vienna time
    case 'first':
      return `1. HZ - ${formatTimeElapsed(elapsedSeconds)}`; // First half with elapsed time
    case 'halftime':
      return 'Halbzeit'; // Halftime status
    case 'second':
      return `2. HZ - ${formatTimeElapsed(elapsedSeconds)}`; // Second half with elapsed time
    case 'completed':
      return 'Finished'; // Finished status
    default:
      return 'Unknown'; // Fallback
  }
};

const LivescoreCell = ({ className = "", matchData, matchcellAlignSelf }) => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0); // Track elapsed time

  // Reinitialize the elapsed time based on the match data
  useEffect(() => {
    if (matchData.status === 'first' && matchData.first_half_start_date) {
      const initialElapsed = getElapsedTime(matchData.first_half_start_date);
      setElapsedSeconds(initialElapsed);
    } else if (matchData.status === 'second' && matchData.second_half_start_date) {
      const initialElapsed = getElapsedTime(matchData.second_half_start_date) + 25 * 60; // Offset for second half
      setElapsedSeconds(initialElapsed);
    }
  }, [matchData]);

  // Update the elapsed time every second
  useEffect(() => {
    let interval;
    if (matchData.status === 'first' || matchData.status === 'second') {
      interval = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval); // Clear interval on unmount
  }, [matchData.status]);

  const matchTimeAndStatus = calculateMatchTimeAndStatus(matchData, elapsedSeconds);

  // Get correct home and away team details from matchData
  const homeTeamName = matchData?.home_blanket?.name || 'Home Team';
  const awayTeamName = matchData?.away_blanket?.name || 'Away Team';

  // These values are critical to ensure score updates
  const scoreHome = matchData?.score?.home ?? 0;  // Default to 0 if undefined
  const scoreAway = matchData?.score?.away ?? 0;  // Default to 0 if undefined

  const homeTeamLogo = matchData.home_blanket?.logo || '/default-logo.png';
  const awayTeamLogo = matchData.away_blanket?.logo || '/default-logo.png';
  const matchLocation = matchData?.details?.location || "Unknown location";

  // Log the scores to the console
  console.log(`Home Score: ${scoreHome}, Away Score: ${scoreAway}`);

  return (
      <div className={[styles.matchcell, className].join(" ")} style={{ alignSelf: matchcellAlignSelf }}>
        <div className={styles.matchDetailsWrapper}>
          {/* Display time and status */}
          <div className={styles.matchTime}>{matchTimeAndStatus}</div>

          {/* Display teams and score */}
          <div className={styles.content}>
            <div className={styles.teamData}>
              <div className={styles.hometeam}>
                <div className={styles.teamNameL}>{homeTeamName}</div>
                <img className={styles.teamLogo} alt="Home Team Logo" src={homeTeamLogo} />
              </div>

              {/* The score component, ensuring score updates dynamically */}
              <Scoreitems scoreitemsPosition="relative" homeScore={scoreHome} awayScore={scoreAway} />

              <div className={styles.awayteam}>
                <img className={styles.teamLogo} alt="Away Team Logo" src={awayTeamLogo} />
                <div className={styles.teamNameR}>{awayTeamName}</div>
              </div>
            </div>
          </div>

          {/* Display location */}
          <div className={styles.matchLocation}>{matchLocation}</div>
        </div>
      </div>
  );
};

LivescoreCell.propTypes = {
  className: PropTypes.string,
  matchData: PropTypes.object.isRequired, // Ensure matchData is required
  matchcellAlignSelf: PropTypes.any,
};

export default LivescoreCell;
