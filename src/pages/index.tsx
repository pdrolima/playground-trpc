import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { DeliveryAddressModal } from '../components/delivery-address-modal'
import { Header } from '../components/header'
import { trpc } from '../utils/trpc'

const Home: NextPage = () => {

  const hello = trpc.useQuery(['hello', { text: 'I am tRPC' }]);
  const [isDeliveryAddressModalOpen, setIsDeliveryAddressModalOpen] = useState(false);

  if (!hello.data) {
      return <div>Loading...</div>
  }

  function handleOpenDeliveryAddressModal() {
    setIsDeliveryAddressModalOpen(true);
  }

  function handleCloseDeliveryAddressModal() {
    setIsDeliveryAddressModalOpen(false);
  }

  return (
    <>
      <Header onOpenModal={handleOpenDeliveryAddressModal}/>
      <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold underline mt-4">
                Hey 👋,  {hello.data.greeting}!
            </h1>
        </div>
        <DeliveryAddressModal isOpen={isDeliveryAddressModalOpen} onRequestClose={handleCloseDeliveryAddressModal} />
    </>
  )
}

export default Home
