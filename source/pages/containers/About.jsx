import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <section name="Home">
                <h1>Home</h1>
                <Link to="/">
                    Go to Home
                </Link>
                <Link to="/random">
                    Go to random
                </Link>
            </section>
        );
    }
}

export default About;
