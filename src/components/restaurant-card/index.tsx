import { Props } from "@types"

export function RestaurantCard({ children }: Props) {
    return (
        <div className="border border-gray-50 rounded flex space-x-5 items-center justify-center w-[445px] hover:bg-gray-100 transition-all cursor-pointer duration-100 p-4">
            {children}
        </div>
    )
}
