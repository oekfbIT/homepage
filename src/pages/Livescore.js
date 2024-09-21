import React, { useEffect, useState } from 'react';
import FooterMain from '../components/FooterMain';
import BundeslanderSelectionRow from '../components/BundeslanderSelectionRow';
import Navigationbar from '../components/Navigationbar';
import ApiService from '../network/ApiService';
import LivescoreCell from '../components/LivescoreCell';
import styles from './LeagueDetail.module.css';
import { toast } from 'react-toastify';

const Livescore = () => {
    const [liveScoreData, setLiveScoreData] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiService = new ApiService();

    const fetchLiveScores = () => {
        apiService.get(`/matches/livescore`)
            .then(response => {
                const sortedData = response.sort((a, b) => a.league.localeCompare(b.league));

                sortedData.forEach(league => {
                    league.matches.sort((a, b) => {
                        const firstHalfStartA = new Date(a.first_half_start_date);
                        const firstHalfStartB = new Date(b.first_half_start_date);
                        return firstHalfStartA - firstHalfStartB;
                    });
                });

                setLiveScoreData(sortedData);
                setLoading(false);
                toast.success('Live score data fetched successfully');
            })
            .catch(error => {
                console.error('Error fetching live score data:', error);
                toast.error('Error fetching live score data');
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchLiveScores();
        const intervalId = setInterval(fetchLiveScores, 10000); // Refetch every 10 seconds
        return () => clearInterval(intervalId);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.leagueDetail}>
            <Navigationbar />
            <BundeslanderSelectionRow />
            <div className={styles.saisonStart1592024}>Livescore</div>

            {liveScoreData.length === 0 ? (
                <div className={styles.noMatchesText}>
                    Zurzeit gibt es keine aktive Spiele
                </div>
            ) : (
                liveScoreData.map((leagueData, leagueIndex) => (
                    <div key={leagueIndex} className={styles.leagueSection}>
                        <div className={styles.saisonStart1592024} style={{ backgroundColor: "#191e25", padding: "10px", borderRadius: "10px", maxWidth:"100vw" }}>
                            {leagueData.league}
                        </div>
                        {leagueData.matches.map((match, matchIndex) => (
                            <LivescoreCell key={matchIndex} matchData={match} />
                        ))}
                    </div>
                ))
            )}

            <FooterMain />
        </div>
    );
};

export default Livescore;
