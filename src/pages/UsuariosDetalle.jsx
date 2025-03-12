import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Spinner from "../components/Spinner"

const UsuariosDetalle = () => {

  const {id} = useParams()
  const [usuarioDetalle, setUsuarioDetalle] = useState(null)

  useEffect(()=> {
    getOne(id)
  }, [])

  const getOne = async (id) => {
    const urlGetOne = import.meta.env.VITE_BACKEND + id

    try {
        const res = await fetch(urlGetOne)
        if(!res.ok){
            throw new Error('No se pudo obntener el usuario')
        }

        const data = await res.json()
        setUsuarioDetalle(data)

    } catch (error) {
        console.error(error)
    }
  }

  return (
    <>
        <h1>Usuario detalle</h1>
        {
            usuarioDetalle ?
                (
                    <>
                        <h2>El nombre del usuario: {usuarioDetalle.nombre}</h2>
                        <p>El apellido del usuario: {usuarioDetalle.apellido}</p>
                        <p>La edad del usuario: {usuarioDetalle.edad}</p>
                        <p>El puesto del usuario: {usuarioDetalle.puesto}</p>
                    </>
                ) : (
                    <Spinner />
                )
        }
    </>
  )
}

export default UsuariosDetalle