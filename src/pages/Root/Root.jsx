import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar />
            <main className='bg-base-200'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Root;