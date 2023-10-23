import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import api from "../Api/config";

interface defaultAuthContextProp {
    token?: string | null;
    setToken?: (newToken: string) => void;
    isLoggedIn?:() => boolean;
}

const AuthContext = createContext<defaultAuthContextProp>({});


interface AuthProviderProps {
    children: React.ReactNode;
}
const AuthProvider = ({ children }: AuthProviderProps) => {
    const [token, setToken_] = useState<string | null>(localStorage.getItem("token"));

    const setToken = (newToken: string) => {
        setToken_(newToken);
    };

    const isLoggedIn = useCallback(() => {
        if (token){
            return true;
        } 
        return false;
    },[token])


    useEffect(() => {
        if (token) {
            api.defaults.headers.common["Authorization"] = "Bearer " + token;
            localStorage.setItem("token", token);
        } else {
            delete api.defaults.headers.common["Authorization"];
           localStorage.removeItem("token");
        }
    }, [token]);

    const contextValue = useMemo(
        () => ({
            token,
            setToken,
            isLoggedIn
        }),
        [token, isLoggedIn]
    );

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;