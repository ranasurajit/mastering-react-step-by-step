# 3. React Tutorial - Laying the Foundation

## React.createElement

- React.createElement => React Element => JS Object => HTMLElement(render)

## JSX

- JSX is not part of React
- JSX is a convention where we merge HTML and JS together
- JSX is not HTML inside Javascript
- JSX just follows HTML-like or XML-like syntax
- JS Engine does not understand JSX it understands ECMAScript
- JSX is not a valid Pure Javascript
- JSX code is transpiled before it reaches the JS Engine to render
- Parcel transpiles the JSX code using Babel to make it Pure Javascript so that our Browser understands it and render it accordingly
- JSX => React.createElement => React Element => JS Object => HTMLElement(render)
- Babel converts the JSX code to React.createElement
- JSX attributes are camelCased
- Multi-line JSX needs to be enclosed within brackets (JSX Code)
- JSX santizes the data when some expression is interpolated. It prevents XSS Attacks

React Element like below:

```js
const heading = React.createElement("h1", { id: "heading" }, "This is a React Core Element");
```

can be converted to JSX as below:

```js
const jsxHeading = <h1 id="heading">This is a React JSX Element</h1>;
```

and both when consoled can be observed that both are JS Objects

## Babel

Babel is a JavaScript compiler/transpiler which converts the JSX or Typescript code to Pure JavaScript so that our Browser can understand

- Babel converts the JSX code to React.createElement
- Babel transpiles ES6 code to Vanilla JavaScript so that older browsers renders the UI (which do not understand latest ES6/ES7)
- Babel reads the code token by token (tokenizes) and converts it into Abstract Syntax Tree (AST)

## VS Code Extensions

1. Prettier
2. Bracket Pair Colorization Toggler
3. ESLint
4. Better Comments

## React Components

1. Class Based Components - Old way of writing React UI - Uses JS Classes
2. Functional Components - New way of writing React UI - Uses JS functions

### React Functional Components 

- A normal JavaScript function
- Naming convention always starts with CAPS
- It returns some piece of JSX code

**Syntax**

```js
const HeadingComponent = () => {
    return <h1 className="heading">React Functional Component</h1>;
}
```

or 

```js
const HeadingComponent = () => <h1 className="heading">React Functional Component</h1>;
```

or 

```js
const Title = function() {
    return (
        <h1 className="head" tabIndex="5">
            React Functional Component
        </h1>
    );
}
```

- We render Functional Component as:

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
```

### Writing Interpolations or Expressions inside JSX


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

### Composing React Element inside Functional Components

We can use React Element and interpolate

```js
const spanElement = <span>React Span</span>;

const title = (
    <h1 className="head" tabIndex="5">
        { spanElement }
        React Functional Component
    </h1>
);

const HeadingComponent = () => (
    <div id="container">
        { title }
        <h1 className="heading">React Functional Component</h1>
    </div>
);
```

The below example is valid too:

```js
const TitleComponent = () => (
    <h1 className="head" tabIndex="5">
        { spanElement }
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

## Workflow

1. Create scrips in package.json and add the below code:

```js
"start": "parcel index.html"
"build": "parcel build index.html"
```

2. Run those scripts 

```js
npm run start
npm run build
```

3. Explore https://Babeljs.io

4. Play around with JSX Syntax

5. Create React Functional Components and play around rendering it

6. Nest RFC and declare within each other and render. This is called /referred as **React Component Composition**

