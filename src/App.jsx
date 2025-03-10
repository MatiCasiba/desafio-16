import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import ListadoUsuarios from "./components/ListadoUsuarios"


const App = () => {

  const [usuarios, setUsuarios] = useState(null)
  const [usuarioAEditar, setUsuarioAEditar] = useState(null)

  useEffect(()=> {
    getAllUsers()
  }, [])

  const getAllUsers = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_BACKEND)
      if(!res.ok){
        throw new Error('No se pudo realizar la petición')
      }
      const data = await res.json()

      setUsuarios(data)

    } catch (error) {
      console.error(error)
    }
  }

  const agregarUsuario = async (nuevoUsuario) => {
    nuevoUsuario.edad = Number(nuevoUsuario.edad)
    delete nuevoUsuario.id

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

      const nuevoEstadoUsuarios = [...usuarios, usuarioAgregadoEnBackend]
      setUsuarios(nuevoEstadoUsuarios)

    } catch (error) {
      console.error(error)
    }
  }

  const editarUsuario = async (usuarioEditado) => {
 
    const urlEditar = import.meta.env.VITE_BACKEND + usuarioEditado.id

    try {
      usuarioEditado.edad = Number(usuarioEditado.edad)

      const res = await fetch(urlEditar, {
        method: 'PUT',
        headers: { 'content-type' : 'application/json' },
        body: JSON.stringify(usuarioEditado)
      })

      if(!res.ok){
        throw new Error('No se pudo hacer la peticion')
      }
      
      const productoEditadoBackend = await res.json()
      //console.log(productoEditadoBackend);

      const nuevoEstadoUsuarios = usuarios.map(user => user.id === usuarioEditado.id ? productoEditado : user)

      setUsuarios(nuevoEstadoUsuarios)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Formulario
        agregarUsuario={agregarUsuario}  
        usuarioAEditar={usuarioAEditar}
        setUsuarioAEditar={setUsuarioAEditar}
        editarUsuario={editarUsuario}
      />
      <ListadoUsuarios 
        usuarios={usuarios}
        setUsuarioAEditar={setUsuarioAEditar}
      />
    </>
  )
}

export default App
