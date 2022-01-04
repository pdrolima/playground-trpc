import { BsSearch } from "react-icons/bs"

export function SearchInput({ ...props}) {
    return (
       <div className="relative flex-grow max-w-4xl">
          <div className="items-center inset-y-0 left-0 pl-3 flex pointer-events-none rounded-md absolute z-10">
                <BsSearch className="text-red-500" aria-hidden="true" />
            </div>
            <input type="search" className="bg-gray-100 focus:outline-none border-none rounded-lg w-full h-12 text-gray-600 p-4 px-10 m-0 relative" {...props} />
       </div>
    )
}
