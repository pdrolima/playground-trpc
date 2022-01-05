import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react';
import {  Menu, Transition } from '@headlessui/react'
import { Fragment, ReactNode, useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { ChatAltIcon, ClipboardListIcon, CogIcon, CreditCardIcon, LogoutIcon, ShieldCheckIcon, SupportIcon, TicketIcon } from '@heroicons/react/outline'

export interface MyLinkProps {
    href: string
    children: React.ReactNode,
    className: string,
}

function MyLink({ href, children, ...props }: MyLinkProps) {
    return (
      <Link href={href}>
        <a {...props}>{children}</a>
      </Link>
    )
  }
export function UserDropdown() {

    const { data: session } = useSession();

    function classNames(...classes: any) {
        return classes.filter(Boolean).join(' ')
    }
    return (
            <Menu as="div" className="ml-3 relative">
            <div>
                <Menu.Button>
                   <BiUser className="text-red-500 w-6 h-6" />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
            <Menu.Items className="min-w-[330px] origin-top-right p-4 flex flex-col absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-opacity-5 focus:outline-none">
            <Menu.Item as="h2" className="text-2xl font-semibold px-4 mt-6 mb-4">
                Olá, { session?.user?.name }
            </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <MyLink
                        href="#"
                        className={classNames(active ? 'text-red-500' : 'text-gray-500', 'font-normal flex space-x-8 px-4 py-2 text-lg transition-all delay-50')}
                        >
                         <ChatAltIcon className="w-7 h-7"/>
                         <span>Chats</span>
                    </MyLink>
                )}
                </Menu.Item>

                <Menu.Item>
                {({ active }) => (
                    <MyLink
                        href="#"
                        className={classNames(active ? 'text-red-500' : 'text-gray-500', 'font-normal flex space-x-8 px-4 py-2 text-lg transition-all delay-50')}
                        >
                        <ClipboardListIcon className="w-7 h-7 font-normal"/>
                        <span>Pedidos</span>
                    </MyLink>
                )}
                </Menu.Item>

                <Menu.Item>
                {({ active }) => (
                    <MyLink
                        href="#"
                        className={classNames(active ? 'text-red-500' : 'text-gray-500', 'font-normal flex space-x-8 px-4 py-2 text-lg transition-all delay-50')}
                        >
                        <TicketIcon className="w-7 h-7 font-normal"/>
                        <span>Meus Cupons</span>
                    </MyLink>
                )}
                </Menu.Item>

                <Menu.Item>
                {({ active }) => (
                    <MyLink
                        href="#"
                        className={classNames(active ? 'text-red-500' : 'text-gray-500', 'font-normal flex space-x-8 px-4 py-2 text-lg transition-all delay-50')}
                        >
                        <CreditCardIcon className="w-7 h-7 font-normal"/>
                        <span>Pagamento</span>
                    </MyLink>
                )}
                </Menu.Item>

                <Menu.Item>
                {({ active }) => (
                    <MyLink
                        href="#"
                        className={classNames(active ? 'text-red-500' : 'text-gray-500', 'font-normal flex space-x-8 px-4 py-2 text-lg transition-all delay-50')}
                        >
                        <SupportIcon className="w-7 h-7 font-normal"/>
                        <span>Pagamento</span>
                    </MyLink>
                )}
                </Menu.Item>

                <Menu.Item>
                {({ active }) => (
                    <MyLink
                        href="#"
                        className={classNames(active ? 'text-red-500' : 'text-gray-500', 'font-normal flex space-x-8 px-4 py-2 text-lg transition-all delay-50')}
                        >
                        <CogIcon className="w-7 h-7 font-normal"/>
                        <span>Editar Dados</span>
                    </MyLink>
                )}
                </Menu.Item>

                <Menu.Item>
                {({ active }) => (
                    <MyLink
                        href="#"
                        className={classNames(active ? 'text-red-500' : 'text-gray-500', 'font-normal flex space-x-8 px-4 py-2 text-lg transition-all delay-50')}
                        >
                        <ShieldCheckIcon className="w-7 h-7 font-normal"/>
                        <span>Segurança</span>
                    </MyLink>
                )}
                </Menu.Item>

                <Menu.Item>
                {({ active }) => (
                    <button
                        onClick={() => signOut()}
                        className={classNames(active ? 'text-red-500' : 'text-gray-500', 'font-normal flex space-x-8 px-4 py-2 text-lg transition-all delay-50')}
                        >
                        <LogoutIcon className="w-7 h-7 font-normal"/>
                        <span>Sair</span>
                    </button>
                )}
                </Menu.Item>

            </Menu.Items>
            </Transition>
           </Menu>
    )
}
