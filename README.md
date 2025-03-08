* Nombre: Matias Gabriel Casiba
* Link GitHub Repo: https://github.com/MatiCasiba/desafio-16
* Link Netlify:

# Desafío 16
En este desafío se estará armando un formulario, para que el usuario ingrese sus datos y este se muestra en pantalla

## Formulario
Voy a empezar creando el componente formulario y estilizando con tailwind, este componente Formulario.jsx se encuentra en src/components/Formulario.jsx:
```sh
const Formulario = () => {
  return (
    <>
        <div className="max-w-lg mb-4">
            <form className="bg-gray-100 border rounded-lg p-6">
                
                {/* CAMPO NOMBRE */}
                <label 
                    htmlFor="lbl-nombre"
                    className="block mb-2 text-sm font-bold text-gray-700"
                >
                    Nombre
                </label>
                <input 
                    type="text"
                    id="lbl-nombre"
                    placeholder="Ingrese su nombre"
                    className="w-full bg-white p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                />

                {/* CAMPO APELLIDO */}
                <label 
                    htmlFor="lbl-apellido"
                    className="block mb-2 text-sm font-bold text-gray-700"
                >
                    Apellido
                </label>
                <input 
                    type="text"
                    id="lbl-apellido"
                    placeholder="Ingrese su apellido"
                    className="w-full bg-white p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                />

                {/* CAMPO EDAD */}
                <label 
                    htmlFor="lbl-edad"
                    className="block mb-2 text-sm font-bold text-gray-700"    
                >
                    Edad
                </label>
                <input 
                    type="text" 
                    id="lbl-edad"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    placeholder="Ingrese su edad"
                    className="w-full bg-white p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"  
                />

                {/* CAMPO PUESTO */}
                <label 
                    htmlFor="lbl-puesto"
                    className="block mb-2 text-sm font-bold text-gray-700"
                >
                    Puesto
                </label>
                <input 
                    type="text"
                    id="lbl-puesto"
                    placeholder="Ingrese su puesto"
                    className="w-full bg-white p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                />
            </form>
        </div>
    </>
  )
}

export default Formulario
```
### Input edad
Dentro de este input tendrá unas configuraciones únicas, no quiero usar el input de tipo numero, utilicé el de tipo texto, pero quiero que solamente el usuario ingrese números, para esto use:
* pattern="[0-9]*" -> permite solo números, pero no evita las letras
* inpputMode="numeric" -> logra que en dispositivos moviles aparezca el teclado numérico

### Botones
Eh creado botones dentro del formulario que serviran para subir todos los datos o en caso de que el usaurio se arrepienta, tiene la opción para cancelar (este tendrá la función de vaciar todo dato que contenga el formulario, osea resetear). Primero te mostrará el diseño de este y sus espacios:
```sh
    <div className="max-w-lg m-auto mb-4">
            <form className="bg-gray-100 border rounded-lg p-6">
                
                ...

                # estarán dentro de un contenedor, gracias a esto podré dar un espacio entre ellos, eso lo logro con el flex y justify-between
                <div className="flex justify-between">
                    <button 
                        type="submit"
                        className="px-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-800 cursor-pointer"
                    >
                        Subir
                    </button>
                    <button 
                        type="reset"
                        className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-800 cursor-pointer"
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
```

### Exportando el formulario a App
Para mostrar este formulario en pantalla, lo exportaré a App.jsx
```sh
import Formulario from "./components/Formulario"


const App = () => {
  return (
    <>
      <Formulario />
    </>
  )
}

export default App

```

