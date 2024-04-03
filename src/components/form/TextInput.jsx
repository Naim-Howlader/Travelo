import React from 'react'

export default function TextInput({variant,fieldName,fieldId,fieldPlaceholder}) {
  return (
    <div className='mb-5'>
      <input type="text" id={fieldId} name={fieldName} className={`bg-${variant === 'dark' ? '[#040E27]' : 'gray-50'} border border-gray-700 ${variant==='dark'?'text-white':'text-black'} text-sm rounded-md focus:outline-none block w-full p-3`} placeholder={fieldPlaceholder} />
    </div>
  )
}
