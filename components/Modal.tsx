import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { InfoDetails } from '@/types/Card';
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
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
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
    position: 'relative',
    zIndex: 1,
  },
  overlay: {
    flexGrow: 1,
    backgroundColor: '#000',
    opacity: 0.6,
    position: 'absolute',
    zIndex: 2,
  },
  card: {
    zIndex: 5,
    marginBottom: 48
  },
  closeButtonText: {
    textAlign: 'center',
  },
});
