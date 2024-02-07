import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
              <Link className='hover:text-blue-500' href={"/"}>Home</Link>
              <Link className= ' hover:text-blue-500 ml-5' href={"/about"}>About</Link>
        </div>
      </nav>
    </header>
  )
}
