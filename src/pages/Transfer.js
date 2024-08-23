import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ApiService from '../network/ApiService';
import styles from "./Transfer.module.css";
import Navigationbar from "../components/Navigationbar";
import FooterMain from "../components/FooterMain";

const apiService = new ApiService();

const Transfer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [transferData, setTransferData] = useState(null);

    useEffect(() => {
        const getTransfer = async () => {
            if (!id) {
                console.log("NO ID");
                return;
            }

            try {
                const response = await apiService.get(`transfers/${id}`);
                setTransferData(response);
                console.log('Transfer Response:', JSON.stringify(response, null, 2));
            } catch (error) {
                console.error('Error fetching transfer:', error);
                navigate('/errorpage');
            }
        };

        getTransfer();
    }, [id, navigate]);

    const handleAccept = async () => {
        try {
            const response = await apiService.get(`transfers/confirm/${id}`);
            if (response.id) {
                navigate('/');
            }
        } catch (error) {
            toast.error('Fehler beim Akzeptieren der Anfrage: ' + error.message);
        }
    };

    const handleDecline = async () => {
        try {
            const response = await apiService.get(`transfers/reject/${id}`);
            if (response.id) {
                navigate('/');
            }
        } catch (error) {
            toast.error('Fehler beim Ablehnen der Anfrage: ' + error.message);
        }
    };

    if (!transferData) {
        return (
            <div className={styles.loadingContainer}>
                <h2>Loading...</h2>
                <p>Fetching transfer data...</p>
            </div>
        );
    }

    const renderTransferStatus = () => {
        if (transferData.status === 'warten') {
            return (
                <>

                    <div className={styles.playerInfo}>
                        <img className={styles.playerImage} src={transferData.player_image}
                             alt={transferData.player_name}/>
                        <h3 className={styles.playerName}>{transferData.player_name}</h3>
                    </div>

                    <p className={styles.transferMessage}>
                        {transferData.team_name} hat dir eine Anfrage geschickt, ihrer Mannschaft beizutreten und deine
                        derzeitige zu verlassen. Willst du diese Anfrage annehmen?
                    </p>
                    <div className={styles.teamInfo}>
                        <div style={{backgroundColor: "white", borderRadius: "50%", padding: "10px"}}>
                            <img className={styles.teamLogo} src={transferData.team_image} alt={transferData.team_name}/>
                        </div>
                        <h3 className={styles.teamName}>{transferData.team_name}</h3>
                    </div>

                    <div className={styles.buttonframeWrapper}>
                        <button className={styles.button} onClick={handleAccept}>Annehmen</button>
                        <button className={styles.buttonOutlined} onClick={handleDecline}>Ablehnen</button>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <p className={styles.statusMessage}>
                        Der Status dieser Transfer Anfrage wurde {transferData.status.toUpperCase()}.
                    </p>
                    <p> Sie können eine neue Anfrage schicken. Diese ist geschlossen.</p>

                    <div className={styles.buttonframeWrapper}>
                        <button className={styles.button} onClick={() => navigate('/')}>Zur Seite</button>
                    </div>
                </>
            );
        }
    };

    return (
        <div className={styles.upload}>
            <Navigationbar />
            <div className={styles.transferCard}>
                {renderTransferStatus()}
            </div>
            <FooterMain/>
        </div>
    );
};

export default Transfer;
