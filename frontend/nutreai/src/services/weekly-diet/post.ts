import type { WeeklyDiet } from "../../@types/meal-plan"
import { useUsersInformations } from "../../contexts/user-informations"
import api from "../axios"

export async function postWeeklyDiet() {
    const { id, token } = useUsersInformations()
    try {
        const response = await api.post<WeeklyDiet>('/api/weekly-diet', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            body : {
                id
            }
        })
        return response.data
    } catch (error: any) {
        console.error('Erro ao enviar:', error.response?.data)
    }
}