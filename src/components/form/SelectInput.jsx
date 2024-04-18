import React from 'react'

export default function SelectInput({variant,fieldPlaceholder,options}) {
  return (
    <div>
  <select id="countries" className={`bg-${variant === 'dark' ? '[#040E27]':'gray-50'} border ${variant==='dark'?'border-gray-700':'border-gray-300'} ${variant==='dark'? 'text-white':'text-gray-500'} text-sm rounded-md  focus:outline-none block w-full p-3`}>
    <option defaultValue='null'>{fieldPlaceholder}</option>
    {
        options.map((option,index)=>{
            return(
                <option key={index} value={option}>{option}</option>
            )
        })
    }
  </select>

    </div>
  )
}
