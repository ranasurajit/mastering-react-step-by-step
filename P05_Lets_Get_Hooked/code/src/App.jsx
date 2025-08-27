import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { restaurantList } from './utils/mockData';

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body resData={restaurantList} />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
