import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import slide1 from './assets/images/Slide1.png'
import slide2 from './assets/images/Slide2.png'
import slide3 from './assets/images/Slide3.png'
const Slideshow = () => {
    const slides = [
        {
            image: slide1,
            text: '',
            href: '#link1'
        },
        {
            image: slide2,
            text: '',
            href: '#link2'
        },
        {
            image: slide3,
            text: '',
            href: '#link3'
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className={styles.slideshow}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                >
                    <a href={slide.href}>
                        <img src={slide.image} alt={`Slide ${index + 1}`} />
                        <div className={styles.textOverlay}>
                            <h1>{slide.text.split(' ')[0]}</h1>
                            <h2>{slide.text.split(' ')[1]}</h2>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Slideshow;
