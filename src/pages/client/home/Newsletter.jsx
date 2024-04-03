import React from 'react'
import TextInput from '../../../components/form/TextInput'
import SecondaryButton from '../../../components/button/SecondaryButton'

export default function Newsletter() {
  return (
    <>
      <div className='bg-[#3A485D]'>
        <div className=' px-5 sm:px-20 lg:px-36 py-14 lg:flex lg:items-center lg:gap-x-5'>
            <div className="text-section">
            <h2 className='text-2xl  text-white lg:font-semibold'>Subscribe Our Newsletter</h2>
            <p className='text-gray-400 py-3'>Subscribe newsletter to get offers and about new places to discover.</p>
            </div>
            <div className='md:flex md:gap-x-5 lg:w-[70%]'>
                <div className='md:w-[70%]'>
                <TextInput variant='white' fieldId='mail' fieldName='mail' fieldPlaceholder='Your mail'/>
                </div>
                <SecondaryButton name='Subscribe' width='full'/>
            </div>
        </div>
      </div>
    </>
  )
}
