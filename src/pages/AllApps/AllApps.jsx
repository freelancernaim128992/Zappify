import React from 'react';
import { IoSearch } from "react-icons/io5";
import { useLoaderData } from 'react-router';
import AppCard from '../../components/AppCard/AppCard';

const AllApps = () => {
    const allAppsData = useLoaderData();
    return (
        <section className='pt-10 max-w-6xl mx-auto'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold pb-3'>Our All Applications</h1>
                <p className='text-sm text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center my-10'>
                <h3 className='text-lg font-bold'>(20) Apps Found</h3>
                <div>
                    <label className="input">
                        <IoSearch className='text-gray-400 text-lg' />
                        <input type="search" required placeholder="Search Apps" />
                    </label>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-5 my-10'>
                {
                    allAppsData.map(appData => <AppCard key={appData.id} appData={appData} />)
                }
            </div>
        </section>
    );
};

export default AllApps;