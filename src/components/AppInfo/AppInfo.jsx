import React, { useState } from 'react';
import downloadIcon from "../../assets/icon-downloads.png";
import starIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import { toast } from 'react-toastify';

const AppInfo = ({ appData }) => {
    const { image, title, companyName, size, reviews, ratingAvg, downloads } = appData;
    const [isInstalled, setIsInstalled] = useState(false);
    const handleInstalled = () => {
        setIsInstalled(true);
        toast.success(`${title} has been installed successfully!`, {
            position: "top-right",
            autoClose: 3000
        });
    };
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row justify-between w-full gap-10">
                <img
                    src={image}
                    className="h-64 rounded-lg shadow-lg p-8"
                />
                <div className='w-full'>
                    <div>
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <p className="pt-1 text-sm font-semibold">Developed by <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                            {companyName}
                        </span></p>
                    </div>
                    <div className='border border-gray-200 mt-5'></div>
                    <div className="stats grid-cols-1 md:grid-cols-3">
                        <div className="stat border-0">
                            <div><img className='h-6' src={downloadIcon} alt="" /></div>
                            <div className="stat-title mt-2">Downloads</div>
                            <div className="stat-value text-2xl">{downloads}</div>
                        </div>

                        <div className="stat border-0">
                            <div><img className='h-6' src={starIcon} alt="" /></div>
                            <div className="stat-title mt-2">Ratings</div>
                            <div className="stat-value text-secondary text-2xl">{ratingAvg}</div>
                        </div>

                        <div className="stat">
                            <div><img className='h-6' src={reviewIcon} alt="" /></div>
                            <div className="stat-title mt-2">Reviews</div>
                            <div className="stat-value text-2xl">{reviews}</div>
                        </div>
                    </div>
                    <div className='mt-1'>
                        {isInstalled ? (
                            <button className="btn btn-success text-white" disabled>
                                Installed
                            </button>
                        ) : (
                            <button onClick={handleInstalled} className="btn btn-success text-white">
                                Install Now ({size} MB)
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppInfo;