import { useEffect, useState } from 'react';
import { SWIGGY_GET_RESTAURANT_DETAILS_URL } from '../utils/constants';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const params = useParams();
    console.log(params);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(`${SWIGGY_GET_RESTAURANT_DETAILS_URL}=${params?.resId}`);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    if (resInfo === null) {
        return <Shimmer />;
    }
    // console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards);
    const { name, cuisines, costForTwoMessage, avgRating, locality } = resInfo?.cards?.[2]?.card?.card?.info;
    const menuItems = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards;
    console.log(menuItems);

    return (
        <div className='menu'>
            <h1>{name}</h1>
            <h3>Cuisines | {cuisines.join(', ')}</h3>
            <h3>Cost For Two | {costForTwoMessage}</h3>
            <h4>Rating | {avgRating}</h4>
            <h4>Address | {locality}</h4>
            <h2>Menu</h2>
            <ul>
                {
                    menuItems?.map((item) => {
                        const { id, name, price } = item?.card?.info;
                        return (
                            <li key={id}>
                                {name} - ₹{price / 100}.00
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default RestaurantMenu;
