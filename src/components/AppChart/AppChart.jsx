import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AppChart = ({ ratings }) => {
    const reversedRatings = [...ratings].reverse();
    return (
        <div className=' my-5'>
            <div className='border border-gray-200 mb-5'></div>
            <h3 className='text-2xl font-semibold'>Ratings</h3>
            <div className="w-full h-75 mt-5">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={reversedRatings}
                        layout="vertical"
                        margin={{ left: 0, right: 20 }}
                        barCategoryGap={5}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" dataKey="count" />
                        <YAxis
                            type="category"
                            dataKey="name"
                            width={60}
                        />
                        <Tooltip />
                        <Bar barSize={20} dataKey="count" fill="#FF8811" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className='border border-gray-200 my-5'></div>
        </div>
    );
};

export default AppChart;