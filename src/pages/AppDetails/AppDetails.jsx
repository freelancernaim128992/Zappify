import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import AppInfo from '../../components/AppInfo/AppInfo';
import AppChart from '../../components/AppChart/AppChart';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const AppDetails = () => {
    const appsData = useLoaderData();
    const [isLoading, setIsLoading] = useState(true);
    const appId = useParams().id;
    
    useEffect(() => {
        if (appsData) {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1000);
            
            return () => clearTimeout(timer);
        }
    }, [appsData]);
    
    if (isLoading) {
        return <LoadingSpinner />;
    }
    
    const appData = appsData.find(app => app.id === parseInt(appId));
    const { description, ratings } = appData;
    
    return (
        <div className='max-w-6xl mx-auto'>
            <AppInfo appData={appData} />
            <AppChart ratings={ratings} />
            <div className='pb-10'>
                <h3 className='text-xl font-bold mb-1'>Description</h3>
                <p className='text-gray-500'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;