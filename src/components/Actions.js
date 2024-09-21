import { useMemo } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import styles from "./Actions.module.css";

const Actions = ({
                     className = "",
                     frameDivBackgroundImage,
                     frameDivBackgroundImage1,
                 }) => {
    const frameDivStyle = useMemo(() => {
        return {
            backgroundImage: frameDivBackgroundImage,
        };
    }, [frameDivBackgroundImage]);

    const frameDiv1Style = useMemo(() => {
        return {
            backgroundImage: frameDivBackgroundImage1,
        };
    }, [frameDivBackgroundImage1]);

    const navigate = useNavigate(); // Using useNavigate for navigation

    const handleLivescoreClick = () => {
        navigate("/livescore"); // Navigate to the livescore page when the container is clicked
    };

    return (
        <div className={[styles.actions, className].join(" ")}>
            <div
                className={styles.strafsenatWrapper}
                style={{ opacity: "30%", backgroundImage: frameDivBackgroundImage }}
            >
                <div className={styles.strafsenat}>
                    Strafsenat
                    <p style={{ fontSize: "18px" }}>(In bearbeitung)</p>
                </div>
            </div>
            <div
                className={styles.livescoreWrapper}
                style={frameDiv1Style}
                onClick={handleLivescoreClick}
                role="button" // Add a role for accessibility
                tabIndex={0}  // Make it focusable
            >
                <div className={styles.strafsenat}>
                    <span style={{ color: "white", textDecoration: "none" }}>Livescore</span>
                </div>
            </div>
        </div>
    );
};

Actions.propTypes = {
    className: PropTypes.string,

    /** Style props */
    frameDivBackgroundImage: PropTypes.any,
    frameDivBackgroundImage1: PropTypes.any,
};

export default Actions;
