import { StyleSheet, Text, View, Pressable } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'

const menuOption = ({ item }) => {
  return (
    <Link href={item.href} asChild>
      <Pressable style={styles.optionRow}>
        {item.icon ? (
          <item.icon />
        ) : (
          <MaterialCommunityIcons name={item.iconName} size={26} color='gray' />
        )}

        <Text href={item.href} style={styles.optionText}>
          {item.name}
        </Text>
        <MaterialIcons
          name='keyboard-arrow-right'
          size={24}
          color='gray'
          style={{ marginLeft: 'auto' }}
          href={item.href}
        />
      </Pressable>
    </Link>
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
