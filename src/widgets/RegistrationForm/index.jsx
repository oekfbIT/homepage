import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { PatternFormat } from 'react-number-format';
import CustomSelect from '@ui/CustomSelect'; // Adjust the import path as necessary
import Spring from '@components/Spring';
import classNames from 'classnames';
import styles from './styles.module.scss';
import ApiService from '../../networking/ApiService'; // Adjust the import path as necessary

const RegistrationForm = () => {
    const apiService = new ApiService();

    const generatePassword = (length = 12) => {
        const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    };

    const { register, handleSubmit, formState: { errors }, reset, control, watch } = useForm({
        defaultValues: {
            primaryContact: {
                first: '',
                last: '',
                phone: '',
                email: '',
            },
            secondaryContact: {
                first: '',
                last: '',
                phone: '',
                email: '',
            },
            teamName: '',
            verein: '',
            bundesland: '',
            type: '',
            acceptedAGB: false,
            referCode: '',
            initialPassword: generatePassword()
        }
    });

    const onSubmit = async (data) => {
        try {
            const payload = {
                primaryContact: data.primaryContact,
                secondaryContact: data.secondaryContact,
                teamName: data.teamName,
                verein: data.verein,
                bundesland: data.bundesland.value,
                type: data.type.value,
                acceptedAGB: data.acceptedAGB,
                referCode: data.referCode,
                initialPassword: data.initialPassword
            };
            await apiService.post('registrations/register', payload);
            toast.success('Registration submitted!');
            window.location.href = '/thankyou';
        } catch (errorInfo) {
            toast.error('Registration failed: ' + errorInfo.message);
        }
    };

    const acceptedAGB = watch('acceptedAGB');

    return (
        <Spring className="card d-flex flex-column card-padded">
            <form className={`d-flex flex-column g-20 ${styles.container}`} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.section}>
                    <h1 style={{ marginBottom: '20px' }}>Jetzt Neu Registrieren</h1>
                    <p style={{ marginBottom: '50px' }}>Wir haben viele neue Updates für die neue Saison vorbereitet!</p>
                    <h2 style={{ marginBottom: '20px' }}>Primärer Ansprechpartner</h2>
                    <div className={styles.row}>
                        <Controller
                            name="primaryContact.first"
                            control={control}
                            render={({ field }) => (
                                <input
                                    className={classNames(styles.field, { 'field--error': errors.primaryContact?.first })}
                                    placeholder="Vorname"
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name="primaryContact.last"
                            control={control}
                            render={({ field }) => (
                                <input
                                    className={classNames(styles.field, { 'field--error': errors.primaryContact?.last })}
                                    placeholder="Familienname"
                                    {...field}
                                />
                            )}
                        />
                    </div>
                    <div className={styles.row}>
                        <Controller
                            name="primaryContact.phone"
                            control={control}
                            render={({ field }) => (
                                <PatternFormat
                                    className={classNames(styles.field, { 'field--error': errors.primaryContact?.phone })}
                                    placeholder="Telefonnummer"
                                    format="+43 (###) ###-########"
                                    mask="_"
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name="primaryContact.email"
                            control={control}
                            render={({ field }) => (
                                <input
                                    className={classNames(styles.field, { 'field--error': errors.primaryContact?.email })}
                                    placeholder="Email-Adresse"
                                    type="email"
                                    {...field}
                                />
                            )}
                        />
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 style={{ marginBottom: '20px' }}>Sekundärer Ansprechpartner</h2>
                    <div className={styles.row}>
                        <Controller
                            name="secondaryContact.first"
                            control={control}
                            render={({ field }) => (
                                <input
                                    className={classNames(styles.field, { 'field--error': errors.secondaryContact?.first })}
                                    placeholder="Vorname"
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name="secondaryContact.last"
                            control={control}
                            render={({ field }) => (
                                <input
                                    className={classNames(styles.field, { 'field--error': errors.secondaryContact?.last })}
                                    placeholder="Familienname"
                                    {...field}
                                />
                            )}
                        />
                    </div>
                    <div className={styles.row}>
                        <Controller
                            name="secondaryContact.phone"
                            control={control}
                            render={({ field }) => (
                                <PatternFormat
                                    className={classNames(styles.field, { 'field--error': errors.secondaryContact?.phone })}
                                    placeholder="Telefonnummer"
                                    format="+43 (###) ###-#######"
                                    mask="_"
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name="secondaryContact.email"
                            control={control}
                            render={({ field }) => (
                                <input
                                    className={classNames(styles.field, { 'field--error': errors.secondaryContact?.email })}
                                    placeholder="Email-Adresse"
                                    type="email"
                                    {...field}
                                />
                            )}
                        />
                    </div>
                </div>

                <div className={styles.section}>
                    <h4>Registrierungs Details</h4>
                    <div className={styles.row}>
                        <Controller
                            name="teamName"
                            control={control}
                            render={({ field }) => (
                                <input
                                    className={classNames(styles.field, { 'field--error': errors.teamName })}
                                    placeholder="Mannschaft Wunschname"
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name="verein"
                            control={control}
                            render={({ field }) => (
                                <input
                                    className={classNames(styles.field, { 'field--error': errors.verein })}
                                    placeholder="Verein Name (Optional)"
                                    {...field}
                                />
                            )}
                        />
                    </div>
                    <div className={styles.row}>
                        <Controller
                            name="bundesland"
                            control={control}
                            render={({ field }) => (
                                <CustomSelect
                                    className={classNames(styles.field, { 'field--error': errors.bundesland })}
                                    options={[
                                        { value: 'wien', label: 'Wien' },
                                        { value: 'niederoesterreich', label: 'Niederösterreich' },
                                        { value: 'oberoesterreich', label: 'Oberösterreich' },
                                        { value: 'salzburg', label: 'Salzburg' },
                                        { value: 'steiermark', label: 'Steiermark' },
                                        { value: 'burgenland', label: 'Burgenland' },
                                        { value: 'kaernten', label: 'Kärnten' },
                                        { value: 'tirol', label: 'Tirol' },
                                        { value: 'vorarlberg', label: 'Vorarlberg' },
                                        { value: 'ausgetreten', label: 'Ausgetreten' },
                                        { value: 'auszuwerten', label: 'Auszuwerten' }
                                    ]}
                                    value={field.value}
                                    onChange={(value) => {
                                        field.onChange(value);
                                    }}
                                    placeholder="Bundesland"
                                    isSearchable={true}
                                    variant="basic"
                                    innerRef={field.ref}
                                />
                            )}
                        />
                    </div>
                    <div className={styles.row}>
                        <Controller
                            name="type"
                            control={control}
                            render={({ field }) => (
                                <CustomSelect
                                    className={classNames(styles.field, { 'field--error': errors.type })}
                                    options={[
                                        { value: 'privat', label: 'Privat' },
                                        { value: 'verein', label: 'Verein' }
                                    ]}
                                    value={field.value}
                                    onChange={field.onChange}
                                    placeholder="Club Typ"
                                    isSearchable={true}
                                    variant="basic"
                                    innerRef={field.ref}
                                />
                            )}
                        />
                        <Controller
                            name="zip"
                            control={control}
                            render={({ field }) => (
                                <input
                                    className={classNames(styles.field, { 'field--error': errors.zip })}
                                    placeholder="Postleizahl"
                                    {...field}
                                />
                            )}
                        />
                    </div>
                    <div className={styles.row}>
                        <Controller
                            name="acceptedAGB"
                            control={control}
                            render={({ field }) => (
                                <div className={styles.checkRow} style={{ alignItems: 'flex-start' }}>
                                    <input
                                        className={classNames(styles.checkbox, { 'field--error': errors.acceptedAGB })}
                                        type="checkbox"
                                        checked={field.value}
                                        onChange={field.onChange}
                                    />
                                    <span>
                                        <a href="/agb" target="_blank" rel="noopener noreferrer">I accept the AGB</a>.
                                    </span>
                                </div>
                            )}
                        />
                        <Controller
                            name="referCode"
                            control={control}
                            render={({ field }) => (
                                <input
                                    className={classNames(styles.field, { 'field--error': errors.referCode })}
                                    placeholder="Refer Code"
                                    {...field}
                                />
                            )}
                        />
                    </div>
                </div>

                <div className={styles.footer}>
                    <button className="btn" type="submit" disabled={!acceptedAGB}>Registrierung Absenden</button>
                    <button className="btn btn--outlined" type="reset" onClick={() => reset()}>Abbrechen</button>
                </div>
            </form>
        </Spring>
    );
}

export default RegistrationForm;
