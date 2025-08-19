import { useReducer, useRef, useState } from 'react';
import { Button, Image, ScrollView, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Footer } from '@/components/Footer';
import Card from '@/components/Card';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import Modal from '@/components/Modal';
import { InfoDetails } from '@/types/Card';
import { i18n } from '@/i18n/locales';
import { useAppSelector } from '@/redux/hooks';
import Chart from '@/components/Chart';

export default function DashboardScreen() {
  const locale = useAppSelector((state) => state.localizer.locale);
  const theme = useColorScheme() ?? 'light';
  const [showMore, setShowMore] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<InfoDetails | undefined>(
    undefined
  );
  const scrollViewRef = useRef<any>(null);

  const handleOnPress = (card: InfoDetails) => {
    setShowMore(!showMore);
    setSelectedCard(card);
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('@/assets/images/culture.jpg')}
        style={styles.image}
      />
      <ScrollView
        contentContainerStyle={[
          { flexGrow: 1, paddingTop: 16, paddingBottom: 80 },
        ]}
        ref={scrollViewRef}
      >
        <Text style={styles.title}>{i18n[locale].tabLabels.dashboard}</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Chart />
        {!showMore &&
          i18n[locale].months.map((month, index) => {
            const description =
              i18n[locale].placeholderText +
              i18n[locale].placeholderText +
              i18n[locale].placeholderText +
              i18n[locale].placeholderText;
            return (
              <Card
                title={month}
                style={{ marginBottom: 16 }}
                key={`date-cards-${index}-${month.toLowerCase()}`}
              >
                <Text style={styles.description}>
                  {description && description?.length > 125
                    ? `${description?.slice(0, 121)}...`
                    : `${description}`}
                </Text>
                <Button
                  title="Show More"
                  color={Colors[theme].buttonText}
                  onPress={() => handleOnPress({ title: month, description })}
                />
              </Card>
            );
          })}
        {showMore && (
          <Modal
            title={selectedCard?.title ?? 'January'}
            setShowMore={setShowMore}
          >
            <Text style={styles.description}>{selectedCard?.description}</Text>
          </Modal>
        )}
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    marginHorizontal: 'auto',
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
