import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from "./ligaordnung.module.css";
import FooterMain from "../components/FooterMain";
import Navigationbar from "../components/Navigationbar";
import BundeslanderSelectionRow from "../components/BundeslanderSelectionRow";
import StatItem from "../components/StatItem";
import ligaordnungData from '../data/ligaordnungData';

const Ligaordnung = () => {
    const location = useLocation();

    useEffect(() => {
        const elementId = location.hash.substring(1); // Extract hash without '#'
        if (elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView(); // Scroll to the element if it exists
            }
        }
    }, [location]);

    return (
        <div className={styles.impressium}>
            <Navigationbar />
            <BundeslanderSelectionRow />

            <div className={styles.sterreichischerKleinfeldFubParent}>
                <div className={styles.sterreichischerKleinfeldFub}>
                    Österreichischer Kleinfeld Fußball Bund
                </div>
                <div className={styles.impressum}>Ligaordnung</div>
            </div>

            {/* Index Section */}
            <div className={styles.index}>
                <h4>Inhaltsverzeichnis</h4>
                <ul>
                    {ligaordnungData.sections.map((section, index) => (
                        <li key={index}>
                            <a href={`#section${index + 1}`}>
                                {section.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.longtextitem}>
                {ligaordnungData.sections.map((section, index) => (
                    <div key={index} id={`section${index + 1}`}>
                        <StatItem
                            title={section.title}
                            value={section.content}
                            statitemFlex="unset"
                            statitemAlignSelf="stretch"
                        />
                    </div>
                ))}
            </div>

            <FooterMain />
        </div>
    );
};

export default Ligaordnung;
