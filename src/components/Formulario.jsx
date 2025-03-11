import { useEffect, useState } from "react"

const Formulario = ({agregarUsuario, usuarioAEditar, setUsuarioAEditar,  editarUsuario}) => {

  const dataFormularioInicial = {
    id: null,
    nombre: '',
    apellido: '',
    edad: '',
    puesto: ''
  }

  const [dataFormulario, setDataFormulario] = useState(dataFormularioInicial)

  useEffect(()=>{
    usuarioAEditar ? setDataFormulario(usuarioAEditar) : setDataFormulario(dataFormularioInicial)
  }, [usuarioAEditar])

  const handleChange = (e) => {

    const dataActualizada = {
        ...dataFormulario,
        [e.target.name]: e.target.value
    }
    setDataFormulario(dataActualizada)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (dataFormulario.id === null){
        agregarUsuario(dataFormulario)
    }
  }

  const hadnleReset = () => {
    setDataFormulario(dataFormularioInicial)
    setUsuarioAEditar(null)
  }

  return (
    <>
        <h2 className="text-2xl font-semibold my-4">
            Formulario de {usuarioAEditar ? 'edición': 'carga'} de usuarios
        </h2>
        <div className="max-w-lg m-auto mb-4">
            <form 
                className="bg-gray-100 border rounded-lg p-6"
                onSubmit={handleSubmit}
            >
                
                {/* CAMPO NOMBRE */}
                <label 
                    htmlFor="lbl-nombre"
                    className="block mb-2 text-sm font-bold text-gray-700 tracking-wider"
                >
                    Nombre
                </label>
                <input 
                    type="text"
                    id="lbl-nombre"
                    placeholder="Ingrese su nombre"
                    className="w-full bg-white p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="nombre"
                    onChange={handleChange}
                    value={dataFormulario.nombre} 
                />

                {/* CAMPO APELLIDO */}
                <label 
                    htmlFor="lbl-apellido"
                    className="block mb-2 text-sm font-bold text-gray-700 tracking-wider"
                >
                    Apellido
                </label>
                <input 
                    type="text"
                    id="lbl-apellido"
                    placeholder="Ingrese su apellido"
                    className="w-full bg-white p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="apellido"
                    onChange={handleChange}
                    value={dataFormulario.apellido}  
                />

                {/* CAMPO EDAD */}
                <label 
                    htmlFor="lbl-edad"
                    className="block mb-2 text-sm font-bold text-gray-700 tracking-wider"    
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
                    name="edad"
                    onChange={handleChange}
                    value={dataFormulario.edad}   
                />

                {/* CAMPO PUESTO */}
                <label 
                    htmlFor="lbl-puesto"
                    className="block mb-2 text-sm font-bold text-gray-700 tracking-wider"
                >
                    Puesto
                </label>
                <input 
                    type="text"
                    id="lbl-puesto"
                    placeholder="Ingrese su puesto"
                    className="w-full bg-white p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    name="puesto"
                    onChange={handleChange}
                    value={dataFormulario.puesto}  
                />

                {/* BOTONES */}
                <div className="flex justify-between">
                    <button 
                        type="submit"
                        className={`px-4 py-2 ${usuarioAEditar? 'bg-yellow-500': 'bg-green-500'} text-white font-bold rounded-lg ${usuarioAEditar? 'hover:bg-yellow-800': 'hover:bg-green-800'} cursor-pointer`}
                    >
                        { usuarioAEditar ? 'Editar' : 'Subir' }
                    </button>
                    <button 
                        type="reset"
                        className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-800 cursor-pointer"
                        onClick={hadnleReset}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Formulario