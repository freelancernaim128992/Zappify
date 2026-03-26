import React, { useState, useEffect } from 'react';
import { IoSearch } from "react-icons/io5";
import AppCard from '../../components/AppCard/AppCard';
import NoAppResult from '../NoAppResult/NoAppResult';
import { ThreeDot } from 'react-loading-indicators';

const AllApps = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [allAppsData, setAllAppsData] = useState([]);
    const [filteredApps, setFilteredApps] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    
    // নিজে data fetch করো
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            // 1 সেকেন্ড delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            const response = await fetch('/appsData.json');
            const data = await response.json();
            setAllAppsData(data);
            setFilteredApps(data);
            setIsLoading(false);
        };
        
        fetchData();
    }, []);
    
    const handleAppSearchChange = (event) => {
        const searchValue = event.target.value.toLowerCase().trim();
        setSearchTerm(event.target.value);
        setIsSearching(true);
        
        setTimeout(() => {
            if (searchValue === "") {
                setFilteredApps(allAppsData);
            } else {
                const filtered = allAppsData.filter(app =>
                    app.title.toLowerCase().includes(searchValue)
                );
                setFilteredApps(filtered);
            }
            setIsSearching(false);
        }, 500);
    };
    
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <ThreeDot variant="bounce" color="#32cd32" size="medium" text="" textColor="" />
            </div>
        );
    }
    
    return (
        <section className='pt-10 max-w-6xl mx-auto'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold pb-3'>Our All Applications</h1>
                <p className='text-sm text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center my-10'>
                <h3 className='text-lg font-bold'>({filteredApps.length}) Apps Found</h3>
                <div>
                    <label className="input">
                        <IoSearch className='text-gray-400 text-lg' />
                        <input 
                            onChange={handleAppSearchChange} 
                            type="search" 
                            required 
                            placeholder="Search Apps"
                            value={searchTerm}
                        />
                    </label>
                </div>
            </div>
            
            {isSearching ? (
                <div className="flex justify-center items-center py-20">
                    <ThreeDot variant="bounce" color="#32cd32" size="medium" text="" textColor="" />
                </div>
            ) : filteredApps.length === 0 ? (
                <NoAppResult />
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-10 pb-10'>
                    {
                        filteredApps.map(appData => <AppCard key={appData.id} appData={appData} />)
                    }
                </div>
            )}
        </section>
    );
};

export default AllApps;