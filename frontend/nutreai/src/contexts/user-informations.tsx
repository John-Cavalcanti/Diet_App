import { createContext, useContext, useState, type ReactNode } from "react"
interface UsersInformationsContextProps {
    id: number | undefined
    createUser: (id: number) => void
}

const UsersInformationsContext = createContext({} as UsersInformationsContextProps)

export function UsersInformationsProvider({ children }: { children: ReactNode }) {
    const id: number | undefined = undefined

    function createUser(id: number) {
        id = id
    }

    return (
        <UsersInformationsContext.Provider value={{ id, createUser }}>
            { children }
        </UsersInformationsContext.Provider>
    )
}

export const useUsersInformations = () => useContext(UsersInformationsContext)