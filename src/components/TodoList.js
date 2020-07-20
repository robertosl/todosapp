import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import TodoListItem from './TodoListItem';
import { toggleTodo, setEditingTodo } from '../actions';

const TodoList = ( { todos, dispatchToggleTodo, dispacthSetEditingTodo } ) => (
    <View>
        {
            todos.map(todo => (
                <TodoListItem
                    key={ todo.id }
                    todo={ todo }
                    onPressTodo={ () => dispatchToggleTodo(todo.id) }
                    onLongPressTodo={ () => dispacthSetEditingTodo(todo) }
                />
            ))
        }
    </View>
);

const mapStateToProps = state => {
    const { todos } = state;
    return { todos }
}

const mapDispatchToProps = {
    dispatchToggleTodo: toggleTodo,
    dispacthSetEditingTodo: setEditingTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
