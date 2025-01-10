import React, { useEffect, useState } from 'react';

import { generateAnotherPizza } from './actions';
import CScreen from '../../components/screen';

export default function Pizza() {
  const [foodImage, setFoodImage] = useState('')
  const [cooldown, setCooldown] = useState(false)
  
  useEffect(() => {
    (async () => await generateFood())()
  }, [])

  async function generateFood() {
    setCooldown(true)
    await generateAnotherPizza(setFoodImage, foodImage)
    setTimeout(() => setCooldown(false), 2000)
  }

  return (
    <CScreen 
      title='Pizza'
      uri={foodImage}
      buttonPress={generateFood}
      disabled={cooldown}
    />
  );
}