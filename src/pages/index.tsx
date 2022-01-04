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
                <h2 className="text-lg font-bold mb-5">Lojas</h2>
                <div className="grid grid-cols-3 gap-5 mx-auto">
                    {restaurants.data.map(restaurant => (
                        <RestaurantCard key={restaurant.id}>
                            <RestaurantCardBody
                                title={restaurant.title}
                                rate={restaurant.rate}
                                logoUrl={restaurant.logoUrl}
                                type={restaurant.foodType}
                                deliveryFee={restaurant.deliveryFee}
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
