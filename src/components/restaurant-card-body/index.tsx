import { BsStarFill } from "react-icons/bs"
import { restaurants } from "../../../prisma/restaurants"

interface RestaurantCardBody {
    title: string;
    rate: number;
    logoUrl: string;
    type: string;
    deliveryFee: number;
}

export function RestaurantCardBody({ title, rate, logoUrl, type, deliveryFee }: RestaurantCardBody) {
    return (
        <>
            <div className="flex-shrink-0">
                <img src={logoUrl} alt={title} className="w-20 h-20 rounded-full border border-gray-300"/>
            </div>
            <div className="flex text-left w-0 flex-1 space ">
                <div className="block">
                <span className="text-base font-semibold">{ title}</span>
                    <div className="flex items-center justify-center text-sm pt-1">
                        <span className="text-yellow-600 font-bold text-md">
                            <BsStarFill className="inline-block w-[10px] h-[10px] mr-2" />
                             { rate / 100}
                        </span>
                        <span className="mr-2 ml-2">•</span>
                        <span className="text-xs">{type}</span>
                        <span className="mr-2 ml-2">•</span>
                        <span className="text-xs">1.2 km</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                        <span>27-37 min </span>
                        <span className="mr-1 ml-1">•</span>
                        <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(deliveryFee / 100)}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
