// HomeScreen.js
import React from 'react';
import Slideshow from '@widgets/Slideshow/index';
import RegistrationForm from '@widgets/RegistrationForm/index';
import Spring from '@components/Spring';
import AppGrid from "@layout/AppGrid";

const widgets = {
    slideshow: <Slideshow />,
};

const HomeScreen = () => {
    return (
        <>
            <AppGrid id="homescreen" widgets={widgets} />
        </>
    );
};

export default HomeScreen;

