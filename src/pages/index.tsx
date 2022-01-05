import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import { DeliveryAddressModal } from '../components/delivery-address-modal'
import { Header } from '../components/header'
import { trpc } from '../utils/trpc'
import { BsStarFill } from 'react-icons/bs'
import { RestaurantCard } from '../components/restaurant-card'
import { RestaurantCardBody } from '../components/restaurant-card-body'

const Home: NextPage = () => {

  const restaurants = trpc.useQuery(['getRestaurants']);
  const [isDeliveryAddressModalOpen, setIsDeliveryAddressModalOpen] = useState(false);

  if (!restaurants.data) {
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
       <main className="flex items-center justify-center mx-auto">
        <div className="mt-40">
            <section>
                <h2 className="text-lg font-bold mb-5">Famosos no iFood</h2>
                <div className="flex items-start justify-start space-x-5 mx-auto">
                    {restaurants.data.map(restaurant => (
                        <>
                            <div key={restaurant.id} className="p-1">
                                <img src={restaurant.logoUrl} alt={restaurant.title} className="w-20 max-w-[20rem] mx-auto h-20 rounded-full border border-gray-300"/>
                                <span className="block text-xs text-ellipsis py-4 text-center">{restaurant.title}</span>
                            </div>
                        </>
                    ))}
                </div>
            </section>
            <section className="mt-10">
                <h2 className="text-lg font-bold mb-5">Lojas</h2>
                <div className="grid grid-cols-3 gap-5 mx-auto">
                    {restaurants.data.map(restaurant => (
                        <RestaurantCard key={restaurant.id}>
                            <RestaurantCardBody
                                title={restaurant.title}
                                rate={restaurant.rate}
                                logoUrl={restaurant.logoUrl}
                                type={restaurant.foodType}
                                deliveryFee={restaurant.deliveryFee ?? 0}
                            />
                        </RestaurantCard>
                    ))}
                </div>
            </section>
        </div>
       </main>
      <DeliveryAddressModal isOpen={isDeliveryAddressModalOpen} onRequestClose={handleCloseDeliveryAddressModal} />
    </>
  )
}

export default Home
