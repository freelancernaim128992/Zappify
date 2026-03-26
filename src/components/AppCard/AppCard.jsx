import { GoDownload } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const AppCard = ({ appData }) => {
    const { title, image, downloads, ratingAvg } = appData;
    return (
        <Link to={`/appDetails/${appData.id}`}>
            <div className="card bg-white h-auto md:h-100">
                <div className='p-3'>
                    <figure className='bg-base-300 rounded-lg p-10'>
                        <img
                            src={image}
                            className=''
                            alt={title} />
                    </figure>
                </div>
                <div className="card-body px-3 pb-5">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-between">
                        <div className="badge badge-soft badge-accent"><GoDownload /> {downloads}</div>
                        <div className="badge badge-soft badge-warning"><FaStar /> {ratingAvg}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;