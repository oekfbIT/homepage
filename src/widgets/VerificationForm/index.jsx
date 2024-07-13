import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Spring from '@components/Spring';
import styles from './styles.module.scss';
import ApiService from '../../networking/ApiService';
import FirebaseImageUpload from "../../networking/Firebase/storage/FirebaseImageUpload";

const VerificationForm = ({ registrationData }) => {
    const apiService = new ApiService();
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    const generatePassword = (length = 12) => {
        const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    };

    const { register, handleSubmit, formState: { errors }, reset, control, setValue, watch } = useForm({
        defaultValues: {
            id: registrationData.id || '',
            primary: {
                first: registrationData.primary?.first || '',
                last: registrationData.primary?.last || '',
                phone: registrationData.primary?.phone || '',
                email: registrationData.primary?.email || '',
                identification: registrationData.primary?.identification || null
            },
            secondary: {
                first: registrationData.secondary?.first || '',
                last: registrationData.secondary?.last || '',
                phone: registrationData.secondary?.phone || '',
                email: registrationData.secondary?.email || '',
                identification: registrationData.secondary?.identification || null
            },
            teamName: registrationData.team_name || '',
            verein: registrationData.verein || '',
            bundesland: registrationData.bundesland || '', // Ensure this is included
            acceptedAGB: registrationData.acceptedAGB || false,
            referCode: registrationData.referCode || '',
            status: "draft",
            initialPassword: registrationData.initial_password || generatePassword(),
            customer_signed_contract: registrationData.customer_signed_contract || null
        }
    });

    const watchedFields = watch(['primary.identification', 'secondary.identification', 'customer_signed_contract']);

    useEffect(() => {
        const { primary, secondary, customer_signed_contract } = watchedFields;
        setIsSubmitDisabled(
            !primary?.identification || !secondary?.identification || !customer_signed_contract
        );
    }, [watchedFields]);

    const onSubmit = async (data) => {
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
                team_name: data.teamName,
                verein: data.verein,
                bundesland: data.bundesland, // Ensure this is included
                acceptedAGB: data.acceptedAGB,
                referCode: data.referCode,
                id: registrationData.id || '',
                status: "verified",
                initial_password: data.initialPassword,
                customer_signed_contract: data.customer_signed_contract
            };
            await apiService.patch(`registrations/${registrationData.id}`, payload); // Use the correct URL
            toast.success('Registration submitted!');
            window.location.href = '/thankyou';
        } catch (errorInfo) {
            toast.error('Registration failed: ' + errorInfo.message);
        }
    };

    const handleUploadPrimarySuccess = (fileUrl) => {
        setValue('primary.identification', fileUrl);
        console.log("Successfully Uploaded Primary Identification:", fileUrl);
    };

    const handleUploadSecondarySuccess = (fileUrl) => {
        setValue('secondary.identification', fileUrl);
        console.log("Successfully Uploaded Secondary Identification:", fileUrl);
    };

    const handleUploadContractSuccess = (fileUrl) => {
        setValue('customer_signed_contract', fileUrl);
        console.log("Successfully Uploaded Contract:", fileUrl);
    };

    return (
        <Spring className={`card d-flex flex-column card-padded ${styles.container}`}>
            <form className="d-flex flex-column g-20" onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.section}>
                    <h1 style={{ marginBottom: '20px', color: "white" }}>
                        Hallo, {registrationData.primary?.first}, {registrationData.secondary?.first}
                    </h1>
                    <p style={{ marginBottom: '50px', color: "white" }}>Subtitle!</p>

                    {/* Primary Identification Upload */}
                    <h2 style={{ marginTop: '50px', marginBottom: '20px', color: "white" }}>Bitte laden sie eine Ausweiskopie als bild oder PDF datei</h2>
                    <p style={{ marginBottom: '50px', color: "white" }}>Ausweis für {registrationData.primary?.first}</p>
                    <FirebaseImageUpload
                        onUploadSuccess={handleUploadPrimarySuccess}
                        path={`registrations/${registrationData.initial_password}`}
                        filename={`${registrationData.initial_password}_primary_identification`}
                    />

                    {/* Secondary Identification Upload */}
                    <h2 style={{ marginTop: '50px', marginBottom: '20px', color: "white" }}>Bitte laden sie eine Ausweiskopie als bild oder PDF datei</h2>
                    <p style={{ marginBottom: '50px', color: "white" }}>Ausweis für {registrationData.secondary?.first}</p>
                    <FirebaseImageUpload
                        onUploadSuccess={handleUploadSecondarySuccess}
                        path={`registrations/${registrationData.initial_password}`}
                        filename={`${registrationData.initial_password}_secondary_identification`}
                    />

                    {/* Contract Upload */}
                    <h2 style={{ marginTop: '50px', marginBottom: '20px', color: "white" }}>Bitte laden sie eine sAusweiskopie als bild oder PDF datei</h2>
                    <p style={{ marginBottom: '50px', color: "white" }}>Ausweis für {registrationData.primary?.first}</p>
                    <FirebaseImageUpload
                        onUploadSuccess={handleUploadContractSuccess}
                        path={`registrations/${registrationData.initial_password}`}
                        filename={`${registrationData.initial_password}_kunden_vertrag_unterschrieben`}
                    />

                </div>

                <div className={styles.footer}>
                    <button className="btn" type="submit" disabled={isSubmitDisabled}>Submit</button>
                    <button className="btn btn--outlined" type="reset" onClick={() => reset()}>Cancel</button>
                </div>
            </form>
        </Spring>
    );
}

export default VerificationForm;
