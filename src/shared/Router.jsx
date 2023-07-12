import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Card from '../pages/Card';
import Cards from '../pages/Cards';
import Login from '../pages/Login';
import Register from '../pages/Register';
import UpdateCard from '../pages/UpdateCard';
import AddCard from '../pages/AddCard';
export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card/:id" element={<Card />} />
            <Route path="/card" element={<Cards />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Register />} />
            <Route path="/card/:id/update" element={<UpdateCard />} />
            <Route path="/card/add" element={<AddCard />} />
        </Routes>
    );
};
