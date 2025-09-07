import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { SWIGGY_GET_URL } from '../utils/constants';

const Body = () => {
    console.log('Re-rendered Body');

    /**
     * State Variable - super powerful variable - we use useState hook
     * 
     * When state variable changes, React triggers a 
     * Re-conciliation cycle (re-render component again)
     */
    const [allListOfRestaurants, setAllListOfRestaurants] = useState([]);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filterBtnRestaurantLabel, setFilterBtnRestaurantLabel] = useState('Top Rated Restaurants');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_GET_URL);
        const json = await data.json();
        const restaurantList = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(restaurantList);
        setAllListOfRestaurants(restaurantList);
    };

    // setListOfRestaurants(restaurantList);
    // Normal JS variable
    // let listOfRestaurants = restaurantList;
    const filterRestaurants = () => {
        filterBtnRestaurantLabel === 'Top Rated Restaurants' ?
            setFilterBtnRestaurantLabel('All Restaurants') :
            setFilterBtnRestaurantLabel('Top Rated Restaurants');
        const filteredRestaurantList = listOfRestaurants.filter((data) => {
            return data?.info?.avgRating > 4.2;
        });
        if (filterBtnRestaurantLabel === 'Top Rated Restaurants') {
            setListOfRestaurants(filteredRestaurantList);
        } else {
            setListOfRestaurants(allListOfRestaurants);
        }
    };

    const searchRestaurant = () => {
        if (searchText !== '') {
            const filteredRestaurantList = listOfRestaurants.filter((data) => {
                return data?.info?.name.toLowerCase().includes(searchText);
            });
            setListOfRestaurants(filteredRestaurantList);
        } else {
            setListOfRestaurants(allListOfRestaurants);
        }
    };

    // Conditional Rendering
    return (listOfRestaurants?.length === 0) ? <Shimmer /> : (
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input type='text' name='search' className='search-box' value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }} />
                    <button className='btn-search-restaurants' onClick={searchRestaurant}>Search</button>
                </div>
                <button className='btn-filter' onClick={filterRestaurants}>{filterBtnRestaurantLabel}</button>
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
