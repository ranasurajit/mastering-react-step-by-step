# 4. React - Talk is Cheap Show Me the Code

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
- In React, Functional Component is a Normal Java script Function, Props are the arguments to the Function
- Passing props to a component is similar to passing argument to a 


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
