import { Text, View, StyleSheet, Image, Pressable } from 'react-native'
import {
  Ionicons,
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
} from '@expo/vector-icons'

import climate from '../assets/images/climate.png'
import { useRouter } from 'expo-router'
import { useState } from 'react'

const ClimateScreen = () => {
  const [temprature, setTemprature] = useState(72)

  const [on, setOn] = useState()

  const [vent, setVent] = useState(false)

  const router = useRouter()

  return (
    <View style={styles.container}>
      <Image source={climate} style={styles.image} resizeMode='cover' />

      <Pressable onPress={() => router.back()} style={styles.back}>
        <Ionicons name='chevron-back' size={24} color='white' />
      </Pressable>
      <View style={styles.footer}>
        <Text style={styles.temprature}>Interior 74°F - Exterior 66°F</Text>

        <View style={styles.footercontrols}>
          <Pressable onPress={() => setOn(!on)} style={styles.iconContainer}>
            <FontAwesome
              name='power-off'
              size={42}
              color={on ? 'white' : 'gray'}
            />
            <Text style={styles.iconButtonText}>{on ? 'On' : 'OFF'}</Text>
          </Pressable>

          <View style={styles.tempContainer}>
            <Entypo
              name='chevron-left'
              size={36}
              color='gray'
              onPress={() => setTemprature(temprature - 1)}
            />
            <Text style={styles.tempratureText}>{temprature}°</Text>
            <Entypo
              name='chevron-right'
              size={36}
              color='gray'
              onPress={() => setTemprature(temprature + 1)}
            />
          </View>

          <Pressable
            onPress={() => setVent(!vent)}
            style={styles.iconContainer}
          >
            <MaterialCommunityIcons
              name='car-door'
              size={42}
              color={vent ? 'white' : 'gray'}
            />
            <Text style={styles.iconButtonText}>{vent ? 'Vent' : 'Cool'}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161818',
  },
  image: {
    width: '100%',
    height: '65%',
  },
  back: {
    position: 'absolute',
    top: 50,
    left: 25,
    backgroundColor: '#2f3030',
    padding: 10,
    borderRadius: 5,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    // padding: 12,
    marginBottom: 50,
    marginTop: 'auto',
  },
  temprature: {
    alignSelf: 'center',
    color: 'gray',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
  },
  footercontrols: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  tempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tempratureText: {
    fontSize: 48,
    fontWeight: '300',
    color: 'white',
    marginHorizontal: 20,
  },
})

export default ClimateScreen
