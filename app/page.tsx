import Head from 'next/head'
import { TItem } from './types'
import ButtonComponent from '@/components/button'
import Link from 'next/link'

export default  async function Home() {
  const data = await getData()
  return (
    <div>
    <Head>
      <title>Unicorn</title>
    </Head>
    <main className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-center mt-7">Home Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl px-4">
        {data.map((item: TItem) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-stretch hover:bg-gray-50 transition duration-150 ease-in-out transform hover:-translate-y-1">
            <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
            <p className="flex-1">{item.description}</p>
             <Link href={`/${item.id}`}>
                 <ButtonComponent>Read More</ButtonComponent>
             </Link>
          </div>  
        ))}
      </div>
    </main>
  </div>
  )
}

async function getData() {
  const res = await fetch('http://localhost:3000/data.json')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}