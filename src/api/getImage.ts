import axios from "axios";

type TResponse = { image: string }

export default async function getImage(option?: string) {
  const response = await axios.get<TResponse>("https://foodish-api.com/api/" + (option || '')) || null
  return response.data
}