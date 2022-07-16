
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { card, container, cardHeader, hideIcon, fullscreenIcon, closeIcon, content } from './Card.module.scss';
import { withTouched } from '../touchedContext';
import { useMediaQuery } from '../hooks';

const Card = ({ posTop, posLeft, setTop, setLeft, fileName, CardContent, setWindowOpened, isTouched, setIsTouched, customStyles }) => {
    const componentRef = useRef(null);
    const [width, setWidth] = useState('750px');
    const [height, setHeight] = useState('426px');
    const [fullWidth, setFullWidth] = useState(false);
    const isCardPinned = useMediaQuery('(min-width: 1025px)');
    const desktopStyles = { width, height, top: posTop, left: posLeft, zIndex: isTouched === fileName ? 4 : 3 };

    // Drag'n'drop
    useEffect(() => {
        const cardRef = componentRef.current;
        const topBar = cardRef.querySelector('header');

        const handleMouse = e => {
            setIsTouched(fileName);
            let shiftX = e.clientX - cardRef.getBoundingClientRect().left;
            let shiftY = e.clientY - cardRef.getBoundingClientRect().top;
            

            const moveAt = (pageX, pageY) => {
                setTop(`${pageY - shiftY}px`)
                setLeft(`${pageX - shiftX}px`)
            }

            const onMouseMove = (e) => {
                moveAt(e.pageX, e.pageY);
            }

            moveAt(e.pageX, e.pageY);

            document.addEventListener('mousemove', onMouseMove);

            cardRef.onmouseup = function() {
                document.removeEventListener('mousemove', onMouseMove);
                cardRef.onmouseup = null;
            }
        }

        topBar.addEventListener('mousedown', handleMouse);

        cardRef.ondragstart = function() {
            return false;
        };

        topBar.ondragstart = function() {
            return false;
        };

        return () => {
            topBar.removeEventListener('mousedown', handleMouse);
        }
    }, []);

    const handleFullsize = (e) => {
        const cardRef = componentRef.current;

        if(!fullWidth) {
            cardRef.style.top = 0;
            cardRef.style.left = 0;
            cardRef.style.height = `${window.innerHeight}px`;
            cardRef.style.width = `${window.innerWidth}px`;
            cardRef.style.setProperty('--top', posTop);
            cardRef.style.setProperty('--left', posLeft);
            setFullWidth(true);
        } else {
            cardRef.style.top = cardRef.style.getPropertyValue('--top');
            cardRef.style.removeProperty('--top')
            cardRef.style.left = cardRef.style.getPropertyValue('--left');
            cardRef.style.removeProperty('--left')
            cardRef.style.height = height;
            cardRef.style.width = width;
            setFullWidth(false);
        }
    };

    return (
        <div ref={componentRef} className={card} style={isCardPinned ? desktopStyles : customStyles}>
            <div className={container}>
                <header className={cardHeader}>
                    <p>{ fileName.toUpperCase() } - NOTEPAD</p>
                    <button className={hideIcon}></button>
                    <button onClick={() => handleFullsize()} className={fullscreenIcon}></button>
                    <button onClick={() => setWindowOpened(false)} className={closeIcon}></button>
                </header>
                <div className={content}>
                    <CardContent />
                </div>
            </div>
        </div>
    )
};

export default withTouched(Card);