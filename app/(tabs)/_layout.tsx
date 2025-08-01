import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tabIconSelected,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
        tabBarPosition: 'top',
        tabBarStyle: {
          height: 140,
          backgroundColor: Colors[colorScheme ?? 'light'].tabBarBackground,
        },
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
          name="about"
          options={{
            title: 'About',
            tabBarIcon: ({ color }) => <TabBarIcon name="info-circle" color={color} />,
          }}
        />
        <Tabs.Screen
          name="services"
          options={{
            title: 'Services',
            tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
          }}
        />
        <Tabs.Screen
          name="contact"
          options={{
            title: 'Contact',
            tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          }}
        />
    </Tabs>
  );
}
