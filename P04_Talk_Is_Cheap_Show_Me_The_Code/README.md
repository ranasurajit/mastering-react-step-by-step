# React - Talk is Cheap Show Me the Code

## Planning for the App

- Plan the application and its sections via wireframe
- We have decided to go with developing Food Delivery App
- We have divided our App into three major sections, Header, Body and Footer

## Skeleton

```
- Header
    - Logo
    - Nav Items

- Body
    - Search Bar
    - Restaurant Containers
        - Restaurant Cards
            - Image
            - Name of Restaurant, Star Rating, Cuisine, Delivery Time

- Footer
    - Copyright
    - Links
    - Address
    - Contact
```

## Dynamically Passing Parameters/Arguments to the Components

### React Props

- Short form of Properties
- In React, Functional Component is a Normal JavaScript Function, Props are the arguments to the Function
- Passing props to a component is similar to passing argument to a function

### Config Driven UI

- UI which are driven by data
- Controlling the visibility / layout of the UI by data
- App is built upon UI layer and Data layer

### Reusable Components

- To render data dynamically, we should make our components re-usable

### Unique Key Properties

- Whenever we loop over a component to replicate it multiple times we need to identify each of them uniquely
- We do it by passing key attribute to the repeated component
- React optimizes its render cycles with the help of this key
- If the unique key is not passed, React will be unable to identify already rendered components and basically it has to re-render them all post clearing the parent container
- If unique key is passed, React will identify the already rendered component and will
  have to render only the newly added components
- By default, if React does not get a unique key identifier, React returns a warning exception on the Browser console
- React recommends not to use the array element index as keys. **Index as a key is an Anti-Pattern**
- Not using keys (not acceptable) <<<<<<<<<<<< Index as keys <<<<<<<<<<<< unique id from backend (recommended)

---

## Example Code

### React Components

```jsx
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <a href="/" className="app-logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = (props) => {
    const resInfo = props?.restaurantData?.info;
    const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resInfo.cloudinaryImageId}`;
    return (
        <div className="restaurant-card">
            <img src={imageUrl} className="restaurant-image" />
            <h3>{resInfo?.name}</h3>
            <h4>{resInfo?.cuisines?.join(', ')}</h4>
            <h5>{resInfo?.avgRating} stars</h5>
            <h5>{resInfo?.costForTwo}</h5>
            <h5>{resInfo?.sla?.slaString}</h5>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-container">
                {
                    restaurantList.map((resData) => (
                        <RestaurantCard key={resData?.info?.id} restaurantData={resData} />
                    ))
                }
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
```

### CSS Styling

```css
.header {
    display: flex;
    justify-content: space-between;
}

.app-logo {
    display: inline-block;
    width: 180px;
    height: 60px;
    background-image: url('./assets/snoofy_logo_trans.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: 5px 0;
}

.nav-items > ul {
    display: flex;
    padding: 0 20px;
    list-style-type: none;
    font-size: 25px;
}

.nav-items > ul li {
    justify-content: space-between;
    margin-right: 3rem;
}

.search {
    padding: 10px;
}

.restaurant-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 10px;
    column-gap: 2px;
}

.restaurant-card {
    width: 200px;
    border: 1px solid transparent;
    padding: 5px;
    background-color: #dedede;
    cursor: pointer;
}

.restaurant-card:hover {
    border: 1px solid black;
    background-color: #d4d4d4;
}

.restaurant-image {
    width: 200px;
    height: 220px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
```

## Styling and Layout Insights  

- **Header** uses `flexbox` to align the logo and navigation items.  
- **Logo** is placed as a background image inside a container with defined width and height.  
- **Navigation Items** are displayed horizontally using `flex`.  
- **Search Bar** is simple with padding for spacing.  
- **Restaurant Container** uses `flex-wrap` to arrange multiple cards neatly in rows and columns.  
- **Restaurant Cards**:  
  - Fixed width and height for consistency.  
  - Styled with hover effects for interactivity.  
  - Background color changes on hover.  
- **Restaurant Images** maintain proportion using background properties.  

---

## Key Takeaways  

- Start with **wireframing and skeleton planning** before coding.  
- Use **props** to pass data dynamically into components.  
- Build **reusable components** for scalability.  
- Drive UI with **config/data-driven design**.  
- Always use a **unique key** when rendering lists.  
- Proper CSS layout strategies (like Flexbox) make components responsive and clean.  

---

✅ This README serves as both documentation of your learning and a guide for building scalable React applications. 

