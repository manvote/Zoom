import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from './components/Navbar';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profile}>
          <Image source={require('./assets/homeimage.png')} style={styles.profileImg} />
        </View>
        <TouchableOpacity style={styles.notificationBtn}>
          <Text style={styles.notificationText}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>No upcoming meeting</Text>
        <Text style={styles.subtitle}>The scheduled meeting will be listed here.</Text>
        <Image source={require('./assets/homeimage.png')} style={styles.image}/>
      </View>

      {/* Floating Plus Button */}
      <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('add')}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
      
      <Navbar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 25,
    paddingBottom: 30,
    paddingTop: 20
  },
  profile: {
    marginRight: 20
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  notificationBtn: {
    padding: 10
  },
  notificationText: {
    fontSize: 20,
  },
  mainContent: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
  },
  image:{
    width: 370
  },
  addBtn: {
    position: 'absolute',
    bottom: 120,
    right: 30,
    backgroundColor: '#007bff',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    color: 'white',
    fontSize: 30,
  }
});
