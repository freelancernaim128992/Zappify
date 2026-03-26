import { ThreeDot } from 'react-loading-indicators';

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <ThreeDot variant="bounce" color="#32cd32" size="medium" text="" textColor="" />
        </div>
    );
};

export default LoadingSpinner;