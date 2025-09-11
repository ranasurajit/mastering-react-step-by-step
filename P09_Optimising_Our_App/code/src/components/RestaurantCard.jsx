import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const resInfo = props?.restaurantData?.info;
    const imageUrl = `${CDN_URL}${resInfo.cloudinaryImageId}`;
    return (
        <div className='restaurant-card'>
            <img src={imageUrl} className='restaurant-image' />
            <h3>{resInfo?.name}</h3>
            <h4>{resInfo?.cuisines?.join(', ')}</h4>
            <h5>{resInfo?.avgRating} stars</h5>
            <h5>{resInfo?.costForTwo}</h5>
            <h5>{resInfo?.sla?.slaString}</h5>
        </div>
    );
};

export default RestaurantCard;
