import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoForm from './components/TodoForm';
import rootReducer from './reducers';
import TodoList from './components/TodoList.js';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class TodoApp extends React.Component{
    render(){
        return (
            <Provider store={ store }>
                <View style={styles.container}>
                    <TodoForm />
                    <TodoList />
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    }
});
