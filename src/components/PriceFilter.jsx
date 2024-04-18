import React, { useState } from 'react'
import SelectInput from './form/SelectInput';
import { Slider } from "@material-tailwind/react";
import SecondaryButton from './button/SecondaryButton';

export default function PriceFilter() {
    const [options,setOptions] = useState(['Business','Family','Couple','Adventure']);
  return (
    <div>
      <section className='bg-[#F7FAFD]'>
        <div className='py-14 px-3 sm:px-20 md:px-5'>
            <h2 className='pb-5 text-base font-[500]'>Filter Search</h2>
        <div className='border border-gray-300 rounded-lg px-5 py-5'>
        <SelectInput variant='white' fieldPlaceholder="Country" options={options}/>
        <div className='pt-5'>
        <SelectInput variant='white' fieldPlaceholder="Travel type" options={options}/>
        </div>
        <p className='text-base py-5'>Price range</p>
        <div className="w-full">
        <Slider
            defaultValue={50}
            className="text-[#FF4A52]"
            barClassName="rounded-none bg-[#FF4A52]"
            thumbClassName="[&::-moz-range-thumb]:rounded-none [&::-webkit-slider-thumb]:rounded-none [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px]"
            trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent rounded-none !bg-[#FF4A52]/30 border border-[#FF4A52]/20"
        />
        </div>
        <div className='pt-10'>
        <SecondaryButton name='Reset' width='full'/>
        </div>
        </div>
        </div>
      </section>

    </div>
  )
}
