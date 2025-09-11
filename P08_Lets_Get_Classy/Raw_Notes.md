# 8. React - Let's Get Classy

## Why do we call super(props) inside constructor of React Class Component
## How to use props in Class Based Component
## How to use state variables in Class Based Component
## How to update state variables in Class Based Component
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
        --------------------------  Render Phase Started ------------------------
    1. Parent Constructor
    2. Parent Rendered
        3. Child1 Constructor
        4. Child1 Rendered
        5. Child2 Constructor
        6. Child2 Rendered
        --------------------------  Commit Phase Started ------------------------
        -------- DOM is updated in batches - to optimize commit and DOM manipulation ------
        7. Child1 componentDidMount
        8. Child2 componentDidMount
    9. Parent componentDidMount

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

