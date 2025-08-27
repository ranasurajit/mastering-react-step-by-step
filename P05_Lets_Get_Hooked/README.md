
# 5. React - Let's Get Hooked

## Restructure Our App

- Industry practice is to create a separate file for each component.  
- Generally, we create a root folder named `src`.  
- Even if multiple folders are created, **Parcel** will compile everything into a single chunk.  
- Create a `components` folder to keep all the components inside it.  
- React documentation says, *“React doesn't have opinions on how you put files into folders.”*  
  - Common approaches include:  
    - Grouping files by **Features/Routes**.  
    - Grouping files by **File-types** or **Responsibilities**.  
  - Avoid too much nesting.  
- Be flexible enough to restructure as the number of files or the application grows.  
- Try to name files according to their purpose.  
- Use **PascalCase** for component file names.  
- Extensions can be `.js`, `.jsx`, or `.tsx` (for TypeScript).  
- Try to keep each file shorter (within ~100 lines of code).  

---

## Export Components to Import Them

- Components must be exported from their file and imported wherever they are used.  
- React supports both **Default Exports** and **Named Exports**.  
- Never keep hard-coded data inside components.  

---

## Filtering Data

- Since our UI is config-driven, it uses data to render components.  
- We can apply filters directly to the data.  
- After filtering, data updates won’t reflect in the UI unless the variable is a **state variable**.  
- This can be achieved using React Hook `useState`, which makes variables **reactive** and binds them to the UI.  

---

## React Hooks

Hooks are utility functions built into React Core to add state and lifecycle features to functional components.  

Two key hooks are:  
1. **useState()**  
2. **useEffect()**  

### useState

- Creates a super-powerful state variable.  
- Maintains the local state of a component.  
- Whenever a state variable changes, React re-renders the component.  
- React constantly monitors state variables.  
- When the setter function is called, React runs the **Diff Algorithm** and re-renders the UI.  

---

## React Reconciliation Algorithm / React Fiber

- **Virtual DOM** = object representation of the **Actual DOM**.  
- Virtual DOM existed before React, but React made it efficient for DOM updates.  
- React creates a Virtual DOM (nested JS object called React Element).  
- In React 16, **React Fiber** was introduced to improve reconciliation.  
- The **Diff Algorithm** compares old and new Virtual DOMs to find differences.  
- React updates only the necessary parts of the **Actual DOM**.  

---

## Homework

- Can we use both Default and Named Exports from a file and import them together?  

---

## Important Concepts

- React efficiently handles DOM manipulation.  
- It keeps the **Data Layer** and **UI Layer** in sync.  
- **React Fiber** enables efficient reconciliation and UI updates.  

---

## Useful Links

- [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)  


