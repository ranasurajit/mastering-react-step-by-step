import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    const params = useParams();
    console.log(params);

    const resInfo = useRestaurantMenu(params?.resId);

    if (resInfo === null) {
        return <Shimmer />;
    }
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
