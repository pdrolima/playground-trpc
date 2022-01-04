import { useSession, signIn } from "next-auth/react";
import { BiUser, BiArrowFromLeft } from "react-icons/bi";

export function SignIn() {

    const { data: session } = useSession();

    return !session ? (
        <button type="button" onClick={() => signIn('github')}>
             <BiArrowFromLeft className="text-red-500 w-6 h-6"/>
        </button>
    ) : (
       <button type="button">
            <BiUser className="text-red-500 w-6 h-6"/>
       </button>
    );
}
