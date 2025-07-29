import React from 'react'

const Materia = ({nombre}) => {
  return (
    <div className='w-32 h-16 rounded-3xl bg-mycolors-2 flex items-center justify-center'>
        <h1 className='font-semibold text-center text-black text-lg'>
            {nombre}
        </h1>
    </div>
  )
}

export default Materia