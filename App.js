import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  };

  function deleteGoalHandler(id){
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }

  return (
    <>
      <View style={styles.appContainer}>
        <Button 
          title='Add New Goal' 
          color='#5e0acc' 
          onPress={startAddGoalHandler}
        />
       <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} />
        <View style={styles.goalsContainer}>
          <FlatList 
            data={courseGoals} 
            renderItem={(itemData) => {
              return (
                <GoalItem 
                  text={itemData.item.text} 
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}  
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
  
});
