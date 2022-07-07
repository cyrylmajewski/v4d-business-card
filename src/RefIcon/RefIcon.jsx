import { useEffect, useRef } from 'react'; 
import styles from './RefIcon.module.scss';
import icon from '../assets/txt-icon.png';

const RefIcon = ({ fileName, openFile }) => {
    const componentRef = useRef(null);

    const handleDoubleClick = (e) => {
        openFile(true);
    }

    useEffect(() => {
        const RefIconComp = componentRef.current;

        RefIconComp.addEventListener('dblclick', handleDoubleClick);
    }, []);

    return (
        <div ref={componentRef} className={`${styles.refIcon}`}>
            <img src={icon} alt="icon" />
            { fileName }
        </div>
    )
}

export default RefIcon;