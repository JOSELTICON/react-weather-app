import React from 'react'

const CurrentDatDescriptionItem= ({name, value, unit}) => {
  return (
    <div className='flex flex-row items-center justify-between pt-8 px-12'>
        <p className='uppercase font-bold'>{name}</p>
        <p className='font-light'>{value} {unit}</p>
    </div>
  )
}

export default CurrentDatDescriptionItem