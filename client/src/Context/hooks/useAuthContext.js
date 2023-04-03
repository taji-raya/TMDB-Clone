import { AuthContext } from "../AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    console.log(context)
    if (!context) {
        throw Error('bla bla bla error')
    }

    return context
}