import { useState } from 'react';
import { Button, Image, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Footer } from '@/components/Footer';
import Card from '@/components/Card';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import Modal from '@/components/Modal';
import { PLACEHOLDER_TEXT } from '@/constants/Text';

export default function DashboardScreen() {
  const theme = useColorScheme() ?? 'light';
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleOnPress = () => {
    setShowMore(!showMore);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/culture.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Dashboard</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {!showMore && <Card title="January">
        <Text style={styles.description}>
          {PLACEHOLDER_TEXT.length > 125 ? `${PLACEHOLDER_TEXT.slice(0, 121)}...` : `${PLACEHOLDER_TEXT}`}
        </Text>
        <Button
          title="Show More"
          color={Colors[theme].buttonText}
          onPress={handleOnPress}
        />
      </Card>}
      {showMore && (
        <Modal title="January Details" setShowMore={setShowMore}>
          <Text style={styles.description}>
            {PLACEHOLDER_TEXT}
          </Text>
        </Modal>
      )}
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
