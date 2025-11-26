import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function PhotosScreen() {
  const router = useRouter();

  return (
    <>
      {/* Configure header for this screen */}
      <Stack.Screen
        options={{
          title: 'Photos',
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={32} color="#000" style={{ marginLeft: 16 }} />
            </Pressable>
          ),
        }}
      />

      {/* Screen content */}
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Photos Screen</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF',
  },
  title: {
    fontSize: 22, fontWeight: 'bold', color: '#841617', textAlign: 'center',
  },
});