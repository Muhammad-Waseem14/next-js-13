import Image from 'next/image'
import Link from 'next/link'
import ProductsCard from './components/ProductsCard'

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href='users'>users</Link>
      <ProductsCard/>
    </main>
  )
}
