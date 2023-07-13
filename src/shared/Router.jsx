import React, { useEffect, useState } from 'react';
import { Outlet, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Card from '../pages/Card';
import Cards from '../pages/Cards';
import Login from '../pages/Login';
import Register from '../pages/Register';
import UpdateCard from '../pages/UpdateCard';
import AddCard from '../pages/AddCard';
import { authCheck } from '../api/auth';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthCheck } from '../redux/modules/auth';
export const Router = () => {
    const auth = useSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();
    // const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        const checkIsAuth = async () => {
            try {
                const authResult = await authCheck();
                dispatch(isAuthCheck(authResult));
            } catch (e) {
                dispatch(isAuthCheck(false));
            }
        };
        checkIsAuth();
        if (auth) {
            return;
        }
    }, [auth]);

    const AuthRoutes = ({ isAuth }) => {
        return !isAuth ? <Outlet /> : <Navigate to={'/card'} />;
    };
    const UserRoutes = ({ isAuth }) => {
        return isAuth ? <Outlet /> : <Navigate to={'/'} />;
    };
    return (
        <Routes>
            <Route element={<AuthRoutes isAuth={auth} />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Register />} />
            </Route>
            <Route element={<UserRoutes isAuth={auth} />}>
                <Route path="/card" element={<Cards />} />
                <Route path="/card/:id" element={<Card />} />
                <Route path="/card/:id/update" element={<UpdateCard />} />
                <Route path="/card/add" element={<AddCard />} />
            </Route>
        </Routes>
    );
};
