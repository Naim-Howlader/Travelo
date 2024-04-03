import React from 'react'

export default function NumberInput({variant,fieldName,fieldId,fieldPlaceholder}) {
  return (
    <div className='mb-5'>
      <input type="number" id={fieldId} name={fieldName} className={`bg-${variant === 'dark' ? '[#040E27]' : 'gray-50'} border border-gray-700 text-white text-sm rounded-md focus:outline-none block w-full p-3`} placeholder={fieldPlaceholder} />
    </div>
  )
}