import { AuthContext } from "../AuthContext";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw Error(Error)
    }
    return context
}

export const Authcheck = ({ children }) => {
    const navigate = useNavigate();
    const user = localStorage.getItem("user")
    const location = useLocation()
    useEffect(() => {
        function checking() {
            if (!user) {
                if (location.pathname === "/LoginPage" || location.pathname === "/RegisterPage") return

                navigate("/")
                return
            }
        }
        checking();
    }, [user, navigate, location.pathname])
    return (
        <div>{children}</div>
    )
}