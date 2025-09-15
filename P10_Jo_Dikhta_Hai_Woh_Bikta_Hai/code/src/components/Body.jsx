import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { SWIGGY_GET_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

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
    const onlineStatus = useOnlineStatus();

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

    if (!onlineStatus) {
        return <h1>Looks like you're offline!! Please check your Internet Connection</h1>
    }

    // Conditional Rendering
    return (listOfRestaurants?.length === 0) ? <Shimmer /> : (
        <div className='body'>
            <div className='filter flex'>
                <div className='search p-4'>
                    <input type='text' name='search' className='border border-solid border-orange-600 h-10 rounded-lg' value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }} />
                    <button className='px-4 py-2 m-4 bg-orange-500 text-white rounded-lg hover:bg-orange-400' onClick={searchRestaurant}>Search</button>
                </div>
                <div className='search p-4'>
                    <button className='px-4 py-2 m-4 bg-orange-500 text-white rounded-lg hover:bg-orange-400' onClick={filterRestaurants}>{filterBtnRestaurantLabel}</button>
                </div>
            </div>
            <div className='flex flex-wrap'>
                {
                    listOfRestaurants?.map((resData) => (
                        <Link className='restaurant-card-link'
                            key={resData?.info?.id} to={'/restaurants/' + resData?.info?.id}>
                            <RestaurantCard restaurantData={resData} />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;
