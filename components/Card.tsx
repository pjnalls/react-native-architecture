import { ReactNode } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

import { InfoDetails } from '@/types/Props';
import { Text, View } from './Themed';

type CardProps = InfoDetails & {
  closeButton?: ReactNode;
  style?: ViewStyle
};

export default function Card({ title, children, style, closeButton }: CardProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.cardTitle}>
        <Text style={styles.cardText}>{title}</Text>
        {closeButton}
      </View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#999',
    zIndex: 3
  },
  cardText: {
    paddingLeft: 16,
    fontSize: 28,
  },
  cardTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingRight: -16
  },
  separator: {
    marginVertical: 12,
    height: 1,
    backgroundColor: '#999',
  },
});
