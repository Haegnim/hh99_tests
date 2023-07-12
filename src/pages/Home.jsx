import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
const Home = () => {
    return (
        <div>
            <Loading />
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
