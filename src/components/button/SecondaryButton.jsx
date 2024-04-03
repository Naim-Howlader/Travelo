import React from 'react'

export default function SecondaryButton({name,width}) {
  return (
    <div>
      <div>
        <button className={`bg-[#FF4A52] px-10 py-3 text-white font-semibold rounded-md hover:bg-[#1EC6B6] duration-500  ${width === 'full' ? 'w-full' : ''}`}>
            {name}
        </button>
      </div>
    </div>
  )
}
