import Swal from "sweetalert2";

const Fila = ({usuario, borrarUsuario,setUsuarioAEditar}) => {

  const handleEliminar = (id) => {
    Swal.fire({
        title: "Estás seguro?",
        text: "No podrás revertirlo!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "si, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
          borrarUsuario(id)
          Swal.fire({
            title: "ELIMINADO!",
            text: "El usuario se ha eliminado.",
            icon: "success"
          });
        } else {
          Swal.fire({
            title: "No lo borraste!",
            text: "El producto no se borro",
            icon: "info"
          });
        }
      });
  }

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
                onClick={()=> handleEliminar(usuario.id)} 
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer mr-2"
            >
                Eliminar
            </button>

        </td>
    </tr>
  )
}

export default Fila