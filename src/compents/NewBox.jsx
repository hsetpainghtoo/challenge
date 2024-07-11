import React from 'react'

const NewBox = () => {
  return (
    <>
        <div className='px-6 py-9'>
            <p className='text-orange-400 text-5xl font-bold'>New</p>
            
            <div className='mt-8'>
                <a href="#" className='text-white hover:text-orange-400 focus:text-orange-400 lg:text-xl max-md:text-2xl font-bold'>Hydrogen VS Electric Cars</a>
                <p className='text-white max-lg:text-xl max-md:text-xl sm:text-base tracking-wide opacity-60 mt-2'>Will hydrogen-fueled cars ever catch up to EVs?</p>

                <div className='my-8 border border-white opacity-50'></div>

                <a href="#" className='text-white hover:text-orange-400 focus:text-orange-400 lg:text-xl max-md:text-2xl font-bold'>The Downsides of AI Artistry</a>
                <p className='text-white max-lg:text-xl max-md:text-xl sm:text-base tracking-wide opacity-60 mt-2'>
                    What are the possible adverse effects of on-demand AI image generation?
                </p>

                <div className='my-9 border border-white opacity-50'></div>

                <a href="#" className='text-white hover:text-orange-400 focus:text-orange-400 lg:text-xl max-md:text-2xl font-bold'>Is VC Funding Drying Up?</a>
                <p className='text-white max-lg:text-xl max-md:text-xl sm:text-base tracking-wide opacity-60 mt-2'>
                    Private funding by VC firms is down 50% YOY. We take a look at what that means.
                </p>
            </div>
        </div>
    </>
  )
}

export default NewBox