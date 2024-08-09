import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ApiService from '../network/ApiService';
import FirebaseImageUpload from "../network/Firebase/storage/FirebaseImageUpload";
import styles from "./Upload.module.css";
import Navigationbar from "../components/Navigationbar";
import FooterMain from "../components/FooterMain";

const apiService = new ApiService(); // Define ApiService outside the component

const Upload = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [registrationData, setRegistrationData] = useState(null);

    const { register, handleSubmit, formState: { errors }, reset, control, setValue, watch } = useForm();

    useEffect(() => {
        const getRegistration = async () => {
            if (!id) {
                console.log("NO ID");
                return;
            } else {
                console.log("identified as ", id);
            }

            try {
                const response = await apiService.get(`registrations/${id}`);
                setRegistrationData(response);
                console.log('Registration Response:', JSON.stringify(response, null, 2));

                // Reset form with fetched data
                reset({
                    id: response.id || '',
                    primary: {
                        first: response.primary?.first || '',
                        last: response.primary?.last || '',
                        phone: response.primary?.phone || '',
                        email: response.primary?.email || '',
                        identification: response.primary?.identification || ''
                    },
                    secondary: {
                        first: response.secondary?.first || '',
                        last: response.secondary?.last || '',
                        phone: response.secondary?.phone || '',
                        email: response.secondary?.email || '',
                        identification: response.secondary?.identification || ''
                    },
                    teamName: response.team_name || '',
                    verein: response.verein || '',
                    bundesland: response.bundesland || 'wien', // Ensure this is included and has a default value
                    acceptedAGB: response.acceptedAGB || false,
                    referCode: response.referer_link || '',
                    status: "verified",
                    initialPassword: response.initial_password || generatePassword(),
                    customer_signed_contract: response.customer_signed_contract || '',
                    team_logo: response.team_logo || ''
                });
            } catch (error) {
                console.error('Error fetching registration:', error);
                navigate('/errorpage');
            }
        };

        getRegistration();
    }, [id, navigate, reset]); // Only depend on 'id', 'navigate', and 'reset'

    const generatePassword = (length = 12) => {
        const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    };

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const payload = {
                primary: {
                    ...data.primary,
                    identification: data.primary.identification
                },
                secondary: {
                    ...data.secondary,
                    identification: data.secondary.identification
                },
                teamName: data.teamName,
                verein: data.verein,
                bundesland: data.bundesland,
                acceptedAGB: data.acceptedAGB,
                referCode: data.referCode,
                status: "verified",
                initialPassword: data.initialPassword,
                customer_signed_contract: data.customer_signed_contract,
                team_logo: data.team_logo
            };
            await apiService.patch(`registrations/${registrationData.id}`, payload); // Use the correct URL
            toast.success('Registrierung erfolgreich eingereicht!');
            window.location.href = '/thankyou';
        } catch (errorInfo) {
            toast.error('Registrierung fehlgeschlagen: ' + errorInfo.message);
        }
    };

    const handleUploadPrimarySuccess = (fileUrl) => {
        setValue('primary.identification', fileUrl);
        console.log("Erfolgreich hochgeladen: Primäre Identifikation:", fileUrl);
    };

    const handleUploadSecondarySuccess = (fileUrl) => {
        setValue('secondary.identification', fileUrl);
        console.log("Erfolgreich hochgeladen: Sekundäre Identifikation:", fileUrl);
    };

    const handleUploadContractSuccess = (fileUrl) => {
        setValue('customer_signed_contract', fileUrl);
        console.log("Erfolgreich hochgeladen: Vertrag:", fileUrl);
    };

    const handleUploadLogoSuccess = (fileUrl) => {
        setValue('team_logo', fileUrl);
        console.log("Erfolgreich hochgeladen: Vertrag:", fileUrl);
    };

    if (!registrationData) {
        return (
            <div className={styles.loadingContainer}>
                <h2>Loading...</h2>
                <p>Fetching registration data...</p>
            </div>
        );
    }

    return (
        <div className={styles.upload}>
            <header className={styles.navigationbar}>
                <Navigationbar />
            </header>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.uploadInner}>
                    <div className={styles.sterreichischerKleinfeldFubParent}>
                        <h2 className={styles.sterreichischerKleinfeldFub}>Österreichischer Kleinfeld Fußball Bund</h2>
                        <h2 className={styles.jetztNeuRegistrieren}>Jetzt Neu Registrieren</h2>
                    </div>
                </div>
                <div className={styles.uploadChild}>
                    <div className={styles.bitteLadenSieIhrWappenlogParent}>
                        <h2 className={styles.bitteLadenSie}>Bitte laden sie ihr Wappen/Logo für ihre Mannschaft hoch</h2>
                        <h3 className={styles.frOptimaleQualitt}>Für optimale Qualität bitte laden sie eine PDF oder JPEG/PNG Datei</h3>
                        <FirebaseImageUpload
                            onUploadSuccess={handleUploadLogoSuccess}
                            path={`registrations/${registrationData.initial_password}`}
                            filename={`${registrationData.initial_password}_logo`}
                        />
                    </div>
                </div>
                <div className={styles.uploadChild}>
                    <div className={styles.bitteLadenSieDenAusweisVoParent}>
                        <h2 className={styles.bitteLadenSie1}>Bitte laden sie den Ausweis von Primar hoch</h2>
                        <h3 className={styles.frOptimaleQualitt1}>Für optimale Qualität bitte laden sie eine PDF oder JPEG/PNG Datei</h3>
                        <FirebaseImageUpload
                            onUploadSuccess={handleUploadPrimarySuccess}
                            path={`registrations/${registrationData.initial_password}`}
                            filename={`${registrationData.initial_password}_primary_identification`}
                        />
                    </div>
                </div>
                <div className={styles.uploadInner1}>
                    <div className={styles.bitteLadenSieEineKopieIhrParent}>
                        <h2 className={styles.bitteLadenSie2}>Bitte laden Sie eine Kopie Ihres Ausweises als Bild oder PDF hoch</h2>
                        <h3 className={styles.frOptimaleQualitt2}>Für optimale Qualität bitte laden sie eine PDF oder JPEG/PNG Datei</h3>
                        <FirebaseImageUpload
                            onUploadSuccess={handleUploadSecondarySuccess}
                            path={`registrations/${registrationData.initial_password}`}
                            filename={`${registrationData.initial_password}_secondary_identification`}
                        />
                    </div>
                </div>
                <div className={styles.uploadInner2}>
                    <div className={styles.bitteLadenSieDenUnterzeichParent}>
                        <h2 className={styles.bitteLadenSie3}>Bitte laden Sie den unterzeichneten Vertrag hoch</h2>
                        <h3 className={styles.frOptimaleQualitt3}>Für optimale Qualität bitte laden sie eine PDF oder JPEG/PNG Datei</h3>
                        <FirebaseImageUpload
                            onUploadSuccess={handleUploadContractSuccess}
                            path={`registrations/${registrationData.initial_password}`}
                            filename={`${registrationData.initial_password}_kunden_vertrag_unterschrieben`}
                        />
                    </div>
                </div>
                <div className={styles.buttonframeWrapper}>
                    <div className={styles.buttonframe}>
                        <button className={styles.button} type="submit">
                            <b className={styles.jetztReigstrieren}>Jetzt Einreichen</b>
                            <div className={styles.iconWrapper}>
                                <img className={styles.icon} alt="" src="/icon.svg" />
                            </div>
                        </button>
                        <button className={styles.buttonOutlined} type="reset" onClick={() => reset()}>
                            <b className={styles.abbrechen1}>Abbrechen</b>
                        </button>
                    </div>
                </div>
            </form>
            <FooterMain />
        </div>
    );
};

export default Upload;
