import { Props } from "@types";

export default function Nav({ children }: Props) {
    return (
      <nav>
        <ul className="flex justify-between items-center space-x-5">
          {children}
        </ul>
      </nav>
    )
  }
