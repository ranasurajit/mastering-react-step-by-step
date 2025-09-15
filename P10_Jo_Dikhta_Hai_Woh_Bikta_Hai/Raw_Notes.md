# 10. React - Jo Dikhta Hai Woh Bikta Hai

## Writing CSS in React
1. Normal CSS
2. SCSS and SASS
3. Using Styled Components
4. Using Library and Frameworks
    - Material UI
    - Bootstrap
    - Chakra UI
    - Ant Design
    - Tailwind CSS
        - Rapidly build modern websites without ever leaving your HTML
     
## Install Tailwind CSS in Parcel Project

1. Install @tailwindcss/postcss and its peer dependencies via npm.
    ```jsx
    npm install tailwindcss @tailwindcss/postcss
    ```
2. Configure PostCSS
    - **PostCSS** is a tool for transforming CSS with JavaScript
    - This guides Parcel to use Postcss and enables it to understand Tailwind CSS syntax
    - Create a .postcssrc file in your project root, and enable the @tailwindcss/postcss plugin.
3. Import Tailwind CSS
    - Create a ./src/index.css file and add an @import for Tailwind CSS.
    ```css
    @import "tailwindcss";
    ```
4. Start your build process
    - Run your build process with npx parcel src/index.html
5. Start using Tailwind in your project
    - Add your CSS file to the <head> and start using Tailwind’s utility classes to style your content.
    ```html
        <!doctype html>
        <html>
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="./index.css" type="text/css" rel="stylesheet" />
        </head>
        <body>
            <h1 class="text-3xl font-bold underline">
            Hello world!
            </h1>
        </body>
        </html>
    ```

## Styling with Tailwind

### 🖼️ Examples
**1. Button**
```jsx
<button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition">
Click Me
</button>
```
**2. Card Component**
```jsx
<div className="max-w-sm bg-white rounded-2xl shadow-lg p-6">
    <h2 className="text-xl font-bold mb-2 text-gray-800">React + Tailwind</h2>
    <p className="text-gray-600 mb-4">Build fast and responsive UIs easily.</p>
    <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
        Learn More
    </button>
</div>
```

**3. Responsive Navbar**
```jsx
<nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
<h1 className="text-2xl font-bold">MyApp</h1>
<ul className="hidden md:flex space-x-6">
    <li className="hover:text-indigo-400 cursor-pointer">Home</li>
    <li className="hover:text-indigo-400 cursor-pointer">About</li>
    <li className="hover:text-indigo-400 cursor-pointer">Contact</li>
</ul>
<button className="md:hidden p-2 rounded hover:bg-gray-700">☰</button>
</nav>
```
**4. Login Form**
```jsx
<form className="bg-white p-8 rounded-xl shadow-lg w-96">
<h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>

<input
    type="email"
    placeholder="Email"
    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
/>

<input
    type="password"
    placeholder="Password"
    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
/>

<button className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition">
    Login
</button>
</form>
```
**5. Animated Hover Card (with Framer Motion)**
```jsx
import { motion } from "framer-motion";

<motion.div
whileHover={{ scale: 1.05 }}
className="max-w-xs p-6 bg-white rounded-2xl shadow-lg cursor-pointer"
>
<h3 className="text-lg font-bold text-gray-800">Interactive Card</h3>
<p className="text-gray-600">This card grows when you hover!</p>
</motion.div>
```

### 🎨 Key Tailwind Concepts Used
- Layout → flex, justify-between, items-center, min-h-screen
- Spacing → p-6, px-4, py-2, mb-4
- Typography → text-xl, font-bold, text-gray-600
- Colors → bg-blue-500, hover:bg-indigo-600, text-white
- Effects → shadow-lg, rounded-xl, transition, focus:ring-2

### Custom Sized Width
🔹 1. Use Arbitrary Values (Recommended in Tailwind v3+)
- Tailwind lets you use square brackets to apply custom widths directly:
```jsx
<div className="w-[450px] bg-blue-300">Custom 450px Width</div>
<div className="w-[75%] bg-green-300">Custom 75% Width</div>
<div className="w-[30rem] bg-purple-300">Custom 30rem Width</div>
```
✅ Super flexible — you can set px, %, rem, vh, vw etc.

🔹 2. Extend Theme in tailwind.config.js
- If you want reusable custom widths, extend Tailwind’s config:
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      width: {
        '128': '32rem',    // w-128 → 32rem
        '144': '36rem',    // w-144 → 36rem
        '1/7': '14.2857%', // w-1/7 → custom fraction
      },
    },
  },
}
```
Now you can use them like:

```js
<div className="w-128 bg-red-300">32rem wide</div>
<div className="w-1/7 bg-yellow-300">1/7 width</div>
```

🔹 3. Max Width (Responsive Containers)
- Sometimes you need to limit width but keep responsive behavior:
    ```jsx
    <div className="max-w-[500px] bg-gray-200">
    Max 500px wide, shrinks on smaller screens
    </div>

    <div className="max-w-lg bg-gray-300">
    Tailwind built-in → max-width: 32rem
    </div>
    ```
🔹 4. Combine with Responsive Breakpoints
- You can make widths responsive:
    ```jsx
    <div className="w-full sm:w-[400px] md:w-[600px] lg:w-[800px] bg-indigo-300">
    Responsive custom widths
    </div>
    ```

### Pros
- We don't have to leave our HTML file and we can modify styles within our templates
- Ease of using different classes for every CSS property
- Tailwind CSS is very light-weight - It ensures to include only necessary CSS in the CSS bundle and removes redundant CSS codes i.e. it never ships unused CSS again
- It eases to add CSS on the fly when a developer thinks and codes a component

### Cons
- Has initial learning curve
- The inclusion of lot of tailwind classes in the HTML makes our code look lengthy
- Code becomes less readable

## 🌙 Configuring Tailwind CSS for Dark Mode

Tailwind CSS makes it simple to support **dark mode** in your React applications.  
This guide explains how to enable and use it effectively.

---

### ⚙️ 1. Enable Dark Mode in `tailwind.config.js`
Edit your config file:

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media'
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- media → Uses system preference (prefers-color-scheme: dark)
- class → Toggle manually with a dark class (recommended for apps)

### 🎨 2. Using Dark Mode Classes
Tailwind provides the dark: variant for styling:
```jsx
<div className="bg-white text-black dark:bg-gray-900 dark:text-white p-6">
  <h1 className="text-2xl font-bold">Hello, Dark Mode!</h1>
  <p className="text-gray-700 dark:text-gray-300">This text adapts to theme.</p>
</div>
```
- Light Mode → White background, black text
- Dark Mode → Dark gray background, white text

text

### 🔘 3. Toggling Dark Mode in React
Since we’re using class-based mode, toggle the dark class on <html>.
```jsx
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
    >
      {darkMode ? "Switch to Light" : "Switch to Dark"}
    </button>
  );
}
```
### 🖼️ 4. Example Dark Mode Card
```jsx
export default function Card() {
  return (
    <div className="max-w-sm p-6 rounded-xl shadow-md bg-white text-black dark:bg-gray-800 dark:text-white transition">
      <h2 className="text-xl font-bold">Tailwind Dark Mode</h2>
      <p className="text-gray-600 dark:text-gray-300">
        Switch themes easily with utility classes!
      </p>
    </div>
  );
}
```
