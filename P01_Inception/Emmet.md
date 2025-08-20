# ⚡ Emmet in VS Code  

Emmet is a powerful toolkit built into **Visual Studio Code** that lets you write **short abbreviations** and expand them into **full-fledged HTML or CSS code** instantly. It’s like a turbocharger for frontend developers 🚀.  

---

## ✨ What is Emmet?

**Emmet** is a shorthand expander that:  
- 📝 Saves time while writing repetitive HTML & CSS.  
- ⚡ Expands abbreviations into code with a single **Tab** or **Enter**.  
- 🎯 Works contextually in HTML, JSX, and CSS files.  


**Example**: **ul>li*3**

Expands to:

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

## ⚙️ How Emmet Works in VS Code

**Pre-installed** → No need to install separately.

**Trigger Expansion** → Write abbreviation → Press Tab / Enter.

**Context-Aware**

**In HTML/JSX** → expands tags.

**In CSS** → expands rules.

### 🛠️ Emmet Abbreviation Syntax

**🔹 Nesting (>)**

**Example**:

```css
div>p
```

Expands to:

```html
<div>
  <p></p>
</div>
```

**🔹 Siblings (+)**

**Example**:

```css
h1+p
```

Expands to:

```html
<h1></h1>
<p></p>
```

**🔹 Multiplication (*)**

**Example**:

```css
li*5
```

Expands to:

```html
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
```

**🔹 IDs & Classes**

**Example**:

```css
div#app.container
```

Expands to:

```html
<div id="app" class="container"></div>
```

**🔹 Content ({})**

**Example**:

```css
button{Click Me}
```

Expands to:

```html
<button>Click Me</button>
```

**🔹 Attributes ([])**

**Example**:

```css
input[type=text][placeholder=Name]
```

Expands to:

```html
<input type="text" placeholder="Name">
```

## 🎨 Emmet in CSS

**Example**:

**m10** → margin: 10px;

**p10-20** → padding: 10px 20px;

**bd1-s#000** → border: 1px solid #000;


## ⚡ Customizing Emmet in VS Code

Open Command Palette → Preferences: Open Settings (JSON) → Add configs:

```json
"emmet.includeLanguages": {
  "javascript": "javascriptreact",
  "vue-html": "html"
},
"emmet.triggerExpansionOnTab": true
```

# 📌 Quick Cheatsheet  

| 📝 Abbreviation | ⚡ Expands To |
|-----------------|---------------|
| `ul>li*3` | `<ul><li></li><li></li><li></li></ul>` |
| `div#root.app` | `<div id="root" class="app"></div>` |
| `input:email` | `<input type="email" />` |
| `m10` | `margin: 10px;` |
| `p10-20` | `padding: 10px 20px;` |


## 🎯 Why Use Emmet?

- 🚀 Write HTML/CSS 10x faster

- 🧩 Less boilerplate, more productivity

- 🔥 Especially handy for React JSX

