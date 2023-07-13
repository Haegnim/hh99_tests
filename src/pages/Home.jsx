import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to="/join">
                <Button>Join</Button>
            </Link>
            <Link to="/login">
                <Button>Login</Button>
            </Link>
        </div>
    );
};

export default Home;
