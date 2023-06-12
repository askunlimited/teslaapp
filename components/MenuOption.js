import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

const menuOption = ({ item }) => {
  return (
    <View style={styles.optionRow}>
      <MaterialCommunityIcons name={item.iconName} size={26} color='gray' />
      <Text style={styles.optionText}>{item.name}</Text>
      <MaterialIcons
        name='keyboard-arrow-right'
        size={24}
        color='gray'
        style={{ marginLeft: 'auto' }}
        href={item.href}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  optionText: {
    fontSize: 18,
    color: '#eee',
    marginLeft: 10,
  },
})

export default menuOption
