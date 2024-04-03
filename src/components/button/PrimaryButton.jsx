import React from 'react'

export default function PrimaryButton({name}) {
  return (
    <div>
      <div>
        <button className={`bg-[#1EC6B6] px-10 py-4 text-white font-semibold rounded-md hover:bg-[#FF4A52] duration-500`}>
            {name}
        </button>
      </div>
    </div>
  )
}
