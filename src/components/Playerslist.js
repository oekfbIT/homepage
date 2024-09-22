import PropTypes from "prop-types";
import PlayerCell from "./PlayerCell";
import styles from "./Playerslist.module.css";

const Playerslist = ({ className = "", players }) => {
  // Function to sort players based on eligibility
  const sortByEligibility = (a, b) => {
    const eligibilityOrder = {
      "Spielberechtigt": 1,
      "Warten": 2,
      "Gesperrt": 3,
    };

    return (eligibilityOrder[a.eligibility] || 4) - (eligibilityOrder[b.eligibility] || 4);
  };

  return (
      <div className={[styles.playerslist, className].join(" ")}>
        {players
            .sort(sortByEligibility)
            .map(player => (
                <PlayerCell
                    key={player.id}
                    name={player.name}
                    nationality={player.nationality}
                    birthday={player.birthday}
                    position={player.position}
                    image={player.image}
                    eligibility={player.eligibility}
                    sid={player.sid}
                />
            ))}
      </div>
  );
};

Playerslist.propTypes = {
  className: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    eligibility: PropTypes.string.isRequired,
  })).isRequired,
};

export default Playerslist;
