import { useForm, Controller } from 'react-hook-form';
import ApiService from '../network/ApiService'; // Adjust the import path as necessary
import Navigationbar from '../components/Navigationbar';
import FooterMain from '../components/FooterMain';
import styles from "./Register.module.css";

const Register = () => {
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
            teamLogo: '',
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
                bundesland: data.bundesland,
                type: data.type,
                acceptedAGB: data.acceptedAGB,
                referCode: data.referCode,
                team_logo: "",
                initialPassword: data.initialPassword
            };
            await apiService.post('registrations/register', payload);
            alert('Registration submitted!');
            // window.location.href = '/thankyou';
        } catch (errorInfo) {
            alert('Registration failed: ' + errorInfo.message);
        }
    };

    const acceptedAGB = watch('acceptedAGB');

    return (
        <>
            <Navigationbar />
            <form className={styles.register} onSubmit={handleSubmit(onSubmit)}>
                <section className={styles.ligenWrapper}>
                    <div className={styles.ligen}>
                        <div className={styles.bundeslandCell}>
                            <img
                                className={styles.logoIcon1}
                                loading="lazy"
                                alt=""
                                src="/logo.svg"
                            />
                        </div>
                    </div>
                </section>
                <div className={styles.header}>
                    <div className={styles.inputWrapper}>
                        <h2 className={styles.sterreichischerKleinfeldFub}>
                            Österreichischer Kleinfeld Fußball Bund
                        </h2>
                        <h2 className={styles.jetztNeuRegistrieren}>
                            Jetzt Neu Registrieren
                        </h2>
                    </div>
                </div>
                <div className={styles.header1}>
                    <div className={styles.primrerAnsprechpartnerParent}>
                        <h2 className={styles.primrerAnsprechpartner}>
                            Primärer Ansprechpartner
                        </h2>
                        <h2 className={styles.kontaktdatenDerHauptkontakt}>
                            Kontaktdaten der Hauptkontakt Person
                        </h2>
                    </div>
                </div>
                <section className={styles.header2}>
                    <div className={styles.inputswrapper}>
                        <Controller
                            name="primaryContact.first"
                            control={control}
                            render={({ field }) => (
                                <input
                                    className={`${styles.input} ${errors.primaryContact?.first ? 'field--error' : ''}`}
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
                                    className={`${styles.input1} ${errors.primaryContact?.last ? 'field--error' : ''}`}
                                    placeholder="Familienname"
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name="primaryContact.email"
                            control={control}
                            render={({ field }) => (
                                <input
                                    className={`${styles.input2} ${errors.primaryContact?.email ? 'field--error' : ''}`}
                                    placeholder="Email Adresse"
                                    type="email"
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name="primaryContact.phone"
                            control={control}
                            render={({ field }) => (
                                <input
                                    className={`${styles.input3} ${errors.primaryContact?.phone ? 'field--error' : ''}`}
                                    placeholder="Telefonnummer"
                                    {...field}
                                />
                            )}
                        />
                    </div>
                </section>
                <div className={styles.header3}>
                    <div className={styles.sekundrerAnsprechpartnerParent}>
                        <h2 className={styles.sekundrerAnsprechpartner}>
                            Sekundärer Ansprechpartner
                        </h2>
                        <h2 className={styles.kontaktdatenDerSekundrerenContainer}>
                            <span
                                className={styles.kontaktdatenDer}
                            >{`Kontaktdaten der `}</span>
                            <b className={styles.sekundreren}>Sekundäreren</b>
                            <span className={styles.person}> Person</span>
                        </h2>
                    </div>
                </div>
                <section className={styles.header4}>
                    <div className={styles.inputswrapper1}>
                        <Controller
                            name="secondaryContact.first"
                            control={control}
                            render={({ field }) => (
                                <input
                                    className={`${styles.input4} ${errors.secondaryContact?.first ? 'field--error' : ''}`}
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
                                    className={`${styles.input5} ${errors.secondaryContact?.last ? 'field--error' : ''}`}
                                    placeholder="Familienname"
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name="secondaryContact.email"
                            control={control}
                            render={({ field }) => (
                                <input
                                    className={`${styles.input6} ${errors.secondaryContact?.email ? 'field--error' : ''}`}
                                    placeholder="Email Adresse"
                                    type="email"
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name="secondaryContact.phone"
                            control={control}
                            render={({ field }) => (
                                <input
                                    className={`${styles.input7} ${errors.secondaryContact?.phone ? 'field--error' : ''}`}
                                    placeholder="Telefonnummer"
                                    {...field}
                                />
                            )}
                        />
                    </div>
                </section>
                <div className={styles.teamDetailsWrapperWrapper}>
                    <div className={styles.teamDetailsWrapper}>
                        <h2 className={styles.mannschaftDetails}>Mannschaft Details</h2>
                    </div>
                </div>
                <section className={styles.registrationForm}>
                    <div className={styles.inputs}>
                        <Controller
                            name="teamName"
                            control={control}
                            render={({field}) => (
                                <input
                                    className={`${styles.input8} ${errors.teamName ? 'field--error' : ''}`}
                                    placeholder="Mannschaft Wunschname"
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name="verein"
                            control={control}
                            render={({field}) => (
                                <input
                                    className={`${styles.input9} ${errors.verein ? 'field--error' : ''}`}
                                    placeholder="Verein Name (Optional)"
                                    {...field}
                                />
                            )}
                        />
                        <div className={styles.dropdowns}>
                            <Controller
                                name="bundesland"
                                control={control}
                                render={({field}) => (
                                    <select
                                        className={`${styles.frameContainer} ${errors.bundesland ? 'field--error' : ''}`}
                                        {...field}
                                    >
                                        <option value="">Bundesland</option>
                                        <option value="wien">Wien</option>
                                        <option value="niederoesterreich">Niederösterreich</option>
                                        <option value="oberoesterreich">Oberösterreich</option>
                                        <option value="salzburg">Salzburg</option>
                                        <option value="steiermark">Steiermark</option>
                                        <option value="burgenland">Burgenland</option>
                                        <option value="kaernten">Kärnten</option>
                                        <option value="tirol">Tirol</option>
                                        <option value="vorarlberg">Vorarlberg</option>
                                    </select>
                                )}
                            />
                        </div>
                        <div className={styles.dropdowns1}>
                            <Controller
                                name="type"
                                control={control}
                                render={({field}) => (
                                    <select
                                        className={`${styles.frameContainer} ${errors.type ? 'field--error' : ''}`}
                                        {...field}
                                    >
                                        <option value="">Club Typ</option>
                                        <option value="privat">Privat</option>
                                        <option value="verein">Verein</option>
                                    </select>
                                )}
                            />
                        </div>
                        <Controller
                            name="referCode"
                            control={control}
                            render={({field}) => (
                                <input
                                    className={`${styles.input11} ${errors.referCode ? 'field--error' : ''}`}
                                    placeholder="Refer Code"
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name="zip"
                            control={control}
                            render={({field}) => (
                                <input
                                    className={`${styles.input11} ${errors.zip ? 'field--error' : ''}`}
                                    placeholder="Postleizahl"
                                    {...field}
                                />
                            )}
                        />
                        <div className={styles.agbWrapper}>
                            <Controller
                                name="acceptedAGB"
                                control={control}
                                render={({field}) => (
                                    <div className={styles.checkRow} style={{alignItems: 'flex-start'}}>
                                        <input
                                            className={`${styles.checkbox} ${errors.acceptedAGB ? 'field--error' : ''}`}
                                            type="checkbox"
                                            checked={field.value}
                                            onChange={field.onChange}
                                        />
                                        <span>
                                    Ich akzeptiere die <a href="/ligaordnung" target="_blank" rel="noopener noreferrer"
                                                          style={{textDecoration: 'underline', color: 'orange'}}>Ligaordnung & Allgemeinen Geschäftsbedingungen</a>.
                                </span>
                                    </div>
                                )}
                            />
                        </div>

                    </div>

                </section>
                <div className={styles.buttonWrapperWrapper}>
                    <div className={styles.buttonWrapper}>
                        <button className={styles.button} type="submit" disabled={!acceptedAGB}>
                            <b className={styles.jetztReigstrieren}>Jetzt Reigstrieren</b>
                            <div className={styles.registerIconWrapper}>
                                <img className={styles.icon} alt="" src="/icon.svg"/>
                            </div>
                        </button>
                        <button className={styles.button1} type="reset" onClick={() => reset()}>
                            <b className={styles.abbrechen}>Abbrechen</b>
                        </button>
                    </div>
                </div>
            </form>
            <FooterMain/>
        </>
    );
};

export default Register;
