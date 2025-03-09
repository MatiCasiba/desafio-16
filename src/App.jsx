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

  return (
    <>
      <Formulario />
      <ListadoUsuarios 
        usuarios={usuarios}
      />
    </>
  )
}

export default App
