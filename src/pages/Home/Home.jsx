import React, { Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
import OurStatistics from '../../components/OurStatistics/OurStatistics';
import TrendingApps from '../../components/TrendingApps/TrendingApps';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const Home = () => {
    const trendingAppsDataPromise = fetch("/appsData.json").then(res => res.json());
    return (
        <div>
            <Banner />
            <OurStatistics />
            <Suspense fallback={<LoadingSpinner />}>
                <TrendingApps trendingAppsDataPromise={trendingAppsDataPromise} />
            </Suspense>
        </div>
    );
};

export default Home;