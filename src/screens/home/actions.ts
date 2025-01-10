import getImage from "../../api/getImage"

export async function generateAnotherFood(func: React.Dispatch<React.SetStateAction<string>>, state: string) {
  try {
    const {image} = await getImage()
    func(image)
  } catch(error) {
    console.error(error)
  } 
}