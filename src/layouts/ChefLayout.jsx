import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import Navigation from '../pages/Shared/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const ChefLayout = () => {
    return (
        <div>
            <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default ChefLayout;