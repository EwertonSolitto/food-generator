import getImage from "../../api/getImage"

export async function generateAnotherPizza(func: React.Dispatch<React.SetStateAction<string>>, state: string) {
  try {
    const {image} = await getImage("images/pizza/")
    func(image)
  } catch(error) {
    console.error(error)
  } 
}