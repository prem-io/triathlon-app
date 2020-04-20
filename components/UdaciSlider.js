import React from 'react'
import { View, Slider, Text } from 'react-native'

export default function UdaciSlider({ value, max, step, unit, onChange }) {
  return (
    <View>
      <Slider
        minimumValue={0}
        maximumValue={max}
        value={value}
        step={step}
        onValueChange={onChange}
      />
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  )
}