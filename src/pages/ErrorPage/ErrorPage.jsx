import React from 'react';
import errorImg from '../../assets/error-404.png'
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <section>
            <div className='flex justify-center flex-col items-center gap-5 h-screen items-center'>
                <div>
                    <img className='h-30 md:h-64' src={errorImg} alt="Error 404" />
                </div>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold'>Oops, page not found!</h1>
                    <p className='text-gray-500 pt-2'>The page you are looking for is not available.</p>
                    <Link to="/" className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white mt-3">Go Back!</Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;