## Lista de usuarios
En el componente ListadoUsuarios, se cargarán todos los datos que coloque el usuario dentro del formulario, este componente se encuentra en src/components/ListadoUsuarios.jsx. Primero empezaré estilizando, dividiendo las secciones nombre, apellido, edad y puesto:
```sh
import React from 'react'

const ListadoUsuarios = () => {
  return (
    <>
        <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-xs text-gray-800 uppercase bg-gray-200'>
                <tr>
                    <th className="px-6 py-3">Nombre</th>
                    <th className="px-6 py-3">Apellido</th>
                    <th className="px-6 py-3">Edad</th>
                    <th className="px-6 py-3">Puesto</th>
                </tr>
            </thead>
        </table>
        
    </>
  )
}

export default ListadoUsuarios
```
* Las letras que contiene los elementos th, estarán en mayuscula (lo logro con uppercase) y serán un poco gruesa, con la intención de que estos destaquen

### Exporto el listado al App.jsx
Como en el formulario, quiero que se muestre dicha tabla, entonces lo exportaré en App.jsx:
```sh
import Formulario from "./components/Formulario"
import ListadoUsuarios from "./components/ListadoUsuarios"

const App = () => {
  return (
    <>
      <Formulario />
      <ListadoUsuarios />
    </>
  )
}

export default App
```

## Fuente
Eh importado una tipografía para que el texto tenga otro diseño de letra:

* En la terminal
```sh
npm install @fontsource/barlow
```
* index.css
```sh
@import '@fontsource/barlow/100.css';
@import '@fontsource/barlow/300.css';
@import '@fontsource/barlow/700.css';
@import "tailwindcss";

@theme {
    --font-sans: 'Barlow', sans-serif;
}
```

## Rutas
Lo que estaré haciendo en rutas es la navegación de los links que habrá en el navbar, esto accederá al contenido de cada uno de los componentes dentro de la carpeta "pages" (se encuentra en: src/pages/), los componentes que tengo acá son Inicio.jsx, Nosotros.jsx y Usuarios.jsx.
* Quien tendrá contenido es el Usuarios.jsx, dentro de este estaré colocando App.jsx, ya no se encontrará mas en el main.jsx, en el main.jsx se ecnontrará el componente Rutas.jsx 
```sh
# Usuarios.jsx
import App from '../App'

const Usuarios = () => {
  return (
    <App />
  )
}

export default Usuarios
```
### Rutas.jsx:
Acá contendrá la navegación de los componentes (este componete se encuentra dentro de src/routes/)
```sh
import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Usuarios from "../pages/Usuarios"
import Nosotros from "../pages/Nosotros"

const Rutas = () => {
    const rutasApp = useRoutes(
        [
            {
                path: '/',
                element: <Inicio />
            },
            {
                path: '/ususarios',
                element: <Usuarios />
            },
            {
                path: '/nosostros',
                element: <Nosotros />
            },
            

        ]
    )
    return rutasApp
}

export default Rutas
```

### main.jsx
Como mencioné, en el main no estará App.jsx, estará Rutas.jsx
```sh
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import Rutas from './routes/Rutas.jsx'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className='container mx-auto'>
        <Rutas />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
```
* Como el contenido del crud se está ejecutando dentro de l componete Usuarios.jsx, importaré Rutas.jsx en el main.jsx

### Navbar
Como has visto, hay un compponente Navbar.jsx dentro del main, aquí se encuentra la barra de navegación:
```sh
import { Link, NavLink } from "react-router"

const Navbar = () => {
  return (
    <nav className="bg-red-400">
        <div className="container mx-auto flex justify-between items-center">
            <Link 
                to="https://github.com/MatiCasiba" 
                target="_blank" 
                className="text-black text-lg font-bold"
                title="github - MatiCasiba"
            >
                MatiDev
            </Link>
            
            <ul className="flex space-x-5">
                <li><NavLink to="/" className="text-black hover:text-white">
                    Inicio
                </NavLink></li>
                
                <li><NavLink to="/usuarios" className="text-black hover:text-white">
                    Usuarios
                </NavLink></li>
                
                <li><NavLink to="/nosotros" className="text-black hover:text-white">
                    Nosotros
                </NavLink></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
```
Entonces el usuario podrá ver la barrra de navegación en la parte superiror y podrá acceder a donde necesite.