// HomeScreen.js
import React from 'react';
import Spring from '@components/Spring';ç
import AppGrid from "@layout/AppGrid";
import Logo from "@components/Logo";
import LigaordnungComponent from "@widgets/LigaordnungComponent";

const widgets = {
    ligaordnung: <LigaordnungComponent />,
};

const Ligaordnung = () => {
    return (
        <>
            <Logo />
            <AppGrid id="ligaordnungscreen" widgets={widgets} />
        </>
    );
};

export default Ligaordnung;
