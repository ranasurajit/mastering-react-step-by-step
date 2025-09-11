# 9. React - Optimising Our App

## Single Responsibility Principle
One component should be responsible for a single functionality
With this principle code becomes more: 
- Reusable
- Maintainable
- Testable

## Creating Custom Hooks
Hooks are normal utility functions.
- Makes our code modular
- Abstract out responsibities
- Make our code more readable

## Code for Custom Hook
- Custom hook is nothing but a normal javascript function
- We need to set contract what input parameter it takes and what it returns whereever it is called
- Best practice is to add a prefix **use<HookName>**
- **Example of Custom Hook named `useOnlineStatus`**
    ```jsx
    import { useEffect, useState } from 'react';

    const useOnlineStatus = () => {
        const [onlineStatus, setOnlineStatus] = useState(true);
        // check if online
        useEffect(() => {
            window.addEventListener('offline', () => {
                setOnlineStatus(false);
            });
            window.addEventListener('online', () => {
                setOnlineStatus(true);
            });
        }, []);

        // return boolean value if user is online
        return onlineStatus;
    };

    export default useOnlineStatus;
    ```

- **Usage**
    ```jsx
    const onlineStatus = useOnlineStatus();
    ```

## Dynamic Bundling / Chunking / Code-Splitting
- Logical Separation of Bundles - A Bundle should have enough code for a feature
- We need to have a strategy by which we can do this code splitting

## Lazy Loading Routes (On-Demand Loading)

- We need to use **lazy** from 'react' which takes a callback import with Component path as shown below:

    ```jsx
    import { lazy, Suspense } from 'react';

    const Grocery = lazy(() => import('./components/Grocery'));
    ```
- Also in the App Route data, we need to wrap the Lazy loaded component within **Suspense** with a **fallback** which takes a JSX to render in the mean time the Lazy Loaded component's javascript chunk file is downloaded to the browser

    ```jsx
    {
        path: '/grocery',
        element: (
            <Suspense fallback={<h2>Loading...</h2>}>
                <Grocery />
            </Suspense>
        )
    },
    ```


