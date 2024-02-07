"use client"
import ButtonComponent from '@/components/button'
import Head from 'next/head'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default  function HomeSlug() {
    const {id}  = useParams()

  return (
    <div>
    <Head>
      <title>Unicorn</title>
    </Head>
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-center mt-7"> Single Item List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 w-full max-w-6xl px-4">
          <div  className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-stretch hover:bg-gray-50 transition duration-150 ease-in-out transform hover:-translate-y-1">
            <h2 className="text-2xl font-semibold mb-2">Item {id}</h2>
            <p className="flex-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ut hic provident sunt perspiciatis itaque labore unde porro quasi asperiores! Iure explicabo officia repellendus nihil vero tempore laudantium voluptatum laborum?</p>
             <Link href={`/`}>
                 <ButtonComponent>Go Back</ButtonComponent>
             </Link>
          </div>  
      </div>
    </div>
  </div>
  )
}