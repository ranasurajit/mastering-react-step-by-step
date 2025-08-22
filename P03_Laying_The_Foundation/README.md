# 📘 React Tutorial - Laying the Foundation

## 🔹 React.createElement
- React elements are created using `React.createElement`.
- Flow: **React.createElement → React Element → JavaScript Object → HTML Element**.

---

## 🔹 JSX (JavaScript XML)
- JSX is **not part of React**, it is just a syntax extension.
- It looks like **HTML inside JavaScript**, but is actually **syntactic sugar** for `React.createElement`.
- The **JavaScript engine does not understand JSX**; it only understands ECMAScript.
- JSX is **transpiled into pure JavaScript** before execution.
- Tools like **Parcel (via Babel)** handle this transpilation.
- Flow: **JSX → React Element → JavaScript Object → HTML Element**.
- JSX attributes follow **camelCase**.
- Multi-line JSX must be wrapped inside parentheses.
- JSX automatically **sanitizes values** when interpolating expressions (helps prevent XSS attacks).

### Example Conversion:

**React Element:**

```php
const heading = React.createElement("h1", { id: "heading" }, "This is a React Core Element");
```

**Equivalent JSX:**

```js
const jsxHeading = <h1 id="heading">This is a React JSX Element</h1>;
```

---

## 🔹 Babel
- Babel is a **JavaScript compiler/transpiler**.
- Converts JSX into `React.createElement` calls.
- Transpiles modern JavaScript (ES6+) into browser-compatible JavaScript.
- Works by converting code into an **AST (Abstract Syntax Tree)**.
- Babel Playground can be used to explore how code is transformed.

---

## 🔹 Recommended VS Code Extensions
1. **Prettier** – Code formatting  
2. **Bracket Pair Colorization Toggler** – Colorize bracket pairs  
3. **ESLint** – Linting and best practices  
4. **Better Comments** – Highlight and categorize comments  

---

## 🔹 React Components

### 1. Class Components  
- Old approach, built using **JavaScript classes**.

### 2. Functional Components (Preferred)  
- Defined using plain JavaScript functions.  
- Must start with a **capitalized name**.  
- Always return **JSX code**. 

### Examples:

```js
const HeadingComponent = () => {
    return <h1 className="heading">React Functional Component</h1>;
};
```

```js
const HeadingComponent = () => <h1 className="heading">React Functional Component</h1>;
```

```js
const Title = function() {
    return (
        <h1 className="head" tabIndex="5">
            React Functional Component
        </h1>
    );
};
```

---

## 🔹 Rendering Components
- Components are rendered into the DOM using `ReactDOM.createRoot` and `render`.
- Example: Rendering a functional component into a root element.

**Rendering Functional Component:**

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
```

---

## 🔹 Expressions inside JSX
- JavaScript expressions can be evaluated inside JSX using curly braces `{ }`.
- For example, mathematical operations or variables can be embedded within JSX.

### Interpolations inside JSX

- Expressions can be written inside {}.

```js
const number = 1000;
const factor = 2;

const HeadingComponent = () => (
    <div id="container">
        <h2>{ number * factor }</h2>
        <h1 className="heading">React Functional Component</h1>
    </div>
);
```

---

## 🔹 Composing Elements & Components
- **Composition** allows you to use components inside other components.
- You can embed:
  - React Elements (like headings or spans).
  - Other Components (functions returning JSX).
- This practice is called **React Component Composition**.

### Example:

```js
const spanElement = <span>React Span</span>;

const title = (
    <h1 className="head" tabIndex="5">
        { spanElement }
        React Functional Component
    </h1>
);
```

**Or with nested components:**

```js
const TitleComponent = () => (
    <h1 className="head" tabIndex="5">
        React Functional Component
    </h1>
);

const HeadingComponent = () => (
    <div id="container">
        { TitleComponent() }
        <h1 className="heading">React Functional Component</h1>
    </div>
);
```

---

## 🔹 Workflow Setup
1. Add scripts inside `package.json`  
   - Start script for development (Parcel Dev Server).  
   - Build script for production (Parcel build).  

2. Run commands:  
   - Development → `npm run start`  
   - Production → `npm run build`  

3. Workflow steps:  
   - Explore **Babel Playground**.  
   - Experiment with **JSX syntax**.  
   - Create and render **Functional Components**.  
   - Practice **Nesting and Composition** of components.  

---

