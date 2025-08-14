import { Image, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Footer } from '@/components/Footer';
import { i18n } from '@/i18n/locales';
import { useAppSelector } from '@/redux/hooks';

export default function ServicesScreen() {
  const locale = useAppSelector((state) => state.localizer.locale);
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/culture.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>{i18n[locale].tabLabels.services}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.description}>{i18n[locale].placeholderText}</Text>
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
    backgroundColor: '#999',
  },
  image: {
    position: 'absolute',
    opacity: 0.25,
  },
  description: {
    fontSize: 20,
    paddingHorizontal: 16,
  },
});
