// HomeScreen.js
import React from 'react';
import Slideshow from '@widgets/Slideshow/index';
import RegistrationForm from '@widgets/RegistrationForm/index';
import Spring from '@components/Spring';
import AppGrid from "@layout/AppGrid";
import Logo from "@components/Logo";

const widgets = {
    slideshow: <Slideshow />,
};

const HomeScreen = () => {
    return (
        <>            <Logo></Logo>
            <AppGrid id="homescreen" widgets={widgets} />
        </>
    );
};

export default HomeScreen;

