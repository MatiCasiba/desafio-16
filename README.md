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
                    className="block mb-2 text-sm font-medium text-gray-700"
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
                    className="block mb-2 text-sm font-medium text-gray-700"
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
                    className="block mb-2 text-sm font-medium text-gray-700"    
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
                    className="block mb-2 text-sm font-medium text-gray-700"
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
