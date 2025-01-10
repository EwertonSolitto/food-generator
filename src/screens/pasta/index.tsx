import React, { useEffect, useState } from 'react';

import { generateAnotherPasta } from './actions';
import CScreen from '../../components/screen';

export default function Pasta() {
  const [foodImage, setFoodImage] = useState('')
  const [cooldown, setCooldown] = useState(false)
  
  useEffect(() => {
    (async () => await generateFood())()
  }, [])

  async function generateFood() {
    setCooldown(true)
    await generateAnotherPasta(setFoodImage, foodImage)
    setTimeout(() => setCooldown(false), 2000)
  }

  return (
    <CScreen 
      title='Pasta'
      uri={foodImage}
      buttonPress={generateFood}
      disabled={cooldown}
    />
  );
}