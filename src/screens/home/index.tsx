import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';

import { styles } from './styles';
import getImage from '../../api/getImage';
import { generateAnotherFood } from './actions';

export default function Home() {
  const [foodImage, setFoodImage] = useState('')
  const [cooldown, setCooldown] = useState(false)
  
  useEffect(() => {
    (async () => await generateAnotherFood(setFoodImage, foodImage))()
  }, [])

  async function generateFood() {
    setCooldown(true)
    await generateAnotherFood(setFoodImage, foodImage)
    setTimeout(() => setCooldown(false), 2000)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Generator</Text>
      <Image style={styles.image} source={{uri: foodImage}} resizeMode='cover'/>
      
      <TouchableHighlight 
        style={styles.buttonContainer} 
        onPressOut={generateFood} 
        disabled={cooldown}
      >
        <Text style={styles.buttonText}>Generate food</Text>
      </TouchableHighlight>

    </View>
  );
}