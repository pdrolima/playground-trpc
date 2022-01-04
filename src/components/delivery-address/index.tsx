import { MdKeyboardArrowDown } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
interface DeliveryAddressProps {
    onOpenModal: () => void;
  }

export function DeliveryAddress({ onOpenModal }: DeliveryAddressProps) {
   return (
    <div className="flex items-center justify-center">
        <div className="ml-6">
            <span className="uppercase text-sm text-neutral-300">entregar em</span>
            <button className="flex items-center justify-center space-x-1" onClick={onOpenModal}>
                <GrLocation className="text-sm"/>
                <span className="block font-bold text-neutral-600 text-sm">
                    Avenida dos Autonomistas, 1496
                </span>
                <MdKeyboardArrowDown className="text-red-500 h-6 w-6"></MdKeyboardArrowDown>
            </button>
        </div>
    </div>
   )
}
