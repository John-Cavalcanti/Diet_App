import api from "../axios";

interface GetUserProps {
    token: string
}

interface GetUserResponse {
    id: number,
	name: string,
	email: string,
	birthday: string,
	weight: number,
	height: number,
	workoutsFrequency: string,
	goals: string,
	foodRestrictions: string,
	foodPreferences: string,
	createdAt: string
}

export async function GetUser({ token }: GetUserProps) {
    try {
        const response = await api.get<GetUserResponse>('/api/users/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data.id
    } catch (error: any) {
        throw error
    }
}