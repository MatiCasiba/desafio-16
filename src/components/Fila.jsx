
const Fila = ({usuario, setUsuarioAEditar}) => {

  const handleEditar = (usuario) => {
    setUsuarioAEditar(usuario)
  }

  return (
    <tr className="bg-white border-b border-gray-400">
        <td className="px-6 py-4">{usuario.nombre}</td>
        <td className="px-6 py-4">{usuario.apellido}</td>
        <td className="px-6 py-4">{usuario.edad}</td>
        <td className="px-6 py-4">{usuario.puesto}</td>
        <td className="px-6 py-4">

            <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer mr-2"
            >
                Ver
            </button>
            <button
                onClick={()=> handleEditar(usuario)}
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