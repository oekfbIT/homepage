import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TeamWrapper from '../components/TeamWrapper';
import FooterMain from '../components/FooterMain';
import BundeslanderSelectionRow from '../components/BundeslanderSelectionRow';
import Navigationbar from '../components/Navigationbar';
import ApiService from '../network/ApiService';
import Matchcell from '../components/Matchcell'; // Import the Matchcell component
import styles from './LeagueDetail.module.css';
import { toast } from 'react-toastify';

const LeagueDetail = () => {
    const { id } = useParams();
    const [league, setLeague] = useState(null);
    const [matchesByGameday, setMatchesByGameday] = useState({});
    const apiService = new ApiService();

    const bundeslandData = [
        { name: 'wien', wappen: '/wappen10@2x.png', href: "/league/wien" },
        { name: 'oberoesterreich', wappen: '/wappen11@2x.png', href: "/league/oberoesterreich" },
        { name: 'steiermark', wappen: '/wappen12@2x.png', href: "/league/steiermark" },
        { name: 'kaernten', wappen: '/wappen13@2x.png', href: "/league/kaernten" },
        { name: 'niederoesterreich', wappen: '/wappen4@2x.png', href: "/league/niederoesterreich" },
        { name: 'tirol', wappen: '/wappen14@2x.png', href: "/league/tirol" },
        { name: 'vorarlberg', wappen: '/wappen15@2x.png', href: "/league/vorarlberg" },
        { name: 'salzburg', wappen: '/wappen16@2x.png', href: "/league/salzburg" },
        { name: 'burgenland', wappen: '/wappen17@2x.png', href: "/league/burgenland" },
    ];

    useEffect(() => {
        if (id) {
            apiService.get(`leagues/code/${id}`)
                .then(response => {
                    setLeague(response);

                    const seasonId = response?.seasons?.[0]?.id;
                    if (seasonId) {
                        apiService.get(`seasons/${seasonId}/matches`)
                            .then(matchesResponse => {
                                setMatchesByGameday(groupMatchesByGameday(matchesResponse.matches));
                            })
                            .catch(error => {
                                console.error('Error fetching matches:', error);
                                toast.error('Error fetching matches');
                            });
                    } else {
                        toast.error('Season not found in the league response');
                    }

                    toast.success('League data fetched successfully');
                })
                .catch(error => {
                    console.error('Error fetching league:', error);
                    toast.error('Error fetching league');
                });
        }
    }, [id]);

    const groupMatchesByGameday = (matches) => {
        return matches.reduce((acc, match) => {
            const gameday = match?.details?.gameday || 'Unknown'; // Fixed gameday handling
            if (!acc[gameday]) {
                acc[gameday] = [];
            }
            acc[gameday].push(match);
            return acc;
        }, {});
    };

    const formatGamedayDate = (matches) => {
        if (!matches.length) return '';

        const firstMatchDate = matches[0]?.details?.date;
        if (!firstMatchDate) return '';

        // Create a Date object using the date string directly
        const date = new Date(firstMatchDate);

        // Format the date as 'So., 22.09.2024 12:00' (preserving the time as provided)
        return new Intl.DateTimeFormat('de-DE', {
            weekday: 'short',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false, // Use 24-hour format
            timeZone: 'UTC' // Treat it as UTC to keep the time as is
        }).format(date);
    };

    if (!league) {
        return <div>Loading...</div>;
    }

    const leagueWappen = bundeslandData.find(b => b.name.toLowerCase() === league?.state?.toLowerCase())?.wappen || '/default-wappen.png';

    return (
        <div className={styles.leagueDetail}>
            <Navigationbar />
            <BundeslanderSelectionRow />

            <div className={styles.ligen}>
                <div className={styles.bundeslandCell}>
                    <img className={styles.wappenIcon} alt={`${league?.state} wappen`} src={leagueWappen} />
                    <div className={styles.name}>
                        <a className={styles.wiener1}>{league?.name?.split(' ')[0]}</a>
                        <p className={styles.liga}>{league?.name?.split(' ')[1]}</p>
                    </div>
                </div>
            </div>

            <div className={styles.saisonStart1592024}>Saison Start: 22.9.2024</div>
            <div className={styles.mannschaftenParent}>
                <div className={styles.lmannschaften}>Mannschaften</div>
                <div className={styles.season20242025}>Season 2024-2025</div>
            </div>

            <TeamWrapper teams={league?.teams || []} />

            {/* Render matches organized by gameday */}
            {Object.keys(matchesByGameday).map(gameday => {
                // Filter matches by valid date
                const filteredMatches = matchesByGameday[gameday].filter(match => match?.details?.date);

                // Only render the section if there are filtered matches
                if (filteredMatches.length === 0) return null;

                // Get the formatted date from the first match of the gameday
                const formattedDate = formatGamedayDate(filteredMatches);

                return (
                    <div key={gameday} className={styles.gamedaySection}>
                        <h3 className={styles.sectionHeader}>
                            {gameday}. Spieltag - {formattedDate}
                        </h3>
                        {filteredMatches.map(match => (
                            <Matchcell
                                key={match.id}
                                matchData={match}  // Pass the entire match data
                            />
                        ))}
                    </div>
                );
            })}

            <FooterMain />
        </div>
    );
};

export default LeagueDetail;
