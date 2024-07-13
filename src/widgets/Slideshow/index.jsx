import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './styles.module.scss';
import slide1 from './assets/images/Slide1.png'
import slide2 from './assets/images/Slide2.png'
import slide3 from './assets/images/Slide3.png'

const Slideshow = () => {
    const slides = [
        {
            image: slide1,
            text: '',
            href: '/registerscreen'
        },
        {
            image: slide2,
            text: '',
            href: '/registerscreen'        },
        {
            image: slide3,
            text: '',
            href: '/registerscreen'        }
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
                    <Link to={slide.href}> {/* Use Link instead of a */}
                        <img src={slide.image} alt={`Slide ${index + 1}`} />
                        <div className={styles.textOverlay}>
                            <h1>{slide.text.split(' ')[0]}</h1>
                            <h2>{slide.text.split(' ')[1]}</h2>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Slideshow;
