import React from 'react';

const OurStatistics = () => {
    return (
        <section className='bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>
            <h1 className='text-4xl font-semibold text-white text-center pt-10'>Trusted by Millions, Built for You</h1>
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-sm font-semibold text-white">Total Downloads</div>
                        <div className="text-4xl font-bold text-white py-4">29.6M</div>
                        <div className="text-sm text-white">21% more than last month</div>
                    </div>

                    <div className="text-center">
                        <div className="text-sm font-semibold text-white">Total Reviews</div>
                        <div className="text-4xl font-bold text-white py-4">906K</div>
                        <div className="text-sm text-white">46% more than last month</div>
                    </div>

                    <div className="text-center">
                        <div className="text-sm font-semibold text-white">Active Apps</div>
                        <div className="text-4xl font-bold text-white py-4">132+</div>
                        <div className="text-sm text-white">31 more will launch</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default OurStatistics;