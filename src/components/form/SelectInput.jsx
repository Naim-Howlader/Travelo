import React from 'react'

export default function SelectInput({variant,fieldPlaceholder,options}) {
  return (
    <div>
  <select id="countries" className={`bg-${variant === 'dark' ? '[#040E27]':'gray-50'} border border-gray-700 text-white text-sm rounded-md  focus:outline-none block w-full p-3`}>
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
