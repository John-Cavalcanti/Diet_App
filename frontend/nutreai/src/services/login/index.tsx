import api from "../axios";

interface PostLoginProps {
    email: string,
    password: string
}

interface PostLoginResponse {
    access_token: string
}

export async function PostLogin(data: PostLoginProps){
    try {
        const response = await api.post<PostLoginResponse>('api/auth/login', data)
        return response.data.access_token
    } catch (error: any) {
        console.log('Erro ao fazer login', error.response?.data)
        throw error
    }
}