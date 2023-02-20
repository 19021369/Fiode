import React from 'react';
import { useState, useEffect } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';

function ScrollTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        console.log('x');
        window.scrollTo({
            top: 0,
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    return (
        (isVisible && (<div className="fixed bottom-2 right-2">
            <button
                type="button"
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
                <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
            </button>
        </div>))
        
        
    );
}

export default ScrollTop;
