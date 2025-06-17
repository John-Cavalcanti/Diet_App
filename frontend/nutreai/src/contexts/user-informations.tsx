import { createContext, useContext, useState, type ReactNode } from "react"
interface UsersInformationsContextProps {
    id: number | undefined
    createUser: (id: number) => void
}

const UsersInformationsContext = createContext({} as UsersInformationsContextProps)

export function UsersInformationsProvider({ children }: { children: ReactNode }) {
    const [id, setId] = useState<number | undefined>(0)

    function createUser(id: number) {
        setId(id)
    }

    return (
        <UsersInformationsContext.Provider value={{ id, createUser }}>
            { children }
        </UsersInformationsContext.Provider>
    )
}

export const useUsersInformations = () => useContext(UsersInformationsContext)