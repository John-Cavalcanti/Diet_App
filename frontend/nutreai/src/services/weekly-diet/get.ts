import api from "../axios";

export async function getWeeklyDiet() {
  const response = await api.get("/api/weekly-diet/me");
  return response.data;
}