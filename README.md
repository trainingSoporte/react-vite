# Frontend App Monitoreo

_Frontend de los Monitoreos, en REACT + Vite + Tailwindcss + React Router_

## Comenzando 🚀

_Estas instrucciones te permitirán crear la aplicacion desde cero._


### Instalación 🔧

_Pasos:_

> _1 Crea Aplicacion con Vite_ [Vite Guide](https://es.vitejs.dev/guide/)


```bash
$ npm create vite@latest
```
* ? Select a framework:
```bash
> React
```
* ? Select a variant:
```bash
> TypeScript
```

> _2 Instala Tailwindcss:_ [Tailwindcss Guide](https://tailwindcss.com/docs/guides/vite)

```bash
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```
* Configura **tailwind.config.js**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

* Configura **/src/index.css**

```javascript
@tailwind base;
@tailwind components;
@tailwind utilities;


body{
    background-color:zinc
}
```


> _3 Instala React Router:_ [React Router Guide](https://reactrouter.com/en/main/start/tutorial)

```bash
$ npm install react-router-dom localforage match-sorter sort-by
```

> _4 Crea directorios del Proyecto en 📁 src:_

### After Install 📋

```bash
$ git checkout -b develop
```

* generar archivos del paso 4

```bash
$ cd ..
$ ./generate_folders.sh
$ cd app
```
[!Note]Enter a root source Folder name (example:**app/src**) 

```
└── 📁app
    └── .eslintrc.cjs
    └── .gitignore
    └── index.html
    └── package-lock.json
    └── package.json
    └── postcss.config.js
    └── 📁public
        └── vite.svg
    └── README.md
    └── 📁src
        └── 📁api
        └── AppMonitor.tsx
        └── 📁assets
            └── react.svg
        └── 📁common
        └── 📁core
        └── index.css
        └── 📁interfaces
            └── run.status.ts
        └── main.tsx
        └── 📁presentation
            └── 📁components
                └── 📁card-command
                    └── CardCommand.tsx
                └── 📁icon
                    └── IconProgressive.tsx
                └── index.ts
                └── 📁sidebar
                    └── SidebarMenuItem.tsx
            └── 📁layouts
                └── DashboardLayout.tsx
                └── index.ts
            └── 📁pages
                └── 📁ecommerce
                    └── EcommerceControlPage.tsx
                └── index.ts
            └── 📁router
                └── router.tsx
            ├── templates
        └── vite-env.d.ts
    └── tailwind.config.js
    └── tsconfig.json
    └── tsconfig.node.json
    └── vite.config.ts
```