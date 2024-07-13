import React from 'react';
import RegistrationForm from '@widgets/RegistrationForm/index';
import AppGrid from "@layout/AppGrid";
import Logo from "@components/Logo";

const widgets = {
    registration: <RegistrationForm />,
};

const RegisterScreen = () => {
    return (
        <>
            <Logo></Logo>
            <AppGrid id="registerscreen" widgets={widgets} />
        </>
    );
};

export default RegisterScreen;
