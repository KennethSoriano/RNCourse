import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (
    <>
      <View>
        
      </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal:16,
    
  },
  goalsContainer: {
    flex: 5
  },
  
  
});
