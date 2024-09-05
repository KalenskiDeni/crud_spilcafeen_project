import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink only once
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
                    <img src="src/assets/Images/logo-spilcafeen.png" alt="Logo" />
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
                {/* NavLink components for routing */}
                <NavLink to="/" onClick={toggleSlider}>Home</NavLink>
                <NavLink to="/create" onClick={toggleSlider}>Create</NavLink>
                {/* Other navigation links */}
                <a href="#" onClick={toggleSlider}>Reserver Bord</a>
                <a href="#" onClick={toggleSlider}>Menu</a>
                <a href="#" onClick={toggleSlider}>Spiloversigt</a>
                <a href="#" onClick={toggleSlider}>Services</a>
                <a href="#" onClick={toggleSlider}>In English</a>
            </div>
        </>
    );
}
