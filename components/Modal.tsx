import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { InfoDetails } from '@/types/Props';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '@/constants/Colors';

import Card from './Card';
import { useColorScheme } from './useColorScheme';

type ModalProps = InfoDetails & {
  setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ title, children, setShowMore }: ModalProps) {
  const theme = useColorScheme() ?? 'light';

  const handleOnPress = () => {
    setShowMore(() => false);
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.overlay}></View>
      <Card
        title={title}
        style={styles.card}
        closeButton={
          <TouchableOpacity onPress={handleOnPress}>
            <Text style={styles.closeButtonText}>
              <FontAwesome
                size={28}
                style={{ marginBottom: -3 }}
                name="close"
                color={Colors[theme].buttonText}
              />
            </Text>
          </TouchableOpacity>
        }
      >
        {children}
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: '#000',
    opacity: 0.6,
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 2,
  },
  card: {
    marginVertical: 'auto',
    zIndex: 5
  },
  closeButtonText: {
    textAlign: 'center',
  },
});
