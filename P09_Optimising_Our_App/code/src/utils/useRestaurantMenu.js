import { useEffect, useState } from 'react';
import { SWIGGY_GET_RESTAURANT_DETAILS_URL } from './constants';

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(`${SWIGGY_GET_RESTAURANT_DETAILS_URL}=${resId}`);
        const json = await data.json();
        setResInfo(json.data);
    };

    return resInfo;
};

export default useRestaurantMenu;
