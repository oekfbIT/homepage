import PropTypes from "prop-types";
import PlayerCell from "./PlayerCell";
import styles from "./Playerslist.module.css";

const Playerslist = ({ className = "", players }) => {
  return (
      <div className={[styles.playerslist, className].join(" ")}>
        {players.map(player => (
            <PlayerCell
                key={player.id}
                name={player.name}
                nationality={player.nationality}
                birthday={player.birthday}
                position={player.position}
                image={player.image}
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
  })).isRequired,
};

export default Playerslist;
