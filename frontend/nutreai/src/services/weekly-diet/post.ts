import type { WeeklyDiet } from "../../@types/meal-plan"
import api from "../axios"

export interface postWeeklyDietProps {
    userId: number
}

export async function postWeeklyDiet(userId: postWeeklyDietProps) {
    try {
        const response = await api.post<WeeklyDiet>('/api/weekly-diet', userId)
        return response.data
    } catch (error: any) {
        console.error('Erro ao enviar:', error.response?.data)
    }
}