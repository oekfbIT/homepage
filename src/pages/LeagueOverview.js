import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BundeslanderSelectionRow from '../components/BundeslanderSelectionRow';
import FooterMain from '../components/FooterMain';
import LigaWrapper from '../components/LigaWrapper';
import ApiService from '../network/ApiService';
import styles from './LeagueOverview.module.css';
import Navigationbar from "../components/Navigationbar";

const LeagueOverview = () => {
    const { stateName } = useParams();
    const [leagues, setLeagues] = useState([]);
    const apiService = new ApiService();

    useEffect(() => {
        if (stateName) {
            apiService.get(`leagues/state/${stateName}`)
                .then(response => {
                    setLeagues(response);
                })
                .catch(error => {
                    console.error('Error fetching leagues:', error);
                });
        }
    }, [stateName]);

    return (
        <div className={styles.leagueOverview}>
            <Navigationbar/>
            <BundeslanderSelectionRow />
            <LigaWrapper leagues={leagues} />
            <FooterMain />
        </div>
    );
};

export default LeagueOverview;
