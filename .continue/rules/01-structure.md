# Project Architecture & Structural Standards

## 1. Directory Tree Layout
All new files must strictly adhere to this architectural split:
- `src/Components/` -> Directory containing re-usable components
- `src/Layouts/` -> Directory containing the re-usable layouts
- `src/Pages/` -> Directory containing the vue pages
- `src/App.vue` -> Main vue file that links to RouterView
- `src/main.js` -> Js file responsible for loading the VueJs
- `public/css/` -> Css files broken down into various categories
- `public/Images/` -> Images used throughout the project
- `public/app.cs` -> Contains the css for the main `app.vue` & `index.html`
- `public/favicon.ico` -> Favicon for the website
- `CONTRIBUTION.md` -> Detailed contributions and recognitions of the project
- `Index.html` -> Base starting file for the project
- `LICENSE` -> The current license the project adheres to **Apache 2.0**
- `package.json` -> Json file listing packages for the project
- `README.md` -> Markdown file displayed on the Github repository that gives description of repository
- `.github/` -> Github workflow deployment files and configuration


## 2. Coding & Naming Conventions
- **Filenames:** All Vue Single File Components (SFCs) must be **PascalCase** (e.g., `ProjectCard.vue`).
- **Path Aliases:** Always use `@/` to reference the `src/` directory (e.g., `@/components/common/Btn.vue`). Never use relative paths like `../../`.