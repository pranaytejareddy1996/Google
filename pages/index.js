import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import {ViewGridIcon , MicrophoneIcon} from '@heroicons/react/solid'
import {SearchIcon} from '@heroicons/react/outline'
import Footer from '../components/Footer'
import { useRef } from 'react'
import {useRouter} from 'next/router';

export default function Home() {
  // const router = useRouter();
  // const searchInputRef = useRef(null);

  // const search = (e) => {
  //   e.preventDefault();
  //   const term = searchInputRef.current.value;

  //   if(!term) return;

  //   router.push(`/search?term=${term}`);

  // };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        <div className='flex space-x-4 items-center '>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div >
          
        <div className='flex space-x-4 items-center'>
          <p className='link'>Images</p>
          <p className='link'>Gmail</p>

          {/* <ViewGridIcon className='h-10 w-10 p-2 rounded-full 
          hover:bg-gray-100 cursor-pointer'/>
          <Avatar url='https://coaching.papareact.com/ai9'/> */}
        </div>
        
      </header>

      
     
    </div>
  )
}
