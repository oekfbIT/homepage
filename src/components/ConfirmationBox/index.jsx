// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import {NavLink} from 'react-router-dom';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// utils
import classNames from 'classnames';

// assets
import dark404 from '@assets/404dark.webp';
import light404 from '@assets/404light.webp';

const ConfirmationBox = () => {
    const {theme} = useThemeProvider();

    return (
        <Spring className={`${styles.container} card d-flex align-items-center flex-1`}>
            <div className={styles.main}>
                <h2 className={styles.main_title}>
                    <span>Danke für deine Anmeldung.</span>
                </h2>
                <p className={styles.main_text}>
                    Sie bekommen eine email mit den nächsten Schritten um euer team anzumelden.
                    Die Ligen werden gerade ausgewerter. Unsere Diesnte kommen im August online.
                </p>
            </div>
        </Spring>
    )
}

export default ConfirmationBox