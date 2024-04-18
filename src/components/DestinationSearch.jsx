import React from 'react'

import TextInput from './form/TextInput';
import NumberInput from './form/NumberInput';
import SelectInput from './form/SelectInput';
import PrimaryButton from './button/PrimaryButton';
import SecondaryButton from './button/SecondaryButton';


export default function DestinationSearch({options}) {
  return (
    <div>
      <section id='where-to-go' className='bg-[#040E27] py-14 px-5 sm:px-20 md:px-10 lg:px-10 lg:flex lg:justify-center lg:items-center'>
            <h2 className='text-2xl  lg:pr-5 font-semibold text-white pb-5'>Where You want to go?</h2>
              <div className='md:grid md:grid-cols-12 md:gap-x-5'>
              <div className='md:col-span-3'>
              <TextInput variant='dark' fieldName='destination' fieldId='destination' fieldPlaceholder='Where to go?'/>
              </div>
              <div className='md:col-span-3'>
              <NumberInput variant='dark' fieldName='date' fieldId='date' fieldPlaceholder='Date'/>
              </div>
              <div className='md:col-span-3'>
              <SelectInput variant='dark' fieldPlaceholder="Travel type" options={options}/>
              </div>
              <div className='mt-5 md:mt-0 md:col-span-3'>
              <SecondaryButton name='Search' baseColor='#FF4A52' hoverColor='#1EC6B6'/>
              </div>
              </div>
        </section> 
    </div>
  )
}
