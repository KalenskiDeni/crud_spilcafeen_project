import React, { useState } from 'react';
import './Navigation.css'; // Importing CSS for styling

export default function Navigation() {
    const [isSliderOpen, setIsSliderOpen] = useState(false);

    const toggleSlider = () => {
        setIsSliderOpen(!isSliderOpen);
    };

    return (
        <>
            <nav className="navigation">
                {/* Logo */}
                <a href="#" className="logo">
                    <img src="src/Images/logo-spilcafeen.png" alt="Logo" />
                </a>

                {/* Burger Menu */}
                <div className="burger-menu" onClick={toggleSlider}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>

            {/* Slider Navigation */}
            <div className={`slider ${isSliderOpen ? 'open' : ''}`}>
                <a href="#" className="close-btn" onClick={toggleSlider}>&times;</a>
                <a href="#">Reserver Bord</a>
                <a href="#">Menu</a>
                <a href="#">Spiloversigt</a>
                <a href="#">Services</a>
                <a href="#">In English</a>
            </div>
        </>
    );
}
