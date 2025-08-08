import { StyleSheet, Text, View } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

export function Footer() {
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        styles.footer,
        { backgroundColor: Colors[colorScheme ?? 'light'].tabBarBackground},
      ]}
    >
      <Text style={styles.returnHome}>Return Home</Text>
      <Text style={styles.footerMessage}>This app is under the MIT License.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 24,
    display: 'flex',
    flexDirection: 'row',
    gap: 24,
    width: '100%',
    justifyContent: 'space-around',
    position: 'absolute',
    paddingHorizontal: 24,
    bottom: 0,
    zIndex: 3,

  },
  returnHome: {
    fontSize: 16,
    color: '#fff'
  },
  footerMessage: {
    fontSize: 14,
    color: '#ddd'
  }
});
