import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import ListadoUsuarios from "./components/ListadoUsuarios"


const App = () => {

  const [usuarios, setUsuarios] = useState(null)

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

  return (
    <>
      <Formulario
        agregarUsuario={agregarUsuario}  
      />
      <ListadoUsuarios 
        usuarios={usuarios}
      />
    </>
  )
}

export default App
