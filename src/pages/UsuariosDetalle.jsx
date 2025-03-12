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
        <h1 className="font-bold text-center text-4xl my-5">Usuario detalle</h1>
        {
            usuarioDetalle ?
                (
                    <>
                        <p className="py-2 text-2xl">El nombre del usuario: <strong>{usuarioDetalle.nombre}</strong></p>
                        <p className="py-2 text-2xl">El apellido del usuario: <strong>{usuarioDetalle.apellido}</strong></p>
                        <p className="py-2 text-2xl">La edad del usuario: <strong>{usuarioDetalle.edad}</strong></p>
                        <p className="py-2 text-2xl">El puesto del usuario: <strong>{usuarioDetalle.puesto}</strong></p>
                    </>
                ) : (
                    <Spinner />
                )
        }
    </>
  )
}

export default UsuariosDetalle