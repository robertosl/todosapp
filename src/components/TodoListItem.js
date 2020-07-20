import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TodoListItem = ( {todo, onPressTodo, onLongPressTodo} ) => (
    <TouchableOpacity
        onPress={ onPressTodo }
        onLongPress={ onLongPressTodo }
    >
        <View style={styles.line}>
            <Text style={[
                styles.lineText,
                todo.done ? styles.lineThrough : null
            ]}>
                {todo.text}
            </Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    line: {
        marginBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
    },
    lineText:{
        padding: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#bbb'
    },
    lineThrough: {
        textDecorationLine: 'line-through'
    }
});

export default TodoListItem;
