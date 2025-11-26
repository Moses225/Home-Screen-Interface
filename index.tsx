import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

const GRID_ITEMS = [
  { id: 'calls', label: 'Calls', image: require('@/assets/images/Calls.jpg'), route: '/calls' },
  { id: 'camera', label: 'Camera', image: require('@/assets/images/Camera.png'), route: '/camera' },
  { id: 'messages', label: 'Messages', image: require('@/assets/images/Messages.png'), route: '/messages' },
  { id: 'music', label: 'Music', image: require('@/assets/images/Music.png'), route: '/music' },
  { id: 'photos', label: 'Photos', image: require('@/assets/images/Photos.png'), route: '/photos' },
  { id: 'empty', label: '', image: null, route: '', placeholder: true }, // filler
];

export default function HomeScreen() {
  const router = useRouter();

  function handlePress(route: string) {
    if (route) {
      router.push(route as any);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>

      <FlatList
        data={GRID_ITEMS}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-evenly',
          paddingVertical: 16,
          paddingBottom: 32,
        }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        renderItem={({ item }) => {
          if (item.placeholder) {
            return (
              <View style={[styles.card, { backgroundColor: 'transparent', elevation: 0 }]} />
            );
          }

          return (
            <Pressable style={styles.card} onPress={() => handlePress(item.route)}>
              <Image source={item.image} style={styles.icon} contentFit="contain" />
              <Text style={styles.label}>{item.label}</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  card: {
    flex: 1, 
    margin: 8,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    minHeight: 120,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  icon: {
    width: 90,
    height: 90,
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
});