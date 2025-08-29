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
- All services run on specific different ports and these ports can be mapped to domain-name

## Exploring the World
We will learn here how React UI will talk or communicate with external APIs or other micro-services.

## Approaches to Render UI

**Approach I**  
Load The Application -> API calls (on Load/Reload) -> Wait for API response -> Render UI  
- Poor User Experience  
- For loading large data, initially the screen gets frozen and then loads the data all of a sudden  

**Approach II**  
Load The Application -> Render the Skeleton of UI -> Perform API calls -> Wait for API response -> Re-Render UI  
- Better User Experience  
- For loading large data, initially the screen gets loaded with Skeleton and then loads the data smoothly  
- React rendering is optimized and it is fine to render the screen twice  

## React Hook - useEffect
- A normal JavaScript function  
- Runs after the Component is rendered by React  
- Takes 2 arguments:  
  1. Callback function  
  2. Dependency array  

**Example:**
```javascript
import { useEffect, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted or count changed");
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
```

## CORS Policy
- The browser blocks us to call API from one origin to another origin.  
- CORS policy does not allow the API calls if there is an origin mismatch.  

## Shimmer UI
- A shimmer UI resembles the page's actual UI, so that the users will understand how quickly the web or mobile app will load even before the actual content has shown up  
- It is like a fake UI page until we get the actual response and page is rendered  
- **Conditional Rendering**: Rendering different UIs based upon conditions. Here we load Shimmer UI unless the API data is retrieved  

## useState Hook
- Sets two values to the variable (an array):  
  1. State variable name  
  2. Function to modify the state variable value  
- When the function is used to set the value, **React re-renders the entire component**, runs the **Reconciliation cycle**, executes the **Diff Algorithm** to find differences between **old** and **new Virtual DOM**, updates the Virtual DOM, and finally renders to the **Actual DOM**.  

**Example:**
```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```


