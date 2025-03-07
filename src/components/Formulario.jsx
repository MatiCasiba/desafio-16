
const Formulario = () => {
  return (
    <>
        <div className="max-w-lg m-auto mb-4">
            <form className="bg-gray-100 border rounded-lg p-6">
                
                {/* CAMPO NOMBRE */}
                <label 
                    htmlFor="lbl-nombre"
                    className="block mb-2 text-sm font-bold text-gray-700 tracking-wider"
                >
                    Nombre
                </label>
                <input 
                    type="text"
                    id="lbl-nombre"
                    placeholder="Ingrese su nombre"
                    className="w-full bg-white p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                />

                {/* CAMPO APELLIDO */}
                <label 
                    htmlFor="lbl-apellido"
                    className="block mb-2 text-sm font-bold text-gray-700 tracking-wider"
                >
                    Apellido
                </label>
                <input 
                    type="text"
                    id="lbl-apellido"
                    placeholder="Ingrese su apellido"
                    className="w-full bg-white p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                />

                {/* CAMPO EDAD */}
                <label 
                    htmlFor="lbl-edad"
                    className="block mb-2 text-sm font-bold text-gray-700 tracking-wider"    
                >
                    Edad
                </label>
                <input 
                    type="text" 
                    id="lbl-edad"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    placeholder="Ingrese su edad"
                    className="w-full bg-white p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"  
                />

                {/* CAMPO PUESTO */}
                <label 
                    htmlFor="lbl-puesto"
                    className="block mb-2 text-sm font-bold text-gray-700 tracking-wider"
                >
                    Puesto
                </label>
                <input 
                    type="text"
                    id="lbl-puesto"
                    placeholder="Ingrese su puesto"
                    className="w-full bg-white p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                />
            </form>
        </div>
    </>
  )
}

export default Formulario