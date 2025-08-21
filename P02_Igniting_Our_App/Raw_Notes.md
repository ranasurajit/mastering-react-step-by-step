# 2. React Tutorial - Igniting Our App

## Introduction

- Lot of other libraries/utilities are needed to make our React fast. React cannot do it all by itself

## NPM (Is Everything but not Node Package Manager)

- NPM does not have full form
- It manages packages or libraries

### Adding NPM to the project

```
npm init
```

or to skip to defaults

```
npm init -y
```

- Once we do that we can see **package.json** generated for our project
- This is basically a configuration for NPM in JSON format for our project
- This will help us to install dependencies into our project
- Most important dependency or package is a **BUNDLER**. Bundler helps us to minify and compile the HTML, CSS, JS files into a shipping ready package or a production ready code
- Mostly used BUNDLERS are Webpack, Parcel and Vite
- By default, npm create-react-app uses Webpack with Babel

## Parcel - (Parcel is a Beast)

- Dev build
- Local Server
- HMR (Hot Module Replacement)
- File Watching Algorithm (written in C++)
- Reliable Caching for Faster Builds (inside .parche-cache within project)
- Image Optimization (Most expensive operation in a Browser)
- Minification of files
- Bundling for builds
- Compress the files to minimize build size
- Consistent Hashing
- Code Splitting
- Differential Bundling (Old browsers support)
- Diagnostics
- Better Error Handling
- HTTPs - runs server in https mode
- Tree Shaking - remove unused code
- Supports Web-workers, service workers
- Provides Lazy mode for application
- Different dev and production bundles

### Installation

```
npm install -D parcel
```

We observe the version of parcel installed as parcel: "^2.8.3"

**Note:**

- There are two types of dependencies in the project. 
    1. Normal Dependencies
    2. Dev Dependencies

    ```-D``` is to add the package as a dev dependency and update it in the appropriate section in **package.json**

- We add those libraries in Dev dependencies which are needed for local environment and we don't need those operation on production

- ~ or ^ in package version. ~ allows to upgrade to major version while ^ allows to update the package to minor version. Upgrading to Major version might cause issues to the project

- **package-lock.json** is also generated after npm installs the package

    - **package.json** has the approx version of the library but **package-lock.json** tell us the accurate version that is installed for the project.

    - **package-lock.json** also has an attribute named integrity which is a SHA-512 Hash to compare the integrity of the same library which is in production compared to that in the local

- **node_modules** also got generated which is the actual library along with its dependency tree (transitive dependencies) - every package inside **node_modules** do have their own dependencies jotted in their own **package.json**

- We create a **.gitignore** file to declare all that we do not need to push to git as it can get regenerated in the production. We add **node_modules**, **.parcel-cache** and **dist** in **.gitignore**

- We add **package.json** and **package-lock.json** to the git so that anywhere it can install the packages and generate **node_modules**

## Ignite App Using Parcel

By running below command, the Parcel creates gets hosted on port 1234 on localhost

```css
npx parcel index.html
```

Open 

```
http://localhost:1234
```

### Difference between NPM and NPX

NPX executes the package along with installing it



### Hot Module Replacement (HMR)

- On file changes, Parcel watches the file changes (file watching algorithm - written in C++) and replaces the build with the latest changes via Hot Module Replacement

## BrowsersList

- Helps to configure the application so that bundler can take care of major coverage of users using older version of Browsers

Link: https://browserslist.dev

## Workflow

0. create a git repository
1. npm init
2. install parcel as dev dependency
3. run parcel command to start the app and app will run on http://localhost:1234
4. install react and react-dom using NPM (using CDN links always makes a call in every reload and NPM helps to auto-update packages)
5. Import React and ReactDOM from node_modules into App.js. Change <script src= "App.js" type="module"></script>
6. Create production build using (remove entry point from **package.json**)

    ```
    npx parcel build index.html
    ```
7. Make the app compatible for older browsers. Check the configuration needed from [browserslist.dev](https://browserslist.dev/)
    ```
    "browserslist": [
        "last 10 Chrome version",
        "last 2 Firefox version"
    ]
    ```

