import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BundeslanderSelectionRow from '../components/BundeslanderSelectionRow';
import FooterMain from '../components/FooterMain';
import LigaWrapper from '../components/LigaWrapper';
import ApiService from '../network/ApiService';
import styles from './LeagueOverview.module.css';
import Navigationbar from "../components/Navigationbar";
import {toast} from "react-toastify";

const LeagueOverview = () => {
    const { stateName } = useParams();
    const [leagues, setLeagues] = useState([]);
    const [gotten, setGotten] = useState(false);
    const [error, setError] = useState(null); // State to store error message
    const apiService = new ApiService();

    useEffect(() => {
        const fetchLeagues = async () => {
            if (stateName) {
                try {
                    console.log('Fetching leagues for state:', stateName);
                    const response = await apiService.get(`leagues/state/${stateName}`);
                    if (response) {
                        setLeagues(response);
                        setGotten(true);
                        setError(null);
                        toast.success('Leagues fetched successfully');
                    } else {
                        setError('No leagues returned from API');
                    }
                } catch (error) {
                    console.error('Error fetching leagues:', error);
                    setError(`Error fetching leagues: ${error.message}`);
                    toast.error(`Error fetching leagues: ${error.message}`);
                }
            } else {
                console.warn('No stateName provided in URL params');
                setError('No stateName provided in URL params');
            }
        };
        fetchLeagues();
    }, [stateName]);

    return (
        <div className={styles.leagueOverview}>
            <Navigationbar />
            <BundeslanderSelectionRow />
            {/*<div>*/}
            {/*    {stateName ? (*/}
            {/*        <p style={{ color: 'blue' }}>State Name from URL: {stateName}</p>*/}
            {/*    ) : (*/}
            {/*        <p style={{ color: 'red' }}>No State Name provided in URL</p>*/}
            {/*    )}*/}
            {/*</div>*/}
            {/*{gotten ? (*/}
            {/*    <p style={{ color: 'green' }}>Leagues fetched successfully</p>*/}
            {/*) : (*/}
            {/*    <p style={{ color: 'red' }}>*/}
            {/*        Leagues not fetched yet*/}
            {/*        {error && `: ${error}`} /!* Display the error message if it exists *!/*/}
            {/*    </p>*/}
            {/*)}*/}
            <LigaWrapper leagues={leagues} />
            <FooterMain />
        </div>
    );
};

export default LeagueOverview;
