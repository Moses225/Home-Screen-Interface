import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function cameraScreen() {
    const router = useRouter();
  

  return (

    <>
          {/* Configure header for this screen */}
          <Stack.Screen
            options={{
              title: 'Camera',
              headerLeft: () => (
           <Pressable onPress={() => router.back()} > 
            <Ionicons name="arrow-back" size={32} color="#000" style={{ marginLeft: 16 }} />
           </Pressable>
          ),
        }}
      />

    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the camera app</Text>
    </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#841617', 
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16, 
    marginTop: 8, 
    color: '#555',
  },
});