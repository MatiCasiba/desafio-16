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