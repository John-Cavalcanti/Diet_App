import type { WeeklyDiet } from "../../@types/meal-plan"
import api from "../axios"

interface PostWeeklyDietProps {
    id: number | undefined
    token: string | undefined
}

export async function postWeeklyDiet({ id, token }: PostWeeklyDietProps) {
    console.log(token)
    console.log(id)
    try {
        const response = await api.post<WeeklyDiet>('/api/weekly-diet', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            body : {
                id
            }
        })
        console.log(response.data)
        console.log(response.headers)
        console.log(response.status)
        return response.data
    } catch (error: any) {
        console.error('Erro ao enviar:', error.response?.data)
    }
}