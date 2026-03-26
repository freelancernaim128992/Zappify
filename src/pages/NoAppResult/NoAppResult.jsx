import React from 'react';
import NoAppImage from '../../assets/App-Error.png';

const NoAppResult = () => {
    return (
        <section className='py-16'>
            <div className='flex justify-center flex-col items-center gap-5'>
                <div>
                    <img className='h-50' src={NoAppImage} alt="No App Found" />
                </div>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold'>OPPS!! APP NOT FOUND</h1>
                    <p className='text-gray-500 pt-2'>The App you are requesting is not found on our system.  please try another apps.</p>
                </div>
            </div>
        </section>
    );
};

export default NoAppResult;