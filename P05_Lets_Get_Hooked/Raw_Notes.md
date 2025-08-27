# 5. React - Let's Get Hooked

## Restructure Our App

- Industry practice is to create separate file for each component
- Generally we create a root folder named 'src' folder
- Even if we create multiple folders, Parcel will compile everything into a single chunk
- Create a 'components' folder to keep all the components inside that
- React documentation says, 'React doesn't have opinions on how you put files into folders', however there exists few common approaches popular in the ecosystem you may want to consider.
    - One approach is to group the files into Features/Routes
    - Another approach is to group the files into file-types or the responsibility it serves for the application
    - Avoid too much of nesting
- However we should be flexible enough to re-structure whenever the number of files or application grows
- Try to name the file as per the purpose it serves
- Use Cap Case for File names for Components
- You may use extension as .js or jsx or .tsx (for Typescript files)
- Try to keep a file shorter (within 100 lines of code)

## Export Components to Import It

We can use the below syntax to export a component from its file and import it wherever it is referred

**Export Component**:

##### Default Exports

```
export default <Component_Name>;
```
or 

##### Named Exports

```
export { <Component_Name> };
```

and 

**Import Component to Refer it**:

```
import <Component_Name> from './<Component_Name>';
```

or 

```
import { <Component_Name> } from './<Component_Name>';
```

**Note:** Never keep hard-coded data in your components


## Filtering Data

- As our UI is config driven and uses data to render, so we can apply filter on the data itself
- Although after filtering we have the filtered data but on UI the rendering does not happen, for that we need to make the JS variable super powerful that can be binded or watched for changes
- This can be done by converting JS variable into super powerful state variables (by React) and this can be done using React Hook named ```useState```

## React Hooks

- Normal JS Utility Functions written by Facebook developers
- It is written inside React Core library
- Two important hooks - 

    **1. useState()**

    **2. useEffect()**

### useState

- used to generate super-powerful state variables
- it maintains the local state of our component
- whenever the state variable changes, React re-renders the component
- React keeps on monitoring/watching the state variables
- As soon as the setter of useState function is called, React will get to know that it needs to run the **Diff Algorithm** and re-render the UI

```
import { useState } from 'react';

const [myVariable, setMyVariable] = useState([]); // array de-structuring

```


## React Reconciliation Algorithm / React Fiber

- **Virtual DOM** is the object representation of **Actual DOM**
- **Virtual DOM** was existing before React. React used it efficiently to manipulate DOM
- React creates a **Virtual DOM** (which is a representation of **Actual DOM**) a Nested Javascript Object (React Element)
- In React 16, **React Fiber** was introduced to find out the differences in Virtual DOMs
- **Diff Algorithm** finds the difference between old and new version of Virtual DOMs
- Once the difference is found, React re-renders it to the **Actual DOM**

## Homework

- Can we use both Default and Named Exports from a file and import them all?

## Important Concepts

- React is good at doing DOM manipulation efficiently
- It keeps Data Layer synced with UI Layer
- React Reconciliation Algorithm / React Fiber

## Useful Links

- https://github.com/acdlite/react-fiber-architecture

