import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section id="getapp" className='flexCenter w-full flex-col pb-[100px]'>
      <div className='get-app'>
        <div className='z-20 flex w-full flex-1 flex-col items-start justify-center gap-12'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[320px]'>Download gratuito!</h2>
          <p className='regular-16 text-gray-10'>Disponível no iOS and Android</p>
          <div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'>
            <Button
              type='button'
              title='App Store'
              icon='/apple.svg'
              variant='btn_white'
              full
            />
            <Button
              type='button'
              title='Play Store'
              icon='/android.svg'
              variant='btn_drak_green_outline'
              full
            />
          </div>
        </div>

        <div className='flex flex-1 items-center justify-end'>
          <Image src="/phones.png" alt="images of the app" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetApp