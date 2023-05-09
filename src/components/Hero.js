import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>Novella</h2>
            <h3>Books are a uniquely portable magic<br />~Stephen King</h3>
            <Link className="btn" to="/books">View All Books</Link>
        </section>
    )
}

export default Hero
