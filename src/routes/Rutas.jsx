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
                path: '/usuarios',
                element: <Usuarios />
            },
            {
                path: '/nosotros',
                element: <Nosotros />
            },

        ]
    )
    return rutasApp
}

export default Rutas