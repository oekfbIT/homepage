import { useEffect } from 'react';

const useSmoothScroll = () => {
    useEffect(() => {
        const handleSmoothScroll = (e) => {
            const targetId = e.currentTarget.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault(); // Prevent default anchor click behavior
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', handleSmoothScroll);
        });

        // Clean up the event listeners
        return () => {
            links.forEach(link => {
                link.removeEventListener('click', handleSmoothScroll);
            });
        };
    }, []); // Empty array ensures the effect runs only once on mount
};

export default useSmoothScroll;
