import Link from 'next/link'
import { GrReactjs } from 'react-icons/gr'
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full h-full fixed'>
      <div style={{
        zIndex: -1,
        position: 'fixed',
        width: "100%",
        height: "100%",
        backgroundRepeat: 'no-repeat',
      }}>
        <Image
          src="/bg1.png"
          alt='Image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='flex justify-between items-center p-4 text-gray-200'>
        <div className='flex'>
          <GrReactjs size={25}></GrReactjs>
          <h2 className="ml-2 text-xl font-semibold font-serif">Project Next JS</h2>
        </div>
        <div className='flex'>
          <Link className="ml-4 text-md font-serif hover:text-gray-400" href="/profile">Profile</Link>
          <Link className="ml-4 text-md font-serif hover:text-gray-400" href="https://open.spotify.com/user/rs5d1zlyi222f2wxctgqthn5z?si=2729c75f31824a52">Playlist</Link>
          <Link className="ml-4 text-md font-serif hover:text-gray-400" href="/collection">Collections</Link>
        </div>
      </div>
      <hr></hr>
      <div className='text-center mt-12 px-28 space-y-60'>
        <div className='space-y-2'>
          <h1 className='text-4xl text-gray-200 font-mono font-semibold'>Welcome to My Page</h1>
          <p className='font-mono text-gray-100 text-sm'>Hi everybody, this is my first Next JS project</p>
        </div>
        <div className='space-y-2'>
          <p className='text-xl text-gray-200 font-serif font-semibold'>Thank You</p>
          <p className='font-mono text-gray-100 text-sm'>Follow me on</p>
        </div>
      </div>
      <div className='space-x-4 text-gray-200 flex justify-center items-center mt-4'>
        <div className='flex'>
          <Link className='space-x-1 font-serif hover:text-blue-400 flex' href="https://instagram.com/ardhaa.pdf">
            <BsInstagram size={20}></BsInstagram>
            <p>Instagram</p>
          </Link>
        </div>
        <div className='flex'>
          <Link className='space-x-1 font-serif hover:text-blue-400 flex' href="https://www.linkedin.com/in/ardhaa/">
            <BsLinkedin size={20}></BsLinkedin>
            <p>LinkedIn</p>
          </Link>
        </div>
        <div className='flex'>
          <Link className='space-x-1 font-serif hover:text-blue-400 flex' href="https://github.com/milkinZ">
            <BsGithub size={20}></BsGithub>
            <p>Github</p>
          </Link>
        </div>
      </div>
    </div>
  )
}