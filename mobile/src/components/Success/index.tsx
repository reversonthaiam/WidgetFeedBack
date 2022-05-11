import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'

import successImg from '../../assets/success.png'
import { Copyright } from '../Copyright'

import { styles } from './styles'

interface Props {
  onSendAnotherFeedback: () => void
}

export function Success({ onSendAnotherFeedback }: Props) {
  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.image}></Image>
      <Text style={styles.title}>Agradecemos o feedback!</Text>

      <TouchableOpacity onPress={onSendAnotherFeedback} style={styles.button}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>

      <Copyright></Copyright>
    </View>
  )
}
