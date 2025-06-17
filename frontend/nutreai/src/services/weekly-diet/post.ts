import type { WeeklyDiet } from "../../@types/meal-plan"
import api from "../axios"

interface postWeekltDietProps {
    userId: number
}

export async function postWeeklyDiet(userId: postWeekltDietProps) {
    console.log('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB')
    console.log()
    try {
        const response = await api.post<WeeklyDiet>('/api/weekly-diet', userId)
        console.log('Sucesso:', response.data)
        return response.data
    } catch (error: any) {
        console.error('Erro ao enviar:', error.response?.data)
    }
}