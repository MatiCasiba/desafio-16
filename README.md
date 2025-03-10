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

### Ingresando datos en el formulario y mostrando en el backend
Lo siguiente a hacer es que cuando el usuario ingrese información en el formulario, este se muestre en el listado de usuarios y se carga la info en el db.json

* Función agregarUsuario en app.jsx
```sh
const App = () => {

  const [usuarios, setUsuarios] = useState(null)
  ...

  const agregarUsuario = async (nuevoUsuario) => {
    # Agrego el usuario en el backend
    nuevoUsuario.edad = Number(nuevoUsuario.edad)
    delete nuevoUsuario.id # borra la propiedad 'id' del objeto nuevoUsuario

    try {
      const res = await fetch(import.meta.env.VITE_BACKEND, {
        method: 'POST',
        headers: { 'content-type' : 'application/json' },
        body: JSON.stringify(nuevoUsuario)
      })

      if(!res.ok){
        throw new Error('No se pudo hacer la petición')
      }
      const usuarioAgregadoEnBackend = await res.json()

      # Modifico el estado basado en el producto agregado en el backend
      const nuevoEstadoUsuarios = [...usuarios, usuarioAgregadoEnBackend] # array nuevo = arrayViejo + nuevoUsuario
      setUsuarios(nuevoEstadoUsuarios)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Formulario
        agregarUsuario={agregarUsuario}  # lo paso como prop al componente Formulario
      />
      <ListadoUsuarios 
        usuarios={usuarios}
      />
    </>
  )
}

export default App
```

* Recibiendo la prop desde el App.jsx y creando los eventos de cambio y entrega (submit):
```sh
import { useState } from "react"

const Formulario = ({agregarUsuario}) => {

  # estado inicial del formulario
  const dataFormularioInicial = {
    id: null,
    nombre: '',
    apellido: '',
    edad: '',
    puesto: ''
  }
  
  #                                           ⬇️hook
  const [dataFormulario, setDataFormulario] = useState(dataFormularioInicial)
  # dataFormulario: guardará la info del formulario
  # setDataFormulario: va a actualizar ese estado

  # manejo de cambio en los inputs
  const handleChange = (e) => {

    const dataActualizada = {
        ...dataFormulario,
        [e.target.name]: e.target.value
    }
    # actualiza el estado con los nuevos valores del dataActualizada
    setDataFormulario(dataActualizada)
  }

  const handleSubmit = (e) => {
    e.preventDefault() # evita que el usuario recargue la página 

    if (dataFormulario.id === null){ # estoy agragando un nuevo usuario
        agregarUsuario(dataFormulario)
        # llamo a agregarUsuario y le paso dataFormulario
    }
  }

  return (
    <>
        <div className="max-w-lg m-auto mb-4">
            <form 
                className="bg-gray-100 border rounded-lg p-6"
                onSubmit={handleSubmit}
            >
                
                <label 
                    ...
                >
                    Nombre
                </label>
                <input 
                    ...
                    name="nombre"
                    onChange={handleChange}
                    value={dataFormulario.nombre} 
                />

                <label 
                    ...
                >
                    Apellido
                </label>
                <input 
                    ...
                    name="apellido"
                    onChange={handleChange}
                    value={dataFormulario.apellido}  
                />

                <label 
                    ... 
                >
                    Edad
                </label>
                <input 
                    ...
                    onChange={handleChange}
                    value={dataFormulario.edad}   
                />

                <label 
                    ...
                >
                    Puesto
                </label>
                <input 
                    ...
                    name="puesto"
                    onChange={handleChange}
                    value={dataFormulario.puesto}  
                />

            </form>
        </div>
    </>
  )
}

export default Formulario
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

## Fila
Dentro de fila estará la info que obtengo del data json, más los botones para ver, editar y borrar, toda esta info obtenida, la mostraré en la tabla de ListadoUsuarios (su cuerpo), con cáda info correspondiente en su casilla. 

### Cargando los datos del db.json en ListadosUsuarios.jsx
Ahora haré que se vea en pantalla la info que se encuentra en mi db.json, para estos datos son pasado a través de props que las tengo desde App.jsx y son pasadas por los componentes ListadoUsuarios.jsx y Fila.jsx. En App.jsx estaré realizando la petición para pedir los usuarios del db.json:

* App.jsx
```sh
import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import ListadoUsuarios from "./components/ListadoUsuarios"


