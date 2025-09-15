import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const resInfo = props?.restaurantData?.info;
    const imageUrl = `${CDN_URL}${resInfo.cloudinaryImageId}`;
    return (
        <div className='m-4 p-4 w-[300px] bg-orange-100 rounded-lg hover:bg-orange-200'>
            <img src={imageUrl} className='rounded-lg' />
            <h3 className='font-bold py-4 text-lg'>{resInfo?.name}</h3>
            <h4>{resInfo?.cuisines?.join(', ')}</h4>
            <h5>{resInfo?.avgRating} stars</h5>
            <h5>{resInfo?.costForTwo}</h5>
            <h5>{resInfo?.sla?.slaString}</h5>
        </div>
    );
};

export default RestaurantCard;
