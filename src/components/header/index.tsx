import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { BsHandbag } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

export function Header() {
    return (
        <header className="bg-white h-20 border-b border-gray-200">
            <div className="flex items-center max-w-full w-full mx-auto h-20 p-8">
                <div className="mr-10">
                    <svg width="56" height="36" viewBox="0 0 80 43" className="fill-red-500" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 24.258h6.09L9.498 7.472h-6.09L0 24.258ZM3.947 4.836h6.087L11.016 0H4.922l-.975 4.836ZM8.498 28.985h6.09l3.695-18.167h4.444l.7-3.346h-4.482l.154-.776c.286-1.431.751-3.096 3.047-3.096 1.361 0 2.665.148 3.93.68L26.77.744A13.22 13.22 0 0 0 22.381 0c-4.894 0-8.265 2.914-9.499 7.472h-2.114l-.662 3.346h2.084L8.498 28.985Z">
                        </path>
                        <path
                            d="M27.79 24.633c7.19 0 12.18-6.569 12.18-11.927 0-3.902-3.688-5.608-7.195-5.608-7.89 0-12.183 7.063-12.183 11.927 0 3.902 3.726 5.608 7.198 5.608ZM47 24.633c7.192 0 12.181-6.569 12.181-11.927 0-3.902-3.696-5.608-7.199-5.608-7.886 0-12.186 7.063-12.186 11.927 0 3.902 3.73 5.608 7.202 5.608M69.082 24.258h6.055L80 .374h-6.09l-1.451 7.097a12.51 12.51 0 0 0-2.46-.281c-5.966 0-11.391 7.588-11.391 13.011 0 2.231 1.45 4.43 3.912 4.43 3.5 0 5.921-1.712 6.932-3.317h.378l-.748 2.944ZM50.322 36.91c-4.454 3.792-10.408 5.739-16.879 5.337-8.16-.502-13.816-6.82-14.954-13.227h.387c1.836 4.091 6.304 7.869 11.911 8.49 5.475.604 12.184-1.87 15.866-5.402l-4.13-3.124 12.263.036-2.639 12.983-1.825-5.093Z">
                        </path>
                    </svg>
                </div>
                <nav>
                    <ul className="flex justify-between items-center">
                        <li>
                           <Link href="#">
                               <a className="font-sans font-medium text-sm text-red-500 ml-">Restaurante</a>
                           </Link>
                        </li>
                        <li>
                           <Link href="#">
                               <a className="font-sans font-medium text-sm text-gray-300 ml-4 hover:text-red-500">Mercado</a>
                           </Link>
                        </li>
                        <li>
                           <Link href="#">
                               <a className="font-sans font-medium text-sm text-gray-300 ml-4 hover:text-red-500">Bebidas</a>
                           </Link>
                        </li>
                        <li>
                           <Link href="#">
                               <a className="font-sans font-medium text-sm text-gray-300 ml-4 hover:text-red-500">Farmácia</a>
                           </Link>
                        </li>
                        <li>
                           <Link href="#">
                               <a className="font-sans font-medium text-sm text-gray-300 ml-4 hover:text-red-500">Express</a>
                           </Link>
                        </li>
                        <li>
                           <Link href="#">
                               <a className="font-sans font-medium text-sm text-gray-300 ml-4 hover:text-red-500">Pets</a>
                           </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex flex-grow relative ml-6 max-w-4xl">
                    <input type="search" className="bg-gray-100 focus:outline-none border-none shadow w-full h-12 text-gray-600 p-4 m-0 relative"
                    placeholder="Busque por item ou loja" />
                </div>
                <div className="flex items-center justify-center">
                    <div className="cursor-pointer ml-6">
                        <span className="uppercase text-sm text-neutral-300">entregar em</span>
                        <div className="flex items-center justify-center">
                            <GrLocation className="text-sm"/>
                            <span className="block font-bold text-neutral-600 text-sm">
                                Avenida dos Autonomistas, 1496
                            </span>
                            <MdKeyboardArrowDown className="text-red-500 h-6 w-6"></MdKeyboardArrowDown>
                        </div>
                    </div>
                    <div className="flex items-center justify-center ml-10 mt-1">
                        <FaRegUser className="text-red-500 w-6 h-6"/>
                        <BsHandbag className="text-red-500 w-6 font-semibold h-6 ml-6" />
                    </div>
                </div>
            </div>
        </header>
    )
}
