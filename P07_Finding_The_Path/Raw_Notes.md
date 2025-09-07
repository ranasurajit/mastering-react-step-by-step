# 7. React - Finding The Path

## useEffect Hook
- **useEffect** takes two arguments
    - callback function
    - dependency array
- This hook is called everytime our component renders (after every render)
- The dependency array changes the behavior of when this hook is called
    - If no dependency array is passed, on every render **useEffect** is called
    - If dependency array is empty [], **useEffect** is called only once after a component is rendered only for first time
    - If some object/state variable is put inside dependency array then **useEffect** is called when the object/state variable is modified/changed/updated

## useState Hook
- **useState** should be called only inside the **Functional Component** and declare it at the beginning of the **Functional Component**
- Do not declare **useState** statements inside any conditional statements, this will create inconsistencies in the application

## React-Router-DOM
- Install ```npm install react-router-dom``` in the application
- We need to create a **Routing Configuration** in **App.jsx**
- We can use **createBrowserRouter** from 'react-router-dom' library which is a recommended way to create React Routes as per React Documentation
- We need to create a **Routing Configuration** data as below:

    ```js
    const appRouter = createBrowserRouter([{
            path: '/',
            element: <AppLayout />
        }, {
            path: '/about',
            element: <About />
        }, {
            path: '/contact',
            element: <Contact />
        }
    ]);    
    ```
- We need to set the Routing Configuration to **RouterProvider** as below:
    - Instead of below code:
    ```js
    root.render(<AppLayout />);
    ```
    - We can replace above with below code:
    ```js
    root.render(<RouterProvider router={appRouter} />);
    ```
- **React-Router-DOM** also allows us to add an **errorElement** in the **Routing Configuration** data as below:

    ```js
    const appRouter = createBrowserRouter([{
            path: '/',
            element: <AppLayout />,
            errorElement: <Error />
        }, {
            path: '/about',
            element: <About />
        }, {
            path: '/contact',
            element: <Contact />
        }
    ]);    
    ```
- **React-Router-DOM** also allows us to use a hook named **useRouteError** so that we can add details to its respective component for better Exception Handling as shown below:

    ```js
    const Error = () => {
    const error = useRouteError();
        return (
            <div>
                <h1>Oops!!!</h1>
                <h2>Something went wrong!!!</h2>
                <h3>{error.status} : {error.statusText} - {error.data}</h3>
            </div>
        );
    };
    ```
- **Child Routes**
    - Children routes can be created under a parent route as shown below:
    ```js
    const appRouter = createBrowserRouter([{
        path: '/',
        element: <AppLayout />,
        children: [{
            path: '/',
            element: <Body />
        },
        {
            path: '/about',
            element: <About />
        }, {
            path: '/contact',
            element: <Contact />
        },
        {
            path: '/restaurants/:resId',
            element: <RestaurantMenu />
        }],
        errorElement: <Error />
    }
    ]);
    ```
- **Outlet**
    - This is a placeholder provided by **react-router-dom**
    - This placeholder is substituted by actual component when user changes the route
    - In inspect mode, **Outlet** is not visible anywhere on the route, rather it is replaced on the fly with the actual component specified for a given route
- **Routing Types in Web Applications**
    - **Server-side Routing**
        - Here the routed component is served by the server-side response
        - It results in reloading of browser page

    - **Client-side Routing**
        - Here the routed component is served within client-side without the need of reloading the page
        - It is quick and here the client-side framework or library replaces the placeholder by the substituted routed component and this is called as **Single Page Application**

- **Link**
    - **Link** is given to us by **react-router-dom** which internally uses **anchor** tag only
    - Once the page is rendered, if you inspect **Link** tag you would find that it is **anchor** tag only
    - Link is a wrapper over **anchor** tag as HTML does not recognise what **Link** is
    - When we make a **Link**, **react-router-dom** tag makes a note that it is a **Link (anchor)** and when user clicks it makes sure the page does not load
    - Usage: We use Link for Routes as below:

    ```js
    <div className='nav-items'>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact Us</Link>
            </li>
            <li>Cart</li>
            <button className='btn-login' onClick={loginHandler}>{loginLabel}</button>
        </ul>
    </div>
    ```

- **useParams Hook**
    - This hook is provided by **react-router-dom** to capture the router parameters from static or dynamic routes
    - Usage
    ```js
    const params = useParams();
    console.log(params);
    ```
