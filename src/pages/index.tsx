import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/header'
import { trpc } from '../utils/trpc'

const Home: NextPage = () => {

  const hello = trpc.useQuery(['hello', { text: 'I am tRPC' }]);

  if (!hello.data) {
      return <div>Loading...</div>
  }

  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold underline mt-4">
                Hey 👋,  {hello.data.greeting}!
            </h1>
        </div>
    </>
  )
}

export default Home
