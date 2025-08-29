# React Reconciliation, Diff Algorithm and React Fiber

## What is Reconciliation?

Reconciliation is the process React uses to update the **DOM** when the application’s **state** or **props** change.  
Instead of re-rendering the entire UI from scratch, React tries to find the minimal set of changes required to update the **Real DOM** efficiently.

---

## Virtual DOM

- React maintains an in-memory representation of the UI called the **Virtual DOM (VDOM)**.
- When state/props change:
  1. A new Virtual DOM tree is created.
  2. React compares it with the previous Virtual DOM snapshot.
  3. Only the differences are applied to the **Real DOM**.

---

## Why Virtual DOM?

- Direct manipulation of the **Real DOM** is expensive because it involves layout recalculations and reflows.
- Virtual DOM allows React to:
  - Batch updates.
  - Minimize DOM operations.
  - Provide smooth and fast UI updates.

---

## Diff Algorithm

React’s **Diff Algorithm** is based on two main assumptions:

1. **Two elements of different types produce different trees.**
   - Example: `<div>` replaced with `<p>` → React destroys the old subtree and builds a new one.

2. **Child elements with the same `key` are considered the same across renders.**
   - Keys help React identify which list items have changed, added, or removed.

---

### Steps of the Diff Algorithm

1. **Compare Root Elements**
   - If root element types differ → replace the whole subtree.

2. **Compare Attributes/Props**
   - If element types match, React updates only the changed attributes.

3. **Compare Children**
   - For child elements, React uses `keys` to detect:
     - Insertions
     - Deletions
     - Moves
   - Without `keys`, React defaults to re-rendering all children in order.

---

## Example: How Reconciliation Works

### Old Virtual DOM
```jsx
<ul>
  <li key="a">A</li>
  <li key="b">B</li>
</ul>
```

### New Virtual DOM
```jsx
<ul>
  <li key="b">B</li>
  <li key="a">A</li>
</ul>
```

- With **keys** → React understands items are just swapped → minimal update.  
- Without **keys** → React re-renders both `<li>` nodes unnecessarily.

---

## 4) React Fiber (The Modern Reconciler)
React Fiber (introduced in React 16) is a reimplementation of the reconciliation engine that enables **cooperative scheduling** and **interruptible rendering**.

**Key ideas:**
- **Incremental Rendering:** Work is split into small units and spread across frames.
- **Prioritization:** Urgent updates (user input, animations) get processed first.
- **Interruption & Resumption:** Rendering can pause and resume to keep the app responsive.
- **Time Slicing:** Long tasks are broken up so the browser never feels blocked.
- **Fiber Nodes:** Each element corresponds to a Fiber node in a linked tree, enabling scheduling and fine-grained control.

---

## Rendering Flow

1. **State/Props Change**  
   Component function re-runs → new Virtual DOM generated.

2. **Diff Algorithm**  
   React compares old and new Virtual DOM trees.

3. **Minimal Updates**  
   Changes are batched and applied to the **Real DOM**.

---

## Visualization

```
[ State Change ] 
       ↓
[ New Virtual DOM ] 
       ↓  (Diffing)
[ Old Virtual DOM ]
       ↓  (Minimal Updates)
[ Real DOM Updated ]
```

<img width="990" height="390" alt="Image" src="https://github.com/user-attachments/assets/5ee8af45-7d68-42fa-af75-922a768d259b" />

---

## Key Takeaways

- **Virtual DOM** makes updates efficient.
- **Diff Algorithm** ensures minimal re-renders.
- **Keys** are critical for optimizing list rendering.
- Reconciliation provides the smooth performance React is known for.
