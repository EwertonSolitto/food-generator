import getImage from "../../api/getImage"

export async function generateAnotherBurger(func: React.Dispatch<React.SetStateAction<string>>, state: string) {
  try {
    const {image} = await getImage("images/burger/")
    func(image)
  } catch(error) {
    console.error(error)
  } 
}