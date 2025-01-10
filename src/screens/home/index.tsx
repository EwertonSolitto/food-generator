import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';

import { styles } from './styles';
import getImage from '../../api/getImage';

export default function Home() {
  const [foodImage, setFoodImage] = useState('')
  
  useEffect(() => {
    (async () => {
      const {image} = await getImage()
      if(image) {
        setFoodImage(image)
      }
    })()
  }, [])


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Generator</Text>
      <Image style={styles.image} source={{uri: foodImage}} resizeMode='cover'/>
      
      <TouchableHighlight style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Generate food</Text>
      </TouchableHighlight>

    </View>
  );
}