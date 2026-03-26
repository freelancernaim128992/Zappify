import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { getStoredApps } from '../../utility/addToLS';
import { toast } from 'react-toastify';

const InstalledAppCard = ({ installedAppData, handleUninstall}) => {
    const { title, image, downloads, ratingAvg,size, id } = installedAppData;
    const handleUninstallApp = (id) => {
        const storedApps= getStoredApps();
        const updatedApps = storedApps.filter(appId => appId !== id);
        localStorage.setItem('installedApps', JSON.stringify(updatedApps));
        handleUninstall(id);
        toast.success(`${title} has been uninstalled successfully!`, {
            position: "top-right",
            autoClose: 3000
        })
    };
    return (
        <div className='bg-white rounded-lg p-4'>
            <div className='flex justify-between items-center flex-col md:flex-row gap-4'>
                <div className='flex gap-5 items-center'>
                    <div className='bg-base-300 rounded-lg p-5'>
                        <img className='h-10' src={image} alt={title} />
                    </div>
                    <div>
                        <h1>{title}</h1>
                        <div className='flex gap-6 mt-2'>
                            <p className='text-success flex items-center gap-1'><MdOutlineFileDownload /> {downloads}</p>
                            <p className='text-warning flex items-center gap-1'><FaStar /> {ratingAvg}</p>
                            <p className='text-info flex items-center gap-1'>{size} MB</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleUninstallApp(id)} className="btn btn-success text-white">
                        Uninstall
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InstalledAppCard;