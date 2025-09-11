# 8. React - Let's Get Classy

## Why do we call `super(props)` inside constructor of React Class Component?

In **React Class Components**, you often see code like this:

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
}
```
- **JavaScript Class Inheritance Rule**
    - React components extend React.Component.
    - In JavaScript, when a class uses extends and has its own constructor, it must call super() before using this. Otherwise, you get an error:
- Passing props to the Parent Class
    - The React.Component constructor needs props to set up this.props.
    - If you skip passing props to super, then this.props will be undefined inside the constructor.

    ```jsx
    constructor(props) {
    super(); 
    console.log(this.props); // ❌ undefined
    }
    ```

    ```jsx
    constructor(props) {
    super(props);
    console.log(this.props); // ✅ works as expected
    }
    ```
- Why Not Just super()?
    - If you only call super(), React still sets this.props later in the lifecycle (before render).
    - So you can access this.props in other methods, but not inside the constructor.

## How to use props and state variables in Class Based Component

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
}
```

## How to update state variables in Class Based Component
- 1. Update with an Object
    ```jsx
    class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
        <div>
            <p>Count: {this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
        </div>
        );
    }
    }
    ```
- 2. Update Based on Previous State
    - When the new state depends on the old state, use a function:
    ```jsx
    this.setState((prevState) => ({
    count: prevState.count + 1
    }));
    ```
    - **Example:**
    ```jsx
    incrementTwice = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
    this.setState((prev) => ({ count: prev.count + 1 }));
    };
    ```
- 3. Update Multiple State Variables
    - Since state is an object, you can update multiple keys at once:
    ```jsx
    this.setState({
        count: this.state.count + 1,
        name: "Updated Name"
    });
    ```
- 4. Execute Code After State Update
    - You can pass a callback function as the second argument to setState:
    ```jsx
    this.setState({ count: this.state.count + 1 }, () => {
    console.log("Updated count:", this.state.count);
    });
    ```

## Life Cycle of React Class Based Component
**Without componentDidMount**
    1. Parent Constructor
    2. Parent Rendered
    3. Child Constructor
    4. Child Rendered

**With componentDidMount**
    1. Parent Constructor
    2. Parent Rendered
        3. Child Constructor
        4. Child Rendered
        5. Child componentDidMount
    6. Parent componentDidMount

**With Multiple Children**
- --------------------------  Render Phase Started ------------------------
- 1. Parent Constructor
- 2. Parent Rendered
    - 3. Child1 Constructor
    - 4. Child1 Rendered
    - 5. Child2 Constructor
    - 6. Child2 Rendered
    - --------------------------  Commit Phase Started ------------------------
    - -------- DOM is updated in batches - to optimize commit and DOM manipulation ------
    - 7. Child1 componentDidMount
    - 8. Child2 componentDidMount
- 9. Parent componentDidMount

## React Life Cycle Methods Diagram
Refer Link: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram

- React Component Life Cycle has three stages
    - Mounting Stage
    - Updating Stage
    - Unmounting Stage

- React follows two phases while rendering the DOM
    - 1. Render Phase
        - Pure and has no side-effects
        - Maybe paused, aborted or re-started by React

    - 2. Commit Phase
        - Can work with DOM
        - Run side-effects
        - Schedule updates

- **Mounting Stage Start**
    - **Render Phase**
        - **Constructor** (with dummy data passed to initial state)
        - **Render** (with dummy data passed to initial state)
    - **RECONCILIATION** triggered / DOM refs updated
    - **Commit Phase**
        - HTML / DOM rendered with Dummy data
        - Call to **componentDidMount** happened where we did API call and we updated the state
        - setState will set the state variables and triggers **Updating Stage**
- **Mounting Stage End**
- **Updating Stage Start**
    - **Render Phase**
        - Triggered by setState, updateProps etc and agaib calls **Render**
        - **Render** (with Actual API data happens)
     - **RECONCILIATION** triggered / DOM refs updated
    - **Commit Phase**
        - componentDidUpdate is called
- **Updating Stage Continues till user plays with DOM and DOM is marked for Reconciliations**
- **Unmounting Stage**
    - **Commit Phase**
        - Happens when the user changes the route
    - done via calling LifeCycle hook **componentWillUnmount**
    - **componentWillUnmount** can be used to clear the **Intervals** or **setTimeouts** used in a component to clean-up such dangling variables when user changes the route

## How to make componentDidUpdate work like useEffect with a dependency array value

```
    componentDidUpdate(prevProps, prevState) {
        if (this.state.count !== prevState.count) {
            // do something when count changes in state
        }
    }
```

## Unmounting in Functional Components

```
    useEffect(() => {
        console.log('use effect called');

        return () => {
            console.log('use effect return');
            // unmount here
        };
    }, []);
```

