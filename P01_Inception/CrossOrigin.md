# 🌍 Cross-Origin in `<script>` Tags  

## 🔹 What is Cross-Origin?  
A **cross-origin request** happens when your site loads a resource (like a script) from a different domain.  
Example:  
- Your site → `https://mywebsite.com`  
- Script → `https://cdn.jsdelivr.net/...`  

Since the script is from another domain (CDN), it’s **cross-origin**.  

---

## 🔹 Why use `crossorigin` in `<script>`?  
- Ensures correct handling of **CDN-hosted scripts**.  
- Required when using **Subresource Integrity (SRI)** (`integrity` attribute).  
- Improves **error reporting** for external scripts.  

---

## 🔹 Cheatsheet  

| Value            | Sends Credentials | Use Case |
|------------------|------------------|----------|
| `anonymous`      | ❌ No            | ✅ Default for CDN scripts & SRI |
| `use-credentials`| ✅ Yes           | 🔐 Protected scripts (needs cookies/auth) |
| *(none)*         | ❌ No            | ⚠️ Loads, but no error details & breaks with `integrity` |

---

## 🔹 Example (CDN Script)  

```html
<script src="https://cdn.jsdelivr.net/npm/vue@3.0.0/dist/vue.global.prod.js"
        integrity="sha384-xyz..."
        crossorigin="anonymous"></script>

