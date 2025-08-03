import type { UserInfo } from "../../@types/user-info";
import api from "../axios";

export async function getUserInfo() {
  try {
    const response = await api.get<UserInfo>("api/users/me");
    return response.data;
  } catch (error: any) {
    console.error(
      "Erro ao buscar informações sobre usuário: ",
      error.response?.data
    );
    throw error;
  }
}
