import { Props } from "@types";
import Link from "next/link";

interface NavItemProps extends Props {
    href: string,
    isActive: boolean,
}

export function NavItem({ children, href, isActive }: NavItemProps) {
  return (
    <li>
        <Link href="#">
            <a className={`font-sans text-sm ${isActive ? 'text-red-500' : 'text-neutral-500 hover:text-red-500'}`}>
                { children }
            </a>
        </Link>
    </li>
  );
}
