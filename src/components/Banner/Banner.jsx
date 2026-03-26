import React from 'react';
import bannerImg from '../../assets/hero.png'
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="hero bg-base-200 pt-10">
            <div className="hero-content flex-col p-0">
                <div className='text-center mb-5'>
                    <h1 className="text-5xl font-bold text-gray-700">We Build <br /> <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                                Productive
                            </span> Apps</h1>
                    <p className="py-6 max-w-2xl text-gray-500">At Zappify, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <Link target='_blank' to="https://play.google.com/store/apps"><button className="btn border-gray-300 border mr-10"><BiLogoPlayStore className='text-green-500 text-xl' /> Google Play</button></Link>
                    <Link target='_blank' to="https://www.apple.com/app-store/"><button className="btn border-gray-300 border"><FaAppStoreIos className='text-blue-500 text-xl' /> App Store</button></Link>
                </div>
                <img
                    src={bannerImg}
                    className="h-44 md:h-80"
                />
            </div>
        </div>
    );
};

export default Banner;