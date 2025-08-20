# ⚛️ React Tutorial - Inception

## 📌 Emmet (VSCode Productivity)
- Quickly generate HTML boilerplate with `html:5`.  
- Example: typing `ul>li*3` expands into a list with 3 `<li>` items.  

---

## 👋 Hello World Examples
- **HTML** → Add a simple `<h1>Hello World</h1>` tag.  
- **Vanilla JS** → Use `document.createElement` and `appendChild`.  
- **React (via CDN)** → Load React & React-DOM libraries with `<script>` tags.  

---

## 🌍 Cross-Origin in Script Tags
- Loading scripts from a **CDN** makes them *cross-origin* (different domain).  
- `crossorigin="anonymous"` is required for:
  - Using **Subresource Integrity (SRI)** checks.  
  - Better **error reporting** for external scripts.  

---

## ⚛️ React vs React-DOM

| Library       | Role | Use Case |
|---------------|------|----------|
| **React**     | Core library (defines components, state, Virtual DOM) | Building UI logic |
| **React-DOM** | Renderer (connects React to browser DOM) | Displays components in browser |

---

### 🔄 Flow of Rendering

```mermaid
flowchart LR
    A[React Code] --> B[React.createElement()] --> C[Virtual DOM Object]
    C --> D[ReactDOM.render()]
    D --> E[Real DOM in Browser]
```

## 🏗️ Creating Elements in React

```js
// Create a React element
const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");

// Tell React where to render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

## 🔍 Notes

- **React.createElement** → returns a JS object (Virtual DOM).

- **ReactDOM.render** → turns it into real DOM elements.

## ✅ Todos / Practice

- Style the heading (e.g., add color).

- Create nested HTML structure with React.createElement.

- Add siblings to your tags.

- Explore react.development.js vs react.production.js.

- Check what happens when #root already has content → React replaces it.

- Add sibling <div> outside #root → it stays untouched.

## 📂 Remember

- **Order of Imports**: Always import React & React-DOM scripts first, then your custom script. Otherwise → ❌ React is not defined error.

- **React is a Library 📖 (Not a Framework)**

    - Can be used in small portions of a page.

    - Independent, lightweight, flexible.

    - Frameworks (e.g., Angular) require project scaffolding, but React can plug into any existing app.


✨ This repo documents my journey of learning React from scratch with notes, examples, and practice todos.

