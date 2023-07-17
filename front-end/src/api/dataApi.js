import { axiosInstance } from "./config.js";

export async function getWords() {
  try {
    const check = await axiosInstance.get("/api/words");
    if (check?.data) return check.data;
  } catch (error) {
    return error;
  }
}


export async function getRank(score) {
  try {
    const check = await axiosInstance.post("/api/rank", score);
    if (check?.data) return check.data;
  } catch (error) {
    return error;
  }
}

