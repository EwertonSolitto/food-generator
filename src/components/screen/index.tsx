import React from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';

import { styles } from './styles'
import { screenProps } from './model';

export default function CScreen({title, uri, buttonPress, disabled}: screenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title} Generator</Text>
      <Image style={styles.image} source={{uri: uri || undefined}} resizeMode='cover'/>
      
      <TouchableHighlight 
        style={styles.buttonContainer} 
        onPressOut={buttonPress} 
        disabled={disabled}
      >
        <Text style={styles.buttonText}>Generate food</Text>
      </TouchableHighlight>

    </View>
  );
}