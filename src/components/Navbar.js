import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const tabs = [
    { name: 'Home', icon: 'home-outline', activeIcon: 'home' },
    { name: 'Team chat', icon: 'chatbubble-outline', activeIcon: 'chatbubble' },
    { name: 'Calendar', icon: 'calendar-outline', activeIcon: 'calendar' },
    { name: 'Mail', icon: 'mail-outline', activeIcon: 'mail' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tab}
          onPress={() => setActiveTab(tab.name)}>
          <Icon
            name={activeTab === tab.name ? tab.activeIcon : tab.icon}
            size={24}
            color={activeTab === tab.name ? '#4BA4D0' : '#777'}
          />
          <Text
            style={[
              styles.label,
              { color: activeTab === tab.name ? '#4BA4D0' : '#777' },
            ]}>
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 15,
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: '100%',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  },
});

export default Navbar;