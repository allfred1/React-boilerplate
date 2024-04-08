
<div align="center">
  <h1>⚜️ React-boilerplate</h1>
</div>
Why ours?
 -- ✨ Forget about CSS, we're using SCOPED SCSS here.
 -- 📃 Cross-platform
 -- 🛸 We're using the new React Router, you should use it too!.
 -- 📂 File structure: a well-organized file structure will make navigating and maintaining your codebase easier
 -- 🗄️ Use Alias instead of long relative paths!
 -- 🚀 Thanks to SWC and Vite, your project runs even more efficiently!
 -- 📖 Ready-made basic-reset styles for your project


## 💥 Start your journey now!

Copy all the files to your repository:

```bash
git clone https://github.com/allfred1/React-boilerplate.git .
```

Install all the modules:

```bash
npm i
yarn
bun i
```

And run the project!

```bash
bun dev
yarn dev
npm run dev
```

## Structure

| Type | Alias | Content |
|------|-------|---------|
| stylesheet | @styles | Global styles for the application |
| containers | @page | Here you'll find your page folders! |
| content | @vault | Here are the useContext providers |
| utils | @noda | Utilities and other NodeJS-related code |
| assets | @assets | - |
| components | @comp | Application components |
| router | none | Your page routes |

<style>
  h1, h3 {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }
  th, td {
    padding: 0.5rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  th {
    background-color: #f2f2f2;
  }
  pre {
    background-color: #f2f2f2;
    padding: 1rem;
    border-radius: 5px;
    overflow-x: auto;
  }
</style>
