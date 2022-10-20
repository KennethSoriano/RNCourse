import {View, TextInput, Button, StyleSheet} from 'react-native'
import {useState} from 'react'

function GoalInput (props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View styles={styles.inputContainer}>
                <TextInput 
                style={styles.TextInput} 
                placeholder='Your course goal!' 
                onChangeText={goalInputHandler}
                value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title='cancel' />
                    </View>
                </View>
            </View>
        </Modal>
        
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    TextInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    }
})