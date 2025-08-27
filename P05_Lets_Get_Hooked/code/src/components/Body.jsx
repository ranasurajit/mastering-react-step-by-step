import { useState } from 'react';
import RestaurantCard from './RestaurantCard';

const Body = (props) => {
    const restaurantList = props?.resData;
    // State Variable - super powerful variable - we use useState hook
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList || []);

    // setListOfRestaurants(restaurantList);
    // Normal JS variable
    // let listOfRestaurants = restaurantList;
    const filterRestaurants = () => {
        const filteredRestaurantList = listOfRestaurants.filter((data) => {
            return data?.info?.avgRating > 4.2;
        });
        setListOfRestaurants(filteredRestaurantList);
    };

    return (
        <div className='body'>
            <div className='filter'>
                <button className='btn-filter' onClick={filterRestaurants}>Top Rated Restaurants</button>
            </div>
            <div className='restaurant-container'>
                {
                    listOfRestaurants?.map((resData) => (
                        <RestaurantCard key={resData?.info?.id} restaurantData={resData} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;
