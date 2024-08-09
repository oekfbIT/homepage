import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TeamHeader from '../components/TeamHeader';
import Playerslist from '../components/Playerslist';
import FooterMain from '../components/FooterMain';
import BundeslanderSelectionRow from '../components/BundeslanderSelectionRow';
import Navigationbar from '../components/Navigationbar';
import ApiService from '../network/ApiService';
import styles from './TeamDetail.module.css';

const TeamDetail = () => {
    const { id } = useParams();
    const [team, setTeam] = useState(null);
    const apiService = new ApiService();

    useEffect(() => {
        if (id) {
            apiService.get(`teams/${id}/players`)
                .then(response => {
                    setTeam(response);
                })
                .catch(error => {
                    console.error('Error fetching team:', error);
                });
        }
    }, [id]);

    if (!team) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.teamDetail}>
            <Navigationbar />
            <BundeslanderSelectionRow />

            <TeamHeader
                logo={team.logo}
                trikot={team.trikot}
                name={team.team_name}
                league={`Liga: ${team.league}`}
                membership_since={`Im Verband seit: ${team.membership_since}`}
                average_age={`Altersdurchschn.: ${team.average_age}`}
                foundation_year={`Gründungsjahr: ${team.foundation_year}`}
            />
            <div className={styles.kaderWrapper}>
                <div className={styles.kader}>Kader</div>
            </div>
            <Playerslist players={team.players} />
            <FooterMain />
        </div>
    );
};

export default TeamDetail;
