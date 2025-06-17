import api from "../axios"

interface Meal {
    tipoRefeicao: string,
    descricao: string,
    calorias: number,
    carboidratos: number,
    proteinas: number,
    gorduras: number
}

interface PostWeeklyDietResponse {
    segunda: Meal[],
    terca: Meal[],
    quarta: Meal[],
    quinta: Meal[],
    sexta: Meal[],
    sabado: Meal[],
    domingo: Meal[]
}

export async function postWeeklyDiet(userId: number) {
    try {
        const response = await api.post<PostWeeklyDietResponse>('/api/weekly-diet', userId)
        console.log('Sucesso:', response.data)
        return response.data
    } catch (error: any) {
        console.error('Erro ao enviar:', error.response?.data)
    }
}