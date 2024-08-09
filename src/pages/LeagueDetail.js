import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TeamWrapper from '../components/TeamWrapper';
import FooterMain from '../components/FooterMain';
import BundeslanderSelectionRow from '../components/BundeslanderSelectionRow';
import Navigationbar from '../components/Navigationbar';
import ApiService from '../network/ApiService';
import styles from './LeagueDetail.module.css';

const LeagueDetail = () => {
    const { id } = useParams();
    const [league, setLeague] = useState(null);
    const apiService = new ApiService();

    const bundeslandData = [
        { name: 'wien', wappen: '/wappen10@2x.png', href: "/league/wien"},
        { name: 'oberoesterreich', wappen: '/wappen11@2x.png', href: "/league/oberoesterreich"},
        { name: 'steiermark', wappen: '/wappen12@2x.png', href: "/league/steiermark"},
        { name: 'kaernten', wappen: '/wappen13@2x.png', href: "/league/kaernten"},
        { name: 'niederoesterreich', wappen: '/wappen4@2x.png', href: "/league/niederoesterreich"},
        { name: 'tirol', wappen: '/wappen14@2x.png', href: "/league/tirol"},
        { name: 'vorarlberg', wappen: '/wappen15@2x.png', href: "/league/vorarlberg"},
        { name: 'salzburg', wappen: '/wappen16@2x.png', href: "/league/salzburg"},
        { name: 'burgenland', wappen: '/wappen17@2x.png', href: "/league/burgenland"},
    ];

    useEffect(() => {
        if (id) {
            apiService.get(`leagues/code/${id}`)
                .then(response => {
                    setLeague(response);
                })
                .catch(error => {
                    console.error('Error fetching league:', error);
                });
        }
    }, [id]);

    if (!league) {
        return <div>Loading...</div>;
    }

    // Find the correct wappen image based on the league state
    const leagueWappen = bundeslandData.find(b => b.name.toLowerCase() === league.state.toLowerCase())?.wappen || '/default-wappen.png';

    return (
        <div className={styles.leagueDetail}>
            <Navigationbar />
            <BundeslanderSelectionRow />

            <div className={styles.ligen}>
                <div className={styles.bundeslandCell}>
                    <img className={styles.wappenIcon} alt={`${league.state} wappen`} src={leagueWappen} />
                    <div className={styles.name}>
                        <a className={styles.wiener1}>{league.name.split(' ')[0]}</a>
                        <p className={styles.liga}>{league.name.split(' ')[1]}</p>
                    </div>
                </div>
            </div>
            <div className={styles.saisonStart1592024}>Saison Start: 15.9.2024</div>
            <div className={styles.mannschaftenParent}>
                <div className={styles.mannschaften}>Mannschaften</div>
                <div className={styles.season20242025}>Season 2024-2025</div>
            </div>
            <TeamWrapper
                teams={league.teams}
            />
            <FooterMain />
        </div>
    );
};

export default LeagueDetail;


{/*<div className={styles.mannschaftenParent}>*/}
{/*    <div className={styles.mannschaften}>Spielplan</div>*/}
{/*    <div className={styles.season20242025}>Season 2024-2025</div>*/}
{/*</div>*/}
{/*<Matchday*/}
{/*    rectangle10="/rectangle-10@2x.png"*/}
{/*    rectangle9="/rectangle-9@2x.png"*/}
{/*    rectangle101="/rectangle-10@2x.png"*/}
{/*    rectangle91="/rectangle-9@2x.png"*/}
{/*    rectangle102="/rectangle-10@2x.png"*/}
{/*    rectangle92="/rectangle-9@2x.png"*/}
{/*    rectangle103="/rectangle-10@2x.png"*/}
{/*    rectangle93="/rectangle-9@2x.png"*/}
{/*/>*/}
{/*<div className={styles.mannschaftenParent}>*/}
{/*    <div className={styles.mannschaften}>Tabelle</div>*/}
{/*    <div className={styles.season20242025}>Season 2024-2025</div>*/}
{/*    <RankingTabellele*/}
{/*        logo="/logo3@2x.png"*/}
{/*        logo1="/logo1@2x.png"*/}
{/*        logo2="/logo1@2x.png"*/}
{/*        logo3="/logo1@2x.png"*/}
{/*        logo4="/logo1@2x.png"*/}
{/*    />*/}
{/*</div>*/}
