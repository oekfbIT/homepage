import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FooterMain from '../components/FooterMain';
import ApiService from '../network/ApiService';
import styles from './Thankyou.module.css';
import Navigationbar from "../components/Navigationbar";
import { toast } from "react-toastify";
import Button from "../components/Button";

const Thankyou = () => {

    return (
        <div className={styles.blogDetail}>
            <Navigationbar />
            <div className={styles.content}>
                <div className={styles.blogText}>
                    <h2>Vielen Dank</h2>
                    <p>Ihre registrierung wurde erfolgreich aufgenommen. Sie erhalten in kürze eine Email.</p>
                    <Button className={styles.button} button={"Zur Homepage"} href="/"> </Button>
                </div>
            </div>
            <FooterMain />
        </div>
    );
};

export default Thankyou;