const App = () => {

  const [usuarios, setUsuarios] = useState(null)
  # usuarios es mi  estado y setUsuarios será quien modifique al estado


  # voy  a obtener esa información creando esta petición asincrónica getAllUsers y  con un useEffect
  useEffect(()=> {
    getAllUsers()
  }, [])

  const getAllUsers = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_BACKEND)
      if(!res.ok){
        throw new Error('No se pudo realizar la petición') # en el caso de que no se haya realizado la petición, lanzo un mensaje
      }
      const data = await res.json()

      setUsuarios(data)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Formulario />
      <ListadoUsuarios 
        usuarios={usuarios}
        # paso el estado como prop, quien lo recebirá este componete y Fila.jsx
      />
    </>
  )
}

export default App
```

* ListadoUsuarios.jsx:
```sh
import React from 'react'
import Fila from './Fila'
import Spinner from './Spinner'

const ListadoUsuarios = ({usuarios}) => {
  return (
    <>
        # creo un ternario para mostrar toda la tabla, de lo contrario se mostrará un spinner que es una animación de carga
        {usuarios ? (
          <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-xs text-gray-800 uppercase bg-gray-200'>
                <tr>
                    <th className="px-6 py-3">Nombre</th>
                    <th className="px-6 py-3">Apellido</th>
                    <th className="px-6 py-3">Edad</th>
                    <th className="px-6 py-3">Puesto</th>
                </tr>
            </thead> # encabezado
            <tbody> # cuerpo (donde se encontrará toda la info organizada que me traigo del componente fila)
              {
                usuarios.map((usuario)=> ( # recorro cada uno de los usuarios
                  <Fila 
                    usuario={usuario}
                    key={usuario.id}
                  />
                ))
              }
            </tbody>
          </table>
        ) : (
          <Spinner />
        )}
    </>
  )
}

export default ListadoUsuarios
```

* Fila.jsx:
```sh
#               ⬇️recibo la prop
const Fila = ({usuario}) => {
  return (
    <tr className="bg-white border-b border-gray-400">
        # dentro de la base, voy a obtener los detalles de los usuarios de esta manera, nombrando correctamente cada uno como los nombré en el db.json
        <td className="px-6 py-4">{usuario.nombre}</td>
        <td className="px-6 py-4">{usuario.apellido}</td>
        <td className="px-6 py-4">{usuario.edad}</td>
        <td className="px-6 py-4">{usuario.puesto}</td>
        <td className="px-6 py-4">

            # sección de acciones, donde se encontrará los botones que contendrá funcion para ver, editar o borrarlo de la tabla
            <button 
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer mr-2"
            >
                Ver
            </button>
            <button
                className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 cursor-pointer mr-2"
            >
                Editar
            </button>
            <button 
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer mr-2"
            >
                Eliminar
            </button>
        </td>
    </tr>
  )
}

export default Fila
```

## Creando el spinner
El spinner será la animación de carga en caso de que no se veán los usuarios en la tabla:
* Spinner.css:
```sh
.spinner {
    margin: 100px auto;
    width: 50px;
    height: 40px;
    text-align: center;
    font-size: 10px;
  }
  
  .spinner > div {
    background-color: #333;
    height: 100%;
    width: 6px;
    display: inline-block;
    
    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }
  
  .spinner .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }
  
  .spinner .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }
  
  .spinner .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
  
  .spinner .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
  
  @-webkit-keyframes sk-stretchdelay {
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
    20% { -webkit-transform: scaleY(1.0) }
  }
  
  @keyframes sk-stretchdelay {
    0%, 40%, 100% { 
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }  20% { 
      transform: scaleY(1.0);
      -webkit-transform: scaleY(1.0);
    }
  }
```

* Spinner.jsx:
```sh
import './Spinner.css'

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </div>
  );
};

export default Spinner;
```
Este componete lo verás que está en el componete ListadoUsuarios.jsx

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