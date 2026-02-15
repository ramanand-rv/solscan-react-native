import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SwapScreen } from '../../components/SwapScreen'

export default function swap() {
  return (
    <SafeAreaView>
      <SwapScreen />
    </SafeAreaView>
  )
}