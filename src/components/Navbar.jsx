import { Link, NavLink } from "react-router"

const Navbar = () => {
  return (
    <nav className="bg-red-400">
        <div className="container mx-auto flex justify-between items-center">
            <Link 
                to="https://github.com/MatiCasiba" 
                target="_blank" 
                className="text-black text-lg font-bold"
                title="github - MatiCasiba"
            >
                MatiDev
            </Link>
            
            <ul className="flex space-x-5">
                <li><NavLink to="/" className="text-black hover:text-white">
                    Inicio
                </NavLink></li>
                
                <li><NavLink to="/usuarios" className="text-black hover:text-white">
                    Usuarios
                </NavLink></li>
                
                <li><NavLink to="/nosotros" className="text-black hover:text-white">
                    Nosotros
                </NavLink></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar