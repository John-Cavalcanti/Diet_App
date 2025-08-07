import { wait } from "../../utils/wait"
import api from "../axios"

interface GetWeeklyDietProps {
  token: string | undefined
}

export async function getWeeklyDiet({ token }: GetWeeklyDietProps) {
  try {
    // if(token == undefined) {
    //   await wait(1000)
    // }
    const response = await api.get("/api/weekly-diet/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data
  } catch (error) {

  }
}