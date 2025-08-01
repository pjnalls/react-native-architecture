import { Image, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Footer } from '@/components/Footer';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/culture.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Contact</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#999'
  },
  image: {
    position: 'absolute',
    opacity: 0.25,
  },
  description: {
    fontSize: 20,
    paddingHorizontal: 16,
  }
});