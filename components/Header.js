import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>My Model S</Text>
        <Text style={styles.subtitle}>Parked</Text>
      </View>
      <FontAwesome name='user-circle-o' size={36} color='gray' />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#eee',
    marginBottom: 8,
  },
  subtitle: {
    color: 'gray',
    fontWeight: '500',
  },
})

export default Header
