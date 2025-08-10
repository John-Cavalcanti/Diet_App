import api from "../axios"

interface GetWeeklyDietProps {
  token: string | undefined
}

export async function getWeeklyDiet({ token }: GetWeeklyDietProps) {
  try {
    const response = await api.get("/api/weekly-diet/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data
  } catch (error) {

  }
}