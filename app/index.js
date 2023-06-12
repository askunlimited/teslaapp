import { Image, StyleSheet, Text, View, FlatList } from 'react-native'

import Car from '../assets/images/car.png'
import menuOption from '../components/MenuOption'
import Header from '../components/Header'

import menuOptions from '../assets/menuOptions'
import Controls from '../components/Controls'

export default function Page() {
  return (
    <View style={styles.container}>
      {/* header component of the app  */}
      <Header />
      {/* Main Car Image */}
      <Image source={Car} resizeMode='contain' style={styles.image} />

      {/* Controls */}

      {/* <Controls /> */}

      {/* List of menu options */}
      <FlatList
        data={menuOptions}
        showsVerticalScrollIndicator={false}
        renderItem={menuOption}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={Controls}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#161818',
  },

  image: {
    width: '100%',
    height: 300,
  },
})
