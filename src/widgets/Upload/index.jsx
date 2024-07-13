// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import LazyImage from '@components/LazyImage';
import Submenu from '@ui/Submenu';

// hooks
import {useRef} from 'react';
import useFileReader from '@hooks/useFileReader';
import useSubmenu from '@hooks/useSubmenu';

// assets
import user from '@assets/user.webp';
import placeholder from '@assets/placeholder.webp';

const Upload = () => {
    const {anchorEl, open, handleClick, handleClose} = useSubmenu();
    const {file, setFile, handleFile} = useFileReader();
    const inputRef = useRef(null);

    const triggerInput = () => inputRef.current?.click();

    const submenuActions = [
        {
            label: 'Upload',
            icon: 'upload',
            onClick: triggerInput,
        },
        {
            label: 'Remove',
            icon: 'trash',
            onClick: () => setFile(placeholder)
        }
    ]

    return (
        <Spring className={`${styles.card} card card-padded`}>
            <div className={`${styles.container} d-flex align-items-center`}>
                <div className={styles.wrapper}>
                    <input type="file" onChange={handleFile} ref={inputRef} hidden/>
                    <button className={styles.button} onClick={handleClick} aria-label="Open menu">
                        <i className="icon-camera"/>
                    </button>
                    <Submenu open={open} onClose={handleClose} anchorEl={anchorEl} actions={submenuActions}/>
                </div>
            </div>
        </Spring>
)
}

export default Upload