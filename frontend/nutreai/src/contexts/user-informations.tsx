import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { GetUser } from "../services/get-user"
interface UsersInformationsContextProps {
    token: string | undefined
    id: number | undefined
    createUser: (id: string) => void
}

const UsersInformationsContext = createContext({} as UsersInformationsContextProps)

export function UsersInformationsProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useState<string | undefined>("")
    const [id, setId] = useState<number | undefined>(0)

    function createUser(token: string) {
        setToken(token)
    }

    async function getId(){
        if(token != undefined) {
            const user = await GetUser({token})
            setId(user)
        }
    }

    useEffect(() => {
        getId()
    }, [token])

    return (
        <UsersInformationsContext.Provider value={{ id, token, createUser }}>
            { children }
        </UsersInformationsContext.Provider>
    )
}

export const useUsersInformations = () => useContext(UsersInformationsContext)