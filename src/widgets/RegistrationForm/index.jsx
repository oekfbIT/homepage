import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { PatternFormat } from 'react-number-format';
import CustomSelect from '@ui/CustomSelect'; // Adjust the import path as necessary
import Spring from '@components/Spring';
import classNames from 'classnames';
import countryList from 'react-select-country-list';
import { City } from 'country-state-city';
import styles from './styles.module.scss';

const RegistrationForm = () => {
    const [selectedCountry, setSelectedCountry] = useState();
    const [selectedCity, setSelectedCity] = useState();
    const [cities, setCities] = useState([]);
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm({
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            birth: '',
            country: null,
            city: null,
            address: '',
            zip: ''
        }
    });

    const getCountriesOptions = () => {
        let countries = countryList().getData();
        for (let i = 0; i < countries.length; i++) {
            if (countries[i].value === 'RU') {
                countries[i].label = 'Russia [terrorist state]';
            }
        }
        return countries;
    }

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        setSelectedCity(null);
        let options = [];
        const rawData = City.getCitiesOfCountry(country.value);
        rawData.map(item => options.push({ value: item.name, label: item.name }));
        setCities(options);
    }

    const onSubmit = (data) => {
        toast.success('Your changes have been successfully saved!');
    }

    return (
        <Spring className="card d-flex flex-column card-padded">
            <h2>Jetzt Registrieren</h2>
            <p>Jetzt Registrieren</p>
            <form className={`d-flex flex-column g-20 ${styles.container}`} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.section}>
                    <h4>Team Information</h4>
                    <div className={styles.row}>
                        <Controller name="name"
                                    control={control}
                                    render={({field}) => (
                                        <PatternFormat
                                            className={classNames(styles.field, {'field--error': errors.name})}
                                            placeholder="Full Name"
                                            {...field}
                                        />
                                    )}
                        />
                    </div>
                    <div className={styles.row}>
                        <Controller name="phone"
                                    control={control}
                                    render={({field}) => (
                                        <PatternFormat
                                            className={classNames(styles.field, {'field--error': errors.phone})}
                                            placeholder="Phone"
                                            format="+1 (###) ###-####"
                                            mask="_"
                                            {...field}
                                        />
                                    )}
                        />
                        <Controller name="email"
                                    control={control}
                                    render={({field}) => (
                                        <PatternFormat
                                            className={classNames(styles.field, {'field--error': errors.email})}
                                            placeholder="Email"
                                            type="email"
                                            {...field}
                                        />
                                    )}
                        />
                    </div>
                    <div className={styles.row}>
                        <Controller name="birth"
                                    control={control}
                                    render={({field}) => (
                                        <PatternFormat
                                            className={classNames(styles.field, {'field--error': errors.birth})}
                                            placeholder="Birth Date"
                                            format="##/##/####"
                                            mask="_"
                                            {...field}
                                        />
                                    )}
                        />
                    </div>
                </div>

                <div className={styles.section}>
                    <h4>Primary Contact Information</h4>
                    <div className={styles.row}>
                        <Controller name="primaryContact.first"
                                    control={control}
                                    render={({field}) => (
                                        <PatternFormat
                                            className={classNames(styles.field, {'field--error': errors.primaryContact?.first})}
                                            placeholder="First Name"
                                            {...field}
                                        />
                                    )}
                        />
                        <Controller name="primaryContact.last"
                                    control={control}
                                    render={({field}) => (
                                        <PatternFormat
                                            className={classNames(styles.field, {'field--error': errors.primaryContact?.last})}
                                            placeholder="Last Name"
                                            {...field}
                                        />
                                    )}
                        />
                    </div>
                    <div className={styles.row}>
                        <Controller name="primaryContact.phone"
                                    control={control}
                                    render={({field}) => (
                                        <PatternFormat
                                            className={classNames(styles.field, {'field--error': errors.primaryContact?.phone})}
                                            placeholder="Phone"
                                            format="+1 (###) ###-####"
                                            mask="_"
                                            {...field}
                                        />
                                    )}
                        />
                        <Controller name="primaryContact.email"
                                    control={control}
                                    render={({field}) => (
                                        <PatternFormat
                                            className={classNames(styles.field, {'field--error': errors.primaryContact?.email})}
                                            placeholder="Email"
                                            type="email"
                                            {...field}
                                        />
                                    )}
                        />
                    </div>
                </div>

                <div className={styles.section}>
                    <h4>Secondary Contact Information</h4>
                    <div className={styles.row}>
                        <Controller name="secondaryContact.first"
                                    control={control}
                                    render={({field}) => (
                                        <PatternFormat
                                            className={classNames(styles.field, {'field--error': errors.secondaryContact?.first})}
                                            placeholder="First Name"
                                            {...field}
                                        />
                                    )}
                        />
                        <Controller name="secondaryContact.last"
                                    control={control}
                                    render={({field}) => (
                                        <PatternFormat
                                            className={classNames(styles.field, {'field--error': errors.secondaryContact?.last})}
                                            placeholder="Last Name"
                                            {...field}
                                        />
                                    )}
                        />
                    </div>
                    <div className={styles.row}>
                        <Controller name="secondaryContact.phone"
                                    control={control}
                                    render={({field}) => (
                                        <PatternFormat
                                            className={classNames(styles.field, {'field--error': errors.secondaryContact?.phone})}
                                            placeholder="Phone"
                                            format="+1 (###) ###-####"
                                            mask="_"
                                            {...field}
                                        />
                                    )}
                        />
                        <Controller name="secondaryContact.email"
                                    control={control}
                                    render={({field}) => (
                                        <PatternFormat
                                            className={classNames(styles.field, {'field--error': errors.secondaryContact?.email})}
                                            placeholder="Email"
                                            type="email"
                                            {...field}
                                        />
                                    )}
                        />
                    </div>
                </div>

                <div className={styles.section}>
                    <h4>Registration Details</h4>
                    <div className={styles.row}>
                        <Controller name="teamName"
                                    control={control}
                                    render={({field}) => (
                                        <PatternFormat
                                            className={classNames(styles.field, {'field--error': errors.teamName})}
                                            placeholder="Team Name"
                                            {...field}
                                        />
                                    )}
                        />
                        <Controller name="verein"
                                    control={control}
                                    render={({field}) => (
                                        <PatternFormat
                                            className={classNames(styles.field, {'field--error': errors.verein})}
                                            placeholder="Verein Name (Optional)"
                                            {...field}
                                        />
                                    )}
                        />
                    </div>
                    <div className={styles.row}>
                        <Controller
                            name="country"
                            control={control}
                            render={({field}) => (
                                <CustomSelect
                                    className={classNames(styles.field, {'field--error': errors.country})}
                                    options={getCountriesOptions()}
                                    value={field.value}
                                    onChange={(value) => {
                                        field.onChange(value);
                                        handleCountryChange(value);
                                    }}
                                    placeholder="Country"
                                    isSearchable={true}
                                    variant="basic"
                                    innerRef={field.ref}
                                />
                            )}
                        />
                        <Controller
                            name="city"
                            control={control}
                            render={({field}) => (
                                <CustomSelect
                                    className={classNames(styles.field, {'field--error': errors.city})}
                                    options={cities}
                                    value={field.value}
                                    onChange={(value) => {
                                        field.onChange(value);
                                        setSelectedCity(value);
                                    }}
                                    placeholder="City"
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
                            render={({field}) => (
                                <CustomSelect
                                    className={classNames(styles.field, {'field--error': errors.type})}
                                    options={[
                                        {value: 'privat', label: 'Privat'},
                                        {value: 'professional', label: 'Professional'}
                                    ]}
                                    value={field.value}
                                    onChange={field.onChange}
                                    placeholder="Club Type"
                                    isSearchable={true}
                                    variant="basic"
                                    innerRef={field.ref}
                                />
                            )}
                        />
                        <Controller name="zip"
                                    control={control}
                                    render={({field}) => (
                                        <PatternFormat
                                            className={classNames(styles.field, {'field--error': errors.zip})}
                                            placeholder="Postal code"
                                            {...field}
                                        />
                                    )}
                        />
                    </div>
                    <div className={styles.row}>
                        <Controller
                            name="acceptedAGB"
                            control={control}
                            render={({field}) => (
                                <PatternFormat
                                    className={classNames(styles.field, {'field--error': errors.acceptedAGB})}
                                    checked={field.value}
                                    onChange={field.onChange}
                                    placeholder="I accept the AGB."
                                />
                            )}
                        />
                        <Controller name="referCode"
                                    control={control}
                                    render={({field}) => (
                                        <PatternFormat
                                            className={classNames(styles.field, {'field--error': errors.referCode})}
                                            placeholder="Refer Code"
                                            {...field}
                                        />
                                    )}
                        />
                    </div>
                </div>

                <div className={styles.footer}>
                    <button className="btn" type="submit">Submit</button>
                    <button className="btn btn--outlined" type="reset" onClick={reset}>Cancel</button>
                </div>
            </form>
        </Spring>
    );
}

export default RegistrationForm;
