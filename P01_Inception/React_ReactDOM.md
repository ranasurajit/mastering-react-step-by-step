# ⚛️ React vs React-DOM  

## 🔹 What is React?  
- Core library for building **UI components**.  
- Manages **state**, **props**, and the **Virtual DOM**.  
- Platform-agnostic → can be used in **React Native**, **React-DOM**, etc.  

👉 Example:  
```js
// React defines a component
import React from "react";

function App() {
  return <h1>Hello World</h1>;
}

// But without React-DOM, nothing shows up in the browser

```

## 🔹 What is React-DOM?

The renderer that connects React to the browser DOM.

Turns virtual components into real UI elements.

Provides methods like createRoot() and render().

👉 Example:

```js
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello World</h1>;
}

// React-DOM renders App into the browser DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

```

✅ Quick Summary
Library	Role	Use Case
React	Core library (build components, manage state/props, Virtual DOM)	Building UI logic
React-DOM	Renderer (connects React to browser DOM)	Making components visible in the browser

🔹 Visual Flow

```text
React (Core Library)
   |
   |  defines components, state, props
   v
React-DOM (Renderer)
   |
   |  takes virtual DOM and updates real DOM
   v
Browser DOM (What users see)
```

💡 Analogy:

React = 🧠 Brain (logic & structure)

React-DOM = ✋ Hands (renders UI into the page)

