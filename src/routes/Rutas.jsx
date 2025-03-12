import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Usuarios from "../pages/Usuarios"
import Nosotros from "../pages/Nosotros"
import UsuariosDetalle from "../pages/UsuariosDetalle"

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
                path: '/usuarios/detalle/:id',
                element: <UsuariosDetalle />
            },
            {
                path: '/nosotros',
                element: <Nosotros />
            }

        ]
    )
    return rutasApp
}

export default Rutas