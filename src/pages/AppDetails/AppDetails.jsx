import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import AppInfo from '../../components/AppInfo/AppInfo';
import AppChart from '../../components/AppChart/AppChart';

const AppDetails = () => {
    const appsData = useLoaderData();
    const appId = useParams().id;
    const appData = appsData.find(app => app.id === parseInt(appId));
    const { description, ratings,  } = appData;
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