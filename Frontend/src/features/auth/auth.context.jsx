import { createContext, useState } from "react";


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     const getAndSetUser = async () => {
    //         try {
    //             const data = await getMe();
    //             setUser(data.user);
    //         } catch (err) {
    //             if (err.response?.status !== 401) {
    //                 console.error("Get user error:", err);
    //             }
    //             setUser(null);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     getAndSetUser();
    // }, [setUser, setLoading]);

    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading }} >
            {children}
        </AuthContext.Provider>
    )
}