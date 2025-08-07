import type { WeeklyDiet } from "../../@types/meal-plan"
import api from "../axios"

interface PostWeeklyDietProps {
    id: number | undefined
    token: string | undefined
}

interface PostWeeklyDietResponse {
    id: number
    createdAt: string
    updatedAt: string
    userId: number
    meals: WeeklyDiet
}

export async function postWeeklyDiet({ id, token }: PostWeeklyDietProps) {
    console.log(token)
    console.log(id)
    try {
        const response = await api.post<PostWeeklyDietResponse>(
          '/api/weekly-diet', 
          { id },
          {
            headers: {
                Authorization: `Bearer ${token}`
            }
          }
      )
        console.log(response.data)
        console.log(response.headers)
        console.log(response.status)
        return response.data.meals
    } catch (error: any) {
        console.error('Erro ao enviar:', error.response?.data)
    }
}