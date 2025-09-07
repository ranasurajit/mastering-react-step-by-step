# 📘 React — Finding the Path

This guide covers essential concepts of React hooks and **React Router DOM**, including routing, error handling, child routes, and navigation.

---

## ⚡ React Hooks

### 🔹 useEffect Hook
- **useEffect** takes two arguments:
  1. A **callback function**
  2. A **dependency array**
- Behavior:
  - **No dependency array** → runs after **every render**
  - **Empty dependency array `[]`** → runs only **once after initial render**
  - **With dependencies `[var]`** → runs whenever the specified dependency changes

---

### 🔹 useState Hook
- Must be called **only inside a Functional Component**
- Declare at the **top level** of the component (not inside loops or conditionals)
- Declaring inside conditionals will cause **inconsistent state updates**

---

## 🌐 React Router DOM

### 🚀 Installation
```bash
npm install react-router-dom
```

---

### 🔹 Basic Routing Setup

In **App.jsx / index.jsx**:

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
```

---

### 🔹 Error Handling with `errorElement`

```jsx
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />
  },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> }
]);
```

#### Example Error Component

```jsx
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something went wrong!</h2>
      <h3>
        {error.status} : {error.statusText} - {error.data}
      </h3>
    </div>
  );
};
```

---

### 🔹 Nested Routes (Child Routes)

```jsx
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> }
    ]
  }
]);
```

---

### 🔹 `<Outlet />`
- A placeholder provided by `react-router-dom`
- Replaced dynamically by the child component of the active route
- Doesn’t render in the DOM by itself, only substituted at runtime

---

### 🔹 Routing Types

1. **Server-side Routing**
   - Routes are resolved by the server
   - Causes a **full page reload**

2. **Client-side Routing (SPA)**
   - Routes are resolved on the client
   - No reload, faster navigation
   - Achieved via React Router → **Single Page Application**

---

### 🔹 Navigation with `<Link>`

```jsx
import { Link } from "react-router-dom";

<div className="nav-items">
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact Us</Link></li>
    <li>Cart</li>
    <button className="btn-login" onClick={loginHandler}>
      {loginLabel}
    </button>
  </ul>
</div>
```

- `<Link>` is a wrapper around `<a>` tag
- Prevents **full page reloads**
- Enables smooth client-side navigation

---

### 🔹 useParams Hook

Used to capture **route parameters** (static or dynamic):

```jsx
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const params = useParams();
  console.log(params); // { resId: "123" }
};
```

---

## ✅ Summary
- **useEffect** → manage side effects (runs after render, configurable with dependencies)  
- **useState** → manage component state  
- **React Router DOM** → modern, declarative routing with support for:
  - Error handling
  - Nested routes with `<Outlet />`
  - Client-side navigation with `<Link />`
  - Dynamic route parameters with `useParams`

---
🌟 With this knowledge, you can build robust **React SPAs** with clean routing and state management!
