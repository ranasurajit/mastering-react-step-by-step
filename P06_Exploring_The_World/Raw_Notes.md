# 6. React - Exploring The World

## Monolith vs Micro-services

### Monolith

- Huge big project having different small components like API, UI, Authentication, DB connection and Notifications related codes
- A single change / small change needs the compilation and re-deployment of entire project


### Micro-services

- Different services created in isolation which are connected by Network forms the bigger application
- This is known as Separation of Concerns or Single Responsibility Principle
- The services talk to each other depending upon the application workflow
- Any service can be developed by any language or tech-stack
- All services run on specific different ports and these ports can be mepped to domain-name

## Exploring the World

We will learn here how React UI will talk or communicate with external APIs or other micro-services.

## Approaches to Render UI

**Approach I**

Load The Application -> API calls (on Load/Reload) -> Wait for API response -> Render UI

- This approach has poor User Experience
- For loading large data, initially the screen gets frozen and then loads the data all of a sudden

**Approach II**

Load The Application -> Render the Skeleton of UI -> Peform API calls -> Wait for API response -> Re-Render UI

- This approach has better User Experience
- For loading large data, initially the screen gets loaded with Skeleton and then loads the data (React rendering is optimized and it is find to render the screen twice) smoothly
- Gives smooth user experience

## React Hook - useEffect

- This is a normal javascript function
- When the Component is rendered by React and then this function is called by default
- It takes 2 arguments
    - 1. callback function
    - 2. dependency array

## CORS Policy

- The browser blocks us to call API from one origin to another origin. CORS policy do not allow the API calls if there is an origin mismatch

## Shimmer UI

- A shimmer UI resembles the page's actual UI, so that the users will understand how quickly the web or mobile app will load even before the actual content has shown up
- It is like a fake UI page until we get the actual response and page is rendered
- **Conditional Rendering**: Rendering different UIs based upon conditions. Here we load Shimmer UI unless the API data is retrieved

## useState Hook

- It set two values to the variable (an array) 
    - 1. state Variable Name
    - 2. gives a function via which we can modify the state Variable value
- When we use function to set the value to the local State variable, **React re-renders the Entire Component** very fast and runs the **Re-conciliation cycle** which then runs the **Diff Algorithm** to find the difference between **old** and **new** **Virtual-DOM** and finally modifies the changed object value to **Virtual-DOM** and then finally renders it to **Actual-DOM**

