import React from 'react'

const ListadoUsuarios = () => {
  return (
    <>
        <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-xs text-gray-800 uppercase bg-gray-200'>
                <tr>
                    <th className="px-6 py-3">Nombre</th>
                    <th className="px-6 py-3">Apellido</th>
                    <th className="px-6 py-3">Edad</th>
                    <th className="px-6 py-3">Puesto</th>
                </tr>
            </thead>
        </table>
        
    </>
  )
}

export default ListadoUsuarios