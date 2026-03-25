import React, { use } from 'react';
import AppCard from '../AppCard/AppCard';
import { Link } from 'react-router';

const TrendingApps = ({trendingAppsDataPromise}) => {
    const trendingAppsData = use(trendingAppsDataPromise);
    const slicedTrendingAppsData = trendingAppsData.slice(0, 8);
    console.log(slicedTrendingAppsData);
    return (
        <section className='mt-10 max-w-6xl mx-auto'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold pb-3'>Trending Apps</h1>
                <p className='text-sm text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-4 gap-5 mt-10'>
                {
                    slicedTrendingAppsData.map(appData => <AppCard key={appData.id} appData={appData} />)
                }
            </div>
            <div className='flex justify-center pt-15 pb-20'>
                <Link to="allApps"><button className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-8 py-5'>Show All</button></Link>
            </div>
        </section>
    );
};

export default TrendingApps;