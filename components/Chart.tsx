import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { useColorScheme } from './useColorScheme';
import Colors from '@/constants/Colors';
import { MONTHS } from '@/mocks/Dashboard';

const DATA = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];

export default function Chart() {
  const theme = useColorScheme();
  const [data, setData] = useState<{ value: number; label: string }[]>([
    { value: Math.random() * 100, label: 'Jan' },
  ]);

  const handlePush = () => {
    if (data && data.length <= 4) {
      const d = [...data];
      d.push({ value: Math.random() * 100, label: '' });
      d.forEach((x, i) => {
        if (!d[i].label) d[i].label = MONTHS[i].slice(0, 3);
      });
      setData(d);
    }
  };

  const handlePop = () => {
    if (data && data.length > 0) {
      const d = [...data];
      d.pop();
      setData(d);
    }
  };

  return (
    <View style={styles.container}>
      <BarChart
        data={data}
        barBorderColor={Colors[theme ?? 'light'].tabBarBackground}
        frontColor={Colors[theme ?? 'light'].tabIconSelected}
        xAxisColor={Colors[theme ?? 'light'].text}
        yAxisColor={Colors[theme ?? 'light'].text}
        xAxisLabelTextStyle={{ color: Colors[theme ?? 'light'].text }}
        yAxisTextStyle={{ color: Colors[theme ?? 'light'].text }}
        barWidth={24}
        width={240}
        rulesColor={'#79a'}
        barBorderWidth={4}
        barBorderRadius={8}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{
            backgroundColor: Colors[theme ?? 'light'].tabIconSelected,
            padding: 8,
            borderRadius: 4,
          }}
          onPress={handlePush}
        >
          <Text>Push Data</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: Colors[theme ?? 'light'].tabIconSelected,
            padding: 8,
            borderRadius: 4,
          }}
          onPress={handlePop}
        >
          <Text>Pop Data</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 'auto',
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
});
