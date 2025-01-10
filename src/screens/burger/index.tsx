import React, { useEffect, useState } from 'react';

import { generateAnotherBurger } from './actions';
import CScreen from '../../components/screen';

export default function Burger() {
  const [foodImage, setFoodImage] = useState('')
  const [cooldown, setCooldown] = useState(false)
  
  useEffect(() => {
    (async () => await generateFood())()
  }, [])

  async function generateFood() {
    setCooldown(true)
    await generateAnotherBurger(setFoodImage, foodImage)
    setTimeout(() => setCooldown(false), 2000)
  }

  return (
    <CScreen 
      title='Burger'
      uri={foodImage}
      buttonPress={generateFood}
      disabled={cooldown}
    />
  );
}