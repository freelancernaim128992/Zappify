import React, { useEffect, useState } from 'react';
import { getStoredApps } from '../../utility/addToLS';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { FaCaretDown } from "react-icons/fa";
import InstalledAppCard from '../../components/InstalledAppCard/InstalledAppCard';
import NoAppResult from '../NoAppResult/NoAppResult';

const InstalledApps = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [installedApps, setInstalledApps] = useState([]);
    const [sortType, setSortType] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1000));
            const response = await fetch('/appsData.json');
            const data = await response.json();
            const storedApps = getStoredApps();
            const installedAppsData = data.filter(app => storedApps.includes(app.id));
            setInstalledApps(installedAppsData);
            setIsLoading(false);
        };

        fetchData();
    }, []);
    const handleUninstall = (id) => {
        const updatedApps = installedApps.filter(app => app.id !== id);
        setInstalledApps(updatedApps);
    };
    const getSortedApps = () => {
        if (sortType === 'high-to-low') {
            return [...installedApps].sort((a, b) => b.size - a.size);
        } else if (sortType === 'low-to-high') {
            return [...installedApps].sort((a, b) => a.size - b.size);
        }
        return installedApps;
    };
    const sortedApps = getSortedApps();
    if (isLoading) {
        return (
            <LoadingSpinner />
        );
    }
    return (
        <section className='pt-10 max-w-6xl mx-auto'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold pb-3'>Your Installed Apps</h1>
                <p className='text-sm text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center my-10'>
                <h3 className='text-lg font-bold'>({installedApps.length}) Apps Found</h3>
                <div>
                    <div className="dropdown dropdown-bottom">
                        <div tabIndex={0} role="button" className="btn m-1 text-gray-500 border border-gray-300">Sort By Size <FaCaretDown /></div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li>
                                <a
                                    onClick={() => setSortType('high-to-low')}
                                    className={sortType === 'high-to-low' ? 'bg-purple-100 text-purple-600' : ''}
                                >
                                    High to Low
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => setSortType('low-to-high')}
                                    className={sortType === 'low-to-high' ? 'bg-purple-100 text-purple-600' : ''}
                                >
                                    Low to High
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {installedApps.length === 0 ? <NoAppResult /> : <div className='flex flex-col gap-6 pb-20'>
                {
                    sortedApps.map(installedAppData => (
                        <InstalledAppCard key={installedAppData.id} installedAppData={installedAppData} handleUninstall={handleUninstall} />
                    ))
                }
            </div>}
        </section>
    );
};

export default InstalledApps;