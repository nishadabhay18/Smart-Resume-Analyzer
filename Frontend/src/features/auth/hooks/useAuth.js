import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getMe } from "../services/auth.api";
import { toast } from "react-toastify";


export const useAuth = () => {

    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    const { user, setUser, loading, setLoading } = context

    // const handleLogin = async ({ email, password }) => {
    //     setLoading(true)
    //     try {
    //         const data = await login({ email, password })
    //         setUser(data.user)
    //     } catch (err) {
    //         toast.error("Not valid")
    //         console.log('Error in useAuth handleLogin', err)
    //     } finally {
    //         setLoading(false)
    //     }
    // }

    const handleLogin = async ({ email, password }) => {
        setLoading(true)

        try {
            const data = await login({ email, password })
            setUser(data.user)
            return true
        } catch (err) {
            toast.error(err.response?.data?.message || "Invalid email or password")
            return false
        } finally {
            setLoading(false)
        }
    }

    const handleRegister = async ({ username, email, password }) => {
        setLoading(true)
        try {
            const data = await register({ username, email, password })
            setUser(data.user)
            return true
        } catch (err) {
            toast.error(err.response?.data?.message || "User Already Exists")
            return false
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = async () => {
        setLoading(true)
        try {
            const data = await logout()
            setUser(null)
            toast.success("Logged out successfully")
            return true
        } catch (err) {
            toast.error("Logout failed")
            return false
        } finally {
            setLoading(false)
        }
    }


    // for hydration- after refreshing we reach to intial state
    useEffect(() => {
        const getAndSetUser = async () => {
            try {
                const data = await getMe();
                setUser(data.user);
            } catch (err) {
                if (err.response?.status !== 401) {
                    console.error("Get user error:", err);
                }
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        getAndSetUser();
    }, [setUser, setLoading]);

    return { user, loading, handleRegister, handleLogin, handleLogout }
}
