import api from "../axios"

interface PostFormProps {
    name: string,
    email: string,
    birthday: string,
    height: number,
    weight: number,
    workoutsFrequency: string,
    goals: string,
    foodRestrictions: string,
    foodPreferences: string
}

interface PostFormResponse {
	id: number,
	name: string,
	email: string,
	birthday: string,
	weight: number,
	height: number,
	workoutsFrequency: string
	goals: string,
	foodRestrictions: string,
	foodPreferences: string
}

export async function postForm(dados: PostFormProps) {
    try {
        const response = await api.post<PostFormResponse>('/api/users', dados)
        console.log('Sucesso:', response.data)
        return response.data.id
    } catch (error: any) {
        console.error('Erro ao enviar:', error.response?.data)
    }
}