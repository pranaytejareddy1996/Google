import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import {ViewGridIcon , MicrophoneIcon} from '@heroicons/react/solid'
import {SearchIcon} from '@heroicons/react/outline'
import Footer from '../components/Footer'

import {useRouter} from 'next/router';

export default function Home() {
  const router = useRouter();
  const text = `you're free`

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >        {text}       </div>

      {/* Header */}
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        <div className='flex space-x-4 items-center '>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div >
          
        <div className='flex space-x-4 items-center'>
          <p className='link'>Images</p>
          <p className='link'>Gmail</p>

          <ViewGridIcon className='h-10 w-10 p-2 rounded-full 
          hover:bg-gray-100 cursor-pointer'/>
          <Avatar url='https://coaching.papareact.com/ai9'/>
        </div>
        
      </header>

      <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
        <Image src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
        width={300}
        height={100} />

        <div className='flex w-full mt-3 hover:shadow-lg
        focus-within:shadow-lg max-w-md rounded-full border
        border-gray-200 px-5 py-3 items-center sm:max-w-xl 
        lg:max-w-2xl '>
          <SearchIcon className='h-5 mr-3 text-gray-500'/>
          <input 
            
            type='text' 
            className=' flex-grow focus:outline-none'  />
          <MicrophoneIcon className='h-5'/>
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 
        sm:space-y-0 sm:flex-row sm:space-x-4 ' >
          

        </div>
      </form>

      {/* footer */}
      
     
    </div>
  )
}
