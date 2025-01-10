import { GestureResponderEvent } from "react-native"

export type screenProps = {
  title: string, 
  uri: string, 
  buttonPress: ((event: GestureResponderEvent) => void) | undefined, 
  disabled: boolean
}