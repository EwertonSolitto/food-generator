import getImage from "../../api/getImage"

export async function generateAnotherPasta(func: React.Dispatch<React.SetStateAction<string>>, state: string) {
  try {
    const {image} = await getImage("images/pasta/")
    func(image)
  } catch(error) {
    console.error(error)
  } 
}