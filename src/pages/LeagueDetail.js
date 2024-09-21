import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TeamWrapper from '../components/TeamWrapper';
import FooterMain from '../components/FooterMain';
import BundeslanderSelectionRow from '../components/BundeslanderSelectionRow';
import Navigationbar from '../components/Navigationbar';
import ApiService from '../network/ApiService';
import Matchcell from '../components/Matchcell';
import styles from './LeagueDetail.module.css';
import { toast } from 'react-toastify';

const LeagueDetail = () => {
    const { id } = useParams();
    const [league, setLeague] = useState(null);
    const [matchesByGameday, setMatchesByGameday] = useState({});
    const [leagueTable, setLeagueTable] = useState([]);
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
            // Fetch the league data
            apiService.get(`leagues/code/${id}`)
                .then(response => {
                    setLeague(response);

                    // Extract the correct league ID from the response for the table request
                    const leagueId = response.id;

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

                    // Use the correct league ID to fetch the league table
                    apiService.get(`/leagues/${leagueId}/tabelle`)
                        .then(tableResponse => {
                            setLeagueTable(tableResponse);
                        })
                        .catch(error => {
                            console.error('Error fetching league table:', error);
                            toast.error('Error fetching league table');
                        });

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
            const gameday = match?.details?.gameday || 'Unknown';
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
        const datePart = firstMatchDate.split('T')[0];
        const [year, month, day] = datePart.split('-');
        return `${day}.${month}.${year}`;
    };

    if (!league) {
        return <div>Loading...</div>;
    }

    const leagueWappen = bundeslandData.find(b => b.name.toLowerCase() === league?.state?.toLowerCase())?.wappen || '/default-wappen.png';

    return (
        <div className={styles.leagueDetail}>
            <Navigationbar/>
            <BundeslanderSelectionRow/>

            <div className={styles.ligen}>
                <div className={styles.bundeslandCell}>
                    <img className={styles.wappenIcon} alt={`${league?.state} wappen`} src={leagueWappen}/>
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

            <TeamWrapper teams={league?.teams || []}/>

            {/* League Table */}
            <div className={styles.saisonStart1592024}>{league?.name} Tabelle</div>

            {leagueTable.length > 0 ? (
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Logo</th>
                            <th>Team</th>
                            <th>Spiele</th>
                            {/* Matches played */}
                            <th>S</th>
                            {/* Wins */}
                            <th>U</th>
                            {/* Draws */}
                            <th>N</th>
                            {/* Losses */}
                            <th>TD</th>
                            {/* Goals (scored:against) */}
                            <th>Pkt</th>
                            {/* Points */}
                        </tr>
                        </thead>
                        <tbody>
                        {leagueTable.map((team) => (
                            <tr key={team.id}>
                                <td>{team.ranking}</td>
                                <td><img src={team.image} alt={`${team.name} logo`} className={styles.teamLogo}/></td>
                                <td>{team.name}</td>
                                <td>{team.wins + team.draws + team.losses}</td>
                                {/* Total matches */}
                                <td>{team.wins}</td>
                                <td>{team.draws}</td>
                                <td>{team.losses}</td>
                                <td className={team.difference >= 0 ? styles['difference-positive'] : styles['difference-negative']}>
                                    {team.difference >= 0 ? `+${team.difference}` : team.difference}
                                </td>
                                {/* Goals: scored/against */}
                                <td>{team.points}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>


            ) : <div>No league table data available</div>}

            <div className={styles.saisonStart1592024}>{league?.name} Spielplan</div>

            {/* Render matches organized by gameday */}
            {Object.keys(matchesByGameday).map(gameday => {
                const filteredMatches = matchesByGameday[gameday].filter(match => match?.details?.date);
                if (filteredMatches.length === 0) return null;
                const formattedDate = formatGamedayDate(filteredMatches);
                return (
                    <div key={gameday} className={styles.gamedaySection}>
                        <h3 className={styles.sectionHeader}>
                            {gameday}. Spieltag - {formattedDate}
                        </h3>
                        {filteredMatches.map(match => (
                            <Matchcell
                                key={match.id}
                                matchData={match}
                            />
                        ))}
                    </div>
                );
            })}

            <FooterMain/>
        </div>
    );
};

export default LeagueDetail;
