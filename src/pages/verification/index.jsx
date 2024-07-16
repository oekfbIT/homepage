import React, { useEffect, useState } from 'react';
import AppGrid from "@layout/AppGrid";
import Logo from "@components/Logo";
import ApiService from "../../networking/ApiService";
import { useNavigate, useParams } from 'react-router-dom';
import VerificationForm from "@widgets/VerificationForm";
import styles from './styles.module.scss';

const apiService = new ApiService(); // Define ApiService outside the component

const VerificationScreen = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [registrationData, setRegistrationData] = useState(null);
    const [subtitle, setSubtitle] = useState("Fetching registration data..."); // Subtitle state

    useEffect(() => {
        const getRegistration = async () => {
            if (!id) {
                navigate('/errorpage');
                return;
            }

            try {
                const response = await apiService.get(`registrations/${id}`);
                setRegistrationData(response);
                console.log('Registration Response:', JSON.stringify(response, null, 2));
            } catch (error) {
                console.error('Error fetching registration:', error);
                navigate('/errorpage');
            }
        };

        getRegistration();
    }, [id, navigate]); // Only depend on 'id' and 'navigate'

    if (!registrationData) {
        return (
            <div className={styles.loadingContainer}>
                <h2>Loading...</h2>
                <p>{subtitle}</p>
            </div>
        );
    }

    return (
        <>
            <Logo />
            <AppGrid id="verificationscreen" widgets={{ verification: <VerificationForm registrationData={registrationData} /> }} />
        </>
    );
};

export default VerificationScreen;
