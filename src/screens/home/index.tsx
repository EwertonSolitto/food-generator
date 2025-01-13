import React, { useEffect, useState } from 'react';

import { generateAnotherFood } from './actions';
import CScreen from '../../components/screen';

export default function Home() {
  const [foodImage, setFoodImage] = useState('')
  const [cooldown, setCooldown] = useState(false)
  
  useEffect(() => {
    (async () => await generateFood())()
  }, [])

  async function generateFood() {
    setCooldown(true)
    await generateAnotherFood(setFoodImage, foodImage)
    setTimeout(() => setCooldown(false), 2000)
  }

  return (
    <CScreen 
      title='🍲 Food'
      uri={foodImage}
      buttonPress={generateFood}
      disabled={cooldown}
    />
  );
}