import { StyleSheet, Text, View } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';
import { localize } from '@/redux/localizer';
import { i18n } from '@/i18n/locales';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export function Footer() {
  const colorScheme = useColorScheme();
  const locale = useAppSelector((state) => state.localizer.locale);
  const dispatch = useAppDispatch();
  const [isFocus, setIsFocus] = useState(false);

  const data = Object.keys(i18n)
    .slice(1)
    .map((locale) => {
      return {
        label: i18n[locale]?.language?.value,
        value: locale,
      };
    });

  return (
    <View
      style={[
        styles.footer,
        { backgroundColor: Colors[colorScheme ?? 'light'].tabBarBackground },
      ]}
    >
      <View>
        <Text style={styles.languageLabel}>
          {i18n[locale]?.language?.label}
        </Text>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          onChange={({ value }) => {
            dispatch(localize({ locale: value }));
            setIsFocus(false);
          }}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          data={data}
          labelField="label"
          valueField="value"
          value={locale}
        />
      </View>
      <Text style={styles.footerMessage}>
        {i18n[locale]?.footer?.statement}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 24,
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    width: '100%',
    justifyContent: 'space-around',
    alignContent: 'center',
    position: 'absolute',
    paddingHorizontal: 24,
    bottom: 0,
    zIndex: 3,
  },
  languageLabel: {
    fontSize: 16,
    color: '#ddd',
    width: 200,
  },
  languageValue: {
    fontSize: 16,
    color: '#fff',
  },
  footerMessage: {
    fontSize: 14,
    color: '#ddd',
    width: 160,
  },
  dropdown: {
    borderColor: '#999',
    backgroundColor: '#ccc',
    borderWidth: 0.5,
    borderRadius: 4,
    width: 140,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#006',
  },
  iconStyle: {
    width: 20,
    height: 20,
    backgroundColor: '#ccc',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
